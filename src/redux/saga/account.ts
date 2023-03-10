import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { notificationError } from "../../helpers/notificationError";
import { IEthersAction, IEthersActionTypes } from "../../types/ethers";
import { connectWallet } from "../../web3/connectWallet";

function* sagaGetUserAccount(action: IEthersAction): Generator<Effect, void> {
  try {
    const accountUser = yield call(connectWallet);
    yield put({
      type: IEthersActionTypes.SET_USER_ACCOUNT,
      payload: accountUser,
    });
  } catch (error) {
    notificationError(error);
  }
}

export function* watchAccount(): Generator<Effect, void> {
  yield takeEvery(IEthersActionTypes.GET_USER_ACCOUNT, sagaGetUserAccount);
}
