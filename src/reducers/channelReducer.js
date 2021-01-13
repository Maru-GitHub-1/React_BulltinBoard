import {
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE
} from '../actions/bbActionCreator';

const channelInitialState = {
  channels: [],
  channelLoading: false,
  error: null
}

export const bbReducer = (state = channelInitialState, action) => {
  switch (action.type) {
    case FETCH_CHANNELS_REQUEST:
      return {
        ...state,
        channelLoading: true
      };
    case FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: action.channels,
        channelLoading: false,
        error: null
      };
    case FETCH_CHANNELS_FAILURE:
      return {
        ...state,
        channelLoading: false,
        errpr: action.error
      };
    default:
      return channelInitialState;
  }
}