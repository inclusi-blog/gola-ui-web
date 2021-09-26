import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import SuperImg from 'assets/images/Super.png';
// eslint-disable-next-line import/no-unresolved
import convertPostLikesCount from 'utils/commonUtils';
import {
    CommonFlexColumn,
    CommonFlexRow,
    HandSymbol,
    InterestMainContainer,
    LikeCount,
    PostContent,
    PostHeadLine,
    PostImage,
    PostTag,
    PublishDate,
    SmallDots,
} from './PostTile.style';

const PublishedPostTile = ({
details,
borderWidth,
}) => {
    const {
        id,
        interests,
        likes_count,
        preview_image,
        published_at,
        tagline,
        title
    } = details;
    const publishedAt = moment(published_at);

    const renderPostTags = () => {
        return <PostTag>{interests[0].name}</PostTag>;
    };
    return (
        <div>
            <InterestMainContainer style={{ marginTop: 32 }}>
                <CommonFlexColumn style={{ marginRight: 24 }}>
                    <PostHeadLine>{title}</PostHeadLine>
                    <PostContent>{tagline}</PostContent>
                    <CommonFlexRow style={{ marginTop: 7, marginBottom: 4, alignItems: 'center' }}>
                        <PublishDate>{publishedAt.format("MMM, DD YYYY")}</PublishDate>
                        {renderPostTags()}
                    </CommonFlexRow>
                    <CommonFlexRow style={{ alignItems: 'center', justifyContent: 'flex-end', height: 25 }}>
                        <HandSymbol src={SuperImg} />
                        <LikeCount>{convertPostLikesCount(likes_count)}</LikeCount>
                        <CommonFlexRow>
                            <SmallDots />
                            <SmallDots />
                            <SmallDots />
                        </CommonFlexRow>
                    </CommonFlexRow>
                </CommonFlexColumn>
                <PostImage src={preview_image} />
            </InterestMainContainer>
            <div style={{ borderBottom: '1px solid #DEE3ED ', marginTop: 20, width: borderWidth }} />
        </div>
    );
};
PublishedPostTile.propTypes = {
    details: PropTypes.shape({
        id: PropTypes.string.isRequired,
        interests: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
        })).isRequired,
        likes_count: PropTypes.number.isRequired,
        preview_image: PropTypes.string,
        published_at: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    borderWidth: PropTypes.number,
};

PublishedPostTile.defaultProps = {
    borderWidth: 438,
};

export default PublishedPostTile;
