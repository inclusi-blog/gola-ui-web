import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ProfilePalatte from 'common-components/ProfilePalatte';
import ReviewPalatte from 'common-components/ReviewPalatte';
import SingleCommentTile from 'common-components/SingleCommentTile';
import ProfileImg from 'assets/images/profile.png';
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
import {AddComment, GetPost, ListComments} from './post.service';
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
  ViewAllComments, CommentsDivider,
} from './PostView.style';
import { InterestTag, InterestTagText } from '../../new-story/editor/PreviewCard.style';
import moment from "moment";

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
  const [commentText, setCommentText] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [isShowAllComments, setIsShowAllComments] = useState(false);
  const [start, setStart] = useState(0);

  const onComment = () => {
    AddComment(postID,commentText).then(()=>{
      const comment = {
        commented_at: moment(new Date()).format('YYYY-MM-DDThh:mm:ss.SSSSSSZ'),
        data: commentText,
        id: `${commentList.length+1}`,
        post_id: postID,
        username: "nivethaa",
      };
      setPost({...post,commentCount:post.commentCount+1});
      setCommentList([comment,...commentList]);
      setCommentText('');
    }).catch((err)=>console.log("unable to comment on this post",err));
  };

  const onClickAllComments = () => {
    setIsShowAllComments(true);
    console.log("all comments clicked!!!!",commentList.length);
  }

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

  const fetchComments = () => {
    ListComments(postID, start, 5)
        .then(({data}) => {
          setCommentList([...commentList, ...data]);
        }).catch((err) => {
      console.log("unable to fetch comments ", err);
    })
  };

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
      fetchComments();
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
        <MainContainer >
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
              <CommentBox value={commentText}
                          placeholder="Write your thoughts..."
                          onFocus={(e) => e.target.placeholder = ''}
                          onBlur={(e) => e.target.placeholder = 'Write your thoughts...'}
                          onChange={(event)=>{
                            setCommentText(event.target.value);
              }}/>
              <CommentButton onClick={onComment}>
                <CommentLabel>Comment</CommentLabel>
              </CommentButton>
            </ApplyRow>
          </CommentContainer>
          <ViewCommentListContainer>
            <If condition={isShowAllComments}>
              <ApplyColumn style={{marginTop: 32}}>
                {
                  commentList.map((comment)=>{
                    return (
                        <div>
                          <SingleCommentTile key={comment.id} singleComment={comment}/>
                          <CommentsDivider/>
                        </div>
                    );
                  })
                }
              </ApplyColumn>
              <Else/>
              <ApplyColumn style={{marginTop: 32}}>
                <SingleCommentTile singleComment={commentList[0]}/>
                <ViewAllComments onClick={onClickAllComments}>all comments</ViewAllComments>
              </ApplyColumn>
            </If>
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
