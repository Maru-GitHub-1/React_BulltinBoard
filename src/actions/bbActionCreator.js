import Channel from '../models/Channels';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const FETCH_CHANNELS_REQUEST = 'FETCH_CHANNELS_REQUEST';
export const FETCH_CHANNELS_SUCCESS = 'FETCH_CHANNELS_SUCCESS';
export const FETCH_CHANNELS_FAILURE = 'FETCH_CHANNELS_FAILURE';

export const fetchChannels = () => {
  return async (dispatch) => {
    dispatch( fetchChannelsRequest() );
    try {
      const channels = await Channel.fetch();
      dispatch( fetchChannelsSuccess(channels) );
    } catch (error) {
      dispatch( fetchChannelsFailure(error) );
    };
  };
};

export function fetchChannelsRequest() {
  return {
    type: FETCH_CHANNELS_REQUEST
  }
};

export function fetchChannelsSuccess(channels) {
  return {
    type: FETCH_CHANNELS_SUCCESS,
    channels
  }
};

export function fetchChannelsFailure(error) {
  return {
    type: FETCH_CHANNELS_FAILURE,
    error
  }
};

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    text
  };
};