import moment from 'moment';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FlowModal from 'common-components/FlowModal/FlowModal';
import useDraft from 'hooks/useDraft';
import PostTile from 'common-components/PostTile';
import { FollowButton, FollowLabel } from '../../Screens/Interestpage/InterestPage.style';
import {
  CancelAction,
  CancelText,
  ErrorActionContainer,
  ErrorNotifyPopup,
  ErrorStatusText,
  PreviewActionItems,
  PublishPreviewCard,
  PublishPreviewTitle,
} from '../NewStory.style';

const DraftPreviewModal = ({ onClose, showPreviewModal }) => {
  const { errorMessage, previewDraft } = useDraft();
  useEffect(() => {
    if (showPreviewModal) {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = 'yes';
    }
  }, [showPreviewModal]);

  return (
    <If condition={showPreviewModal}>
      <FlowModal onClose={() => onClose()}>
        <If condition={errorMessage}>
          <ErrorNotifyPopup>
            <ErrorStatusText>{errorMessage}</ErrorStatusText>
            <ErrorActionContainer>
              <FollowButton onClick={() => onClose()}>
                <FollowLabel>Close</FollowLabel>
              </FollowButton>
            </ErrorActionContainer>
          </ErrorNotifyPopup>
          <Else />
          <PublishPreviewCard>
            <PublishPreviewTitle>Publish post</PublishPreviewTitle>
            <PostTile
              onBookmarkChange={() => {}}
              OnReadLaterChange={() => {}}
              details={{
                headLine: previewDraft.title,
                content: previewDraft.tagline,
                previewImage: previewDraft.preview_image,
                tags: previewDraft.interest,
                authorName: previewDraft.author_name,
                publishDate: moment(new Date()).format('MMM DD, YYYY'),
              }}
              index={1}
              OnLikeChange={() => {}}
              borderWidth={645}
              canShowActionArea={false}
            />
            <PreviewActionItems>
              <CancelAction onClick={() => onClose()}>
                <CancelText>Cancel</CancelText>
              </CancelAction>
              <FollowButton>
                <FollowLabel>Yes</FollowLabel>
              </FollowButton>
            </PreviewActionItems>
          </PublishPreviewCard>
        </If>
      </FlowModal>
    </If>
  );
};

DraftPreviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  showPreviewModal: PropTypes.bool.isRequired,
};

export default DraftPreviewModal;