import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ProfilePalatte from 'common-components/ProfilePalatte';
import ReviewPalatte from 'common-components/ReviewPalatte';
import DownArrowImg from 'assets/images/Arrow.svg';
import ProfileImg from 'assets/images/profile.png';
import CommentImg from 'assets/images/commentProfile.svg';
import superClick from 'assets/images/OkHand.svg';
import RedTick from 'assets/images/red_tick.svg';
import Close from 'assets/images/close.svg';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import useDraft from 'hooks/useDraft';
import FlowModal from 'common-components/FlowModal/FlowModal';
import useEscapeHandler from 'hooks/useEscapeHandler';
import useScrollBlock from 'hooks/useScrollBlock';
import useBlur from 'hooks/useBlur';
import Element from '../../new-story/editor/components/Element';
import { withImages, withLinks } from '../../new-story/editor/ContentEditor';
import Leaf from '../../new-story/editor/Leaf';
import { PublishPreviewCard, PublishPreviewTitle } from '../../new-story/NewStory.style';
import { GetPost } from './post.service';
import {
  MainContainer,
  PostMainImage,
  PreviewPostOuterContainer,
  CommentContainer,
  ProfilePic,
  ApplyRow,
  ApplyColumn,
  CommentBox,
  CommentButton,
  CommentLabel,
  ViewCommentListContainer,
  SingleCommentContainer,
  CommentAuthor,
  CommentAuthorName,
  CommentDate,
  CommentHandSymbol,
  CommentContent,
  ArrowImg,
  ViewAllComments,
} from './PostView.style';
import { InterestTag, InterestTagText } from '../../new-story/editor/PreviewCard.style';

let hidden = null;
let visibilityChange = null;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

const PostView = () => {
  const [timerStatus, setTimerStatus] = useState('start');
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const {setRedirectUrl, setPostRedirect, setPreviewDraft} = useDraft();
  const [showSharePopup, setShowSharePopup] = useState(false);
  // eslint-disable-next-line camelcase,no-unused-vars
  const {post_url, username} = useParams();
  const location = useLocation();
  const history = useHistory();
  const editor = useMemo(() => withImages(withLinks(withHistory(withReact(createEditor())))), []);
  const [postID, setPostID] = useState();
  const [isViewerLiked, setIsViewerLiked] = useState(false);
  const [post, setPost] = useState(null);
  const [publishedDate, setPublishedDate] = useState(0);
  const [isViewIsAuthor, setIsViewerIsAuthor] = useState(false);

  const pauseTimer = () => {
    clearInterval(timer);
    setTimerStatus('pause');
  };

  const startTimer = () => {
    if (timerStatus === 'pause' || timerStatus === 'start') {
      setTimer(setInterval(() => setTime((oldTime) => oldTime + 1), 1000));
      setTimerStatus('resume');
    }
  };

  const compensateTimer = (seconds) => {
    setTime((oldTime) => oldTime - seconds);
  };

  const handleVisibilityChange = useCallback(() => {
    if (document[hidden]) {
      pauseTimer();
    } else {
      startTimer();
    }
  }, [timerStatus, time, timer]);

  const handleOnIdle = () => {
    if (timerStatus === 'pause') {
      return;
    }
    pauseTimer();
    compensateTimer(6);
  };
  const handleOnActive = () => {
    startTimer();
  };

  useIdleTimer({
    timeout: 1000 * 6,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 0,
  });

  useEffect(() => {
    if (postID) {
      GetPost(postID)
        .then(({data}) => {
          setPost({
            data: data.post_data,
            interests: data.interests,
            likeCount: data.like_count,
            commentCount: data.comment_count,
            previewImage: data.preview_image,
            authorName: data.author_name,
          });
          setIsViewerLiked(data.is_viewer_liked);
          setIsViewerIsAuthor(data.is_viewer_is_author);
          setPublishedDate(data.published_at);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('error occurred ', err);
        });
    }
    startTimer();
  }, [postID]);

  useEffect(() => {
    // eslint-disable-next-line camelcase
    if (post_url) {
      const id = post_url.substring(post_url.length, post_url.length - 36);
      const regexp = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$");
      if (regexp.test(id)) {
        setPostID(post_url.substring(post_url.length, post_url.length - 36));
      }
    }
    // eslint-disable-next-line camelcase
  }, [post_url]);

  useEffect(() => {
    if (time !== 0 && time % 60 === 0) {
      // eslint-disable-next-line no-console
      console.log('---call api---(feature yet to develop)');
    }
  }, [time]);

  useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    return () => document.removeEventListener(visibilityChange, handleVisibilityChange);
  }, [handleVisibilityChange]);

  useEffect(() => {
    if (location?.state?.shouldOpenSharePopup) {
      setShowSharePopup(true);
      setPostRedirect(false);
      setRedirectUrl(null);
      setPreviewDraft(null);
    }
  }, [location]);

  const getInterestPills = () => {
    return post.interests.map((item) => (
      <InterestTag key={item.id}>
        <InterestTagText>{item.name}</InterestTagText>
      </InterestTag>
    ));
  };

  const onPopupClose = () => {
    setShowSharePopup(false);
    delete location.state.shouldOpenSharePopup;
    history.replace({...history.location, state: {}});
  };

  useEscapeHandler({onEscape: () => setShowSharePopup(false)});
  useScrollBlock({isModalOpen: showSharePopup});
  useBlur({nodes: ['post-login-header', 'post-view'], isVisible: showSharePopup});
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="post-view">
      <If condition={post}>
        <MainContainer>
          <PreviewPostOuterContainer
              style={{marginBottom: 16, backgroundImage: `url(${post.previewImage})`, backgroundSize: 'cover'}}
          >
            <PostMainImage src={post.previewImage}/>
          </PreviewPostOuterContainer>
          <ProfilePalatte
              publishedDate={publishedDate}
              authorName={post.authorName}
              isAuthorViewingPost={isViewIsAuthor}
          />
          <div style={{borderBottom: '1px solid #DFDFDF ', marginTop: 60, marginBottom: 24}}>
            <Slate editor={editor} value={post.data}>
              <Editable
                  renderElement={(props) => <Element {...props} />}
                  readOnly
                  style={{
                    fontSize: 24,
                    lineHeight: '177%',
                  }}
                  renderLeaf={(props) => <Leaf {...props} />}
              />
            </Slate>
          </div>
          <ReviewPalatte likesCount={post.likeCount} commentsCount={post.commentCount} isViewerLiked={isViewerLiked} postID={postID}/>
          <div style={{display: 'flex', alignItems: 'center', marginTop: 32}}>{getInterestPills()}</div>
          <CommentContainer>
            <ApplyRow style={{justifyContent: 'center', alignItems: 'center'}}>
              <ProfilePic src={ProfileImg}/>
              <CommentBox placeholder="Write your thoughts..."/>
              <CommentButton>
                <CommentLabel>Comment</CommentLabel>
              </CommentButton>
            </ApplyRow>
          </CommentContainer>
          <ViewCommentListContainer style={{marginTop: 40}}>
            <ApplyColumn style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <SingleCommentContainer>
                <ApplyRow>
                  <CommentAuthor src={CommentImg}/>
                  <ApplyColumn style={{marginLeft: 12}}>
                    <CommentAuthorName>Munniyamma</CommentAuthorName>
                    <CommentDate>July, 2020</CommentDate>
                  </ApplyColumn>
                  <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 3}}>
                    <CommentHandSymbol src={superClick}/>
                  </div>
                </ApplyRow>
                <ApplyRow style={{marginTop: 17}}>
                  <CommentContent>
                    படிப்படியாக உயர்ந்த எண்ணிக்கை தமிழ்நாட்டில் கொரோனா தொற்று பரவத் தொடங்கியபோது
                  </CommentContent>
                  <ArrowImg src={DownArrowImg}/>
                </ApplyRow>
              </SingleCommentContainer>
              <ViewAllComments>all comments</ViewAllComments>
            </ApplyColumn>
          </ViewCommentListContainer>
        </MainContainer>
        <If condition={showSharePopup}>
          <FlowModal onClose={() => onPopupClose()}>
            <PublishPreviewCard
                style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px 16px 35px 16px'}}
            >
              <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => onPopupClose()}>
                  <img src={Close} alt="success-tick" width={32} height={32}/>
                </div>
              </div>
              <img src={RedTick} alt="success-tick" width={56} height={56}/>
              <PublishPreviewTitle style={{marginTop: 16}}>Publish post</PublishPreviewTitle>
            </PublishPreviewCard>
          </FlowModal>
        </If>
      </If>
    </div>
  );
};
export default PostView;
