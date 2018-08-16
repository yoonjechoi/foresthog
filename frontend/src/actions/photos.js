// actions

import {PHOTO_SET_FEED, PHOTO_ADD_COMMENT, PHOTO_LIKE_PHOTO, PHOTO_UNLIKE_PHOTO} from './ActionTypes';


// action creators
function setFeed(feed) {
  return {
    type: PHOTO_SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: PHOTO_LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: PHOTO_UNLIKE_PHOTO,
    photoId
  };
}

function addComment(photoId, comment) {
  return {
    type: PHOTO_ADD_COMMENT,
    photoId,
    comment
  };
}

// API actions
function getFeed() {
  return (dispatch, getState) => {
    const {tokenType, accessToken} = getState();


    const headers = {
        Authorization: `${tokenType} ${accessToken}`,
      };

      return axios.post('/api/v1/images', undefined, {headers})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
  };
}
