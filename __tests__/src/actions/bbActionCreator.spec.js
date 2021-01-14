import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE,
  fetchChannels
} from '../../../src/actions/bbActionCreator';
import ChannelModel from '../../../src/models/Channels';

jest.mock(ChannelModel.fetch);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('bbActionCreatorのテスト', () => {
  it('fetch成功時,FETCH_CHANNELS_SUCCESSと一緒にクイズデータが渡される', async () => {
    const expectedResults = [
      {
        id: 'a',
        name: 'abc'
      }
    ];
    ChannelModel.fetch.mockResolvedValue({
      channels: expectedResults
    });

    const store = mockStore();
    await store.dispatch( fetchChannels() );

    // store.getActions() はredux-mock-storeのメソッド
    expect( store.getActions() ).toEqual([
      {
        type: FETCH_CHANNELS_REQUEST
      },
      {
        type: FETCH_CHANNELS_SUCCESS,
        channels: expectedResults
      }
    ]);
  });

  it('fetch失敗時,FETCH_CHANNELS_FAILUREと一緒にエラー情報が渡される', async () => {
    const expectedError = {
      massage: 'ダミーエラ〜メッセージ'
    };
    ChannelModel.fetch.mockRejectedValue(expectedError);

    const store = mockStore();
    await store.dispatch(fetchChannels());

    expect( store.getActions() ).toEqual([
      {
        type: FETCH_CHANNELS_REQUEST
      },
      {
        type: FETCH_CHANNELS_FAILURE,
        error: expectedError
      }
    ]);
  })
});