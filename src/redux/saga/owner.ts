import { ethers } from "ethers";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { notificationError } from "../../helpers/notificationError";
import { IOwnerAction, IOwnerActionTypes } from "../../types/owner";
import { getAccountOwner } from "../../web3/owner";

function* sagaGetOwnerAccount(action: IOwnerAction): Generator<Effect, void> {
  try {
    const accountOwner = yield call(getAccountOwner, action.payload as any);
    yield put({
      type: IOwnerActionTypes.SET_OWNER_ACCOUNT,
      payload: accountOwner,
    });
  } catch (error) {
    notificationError(error);
  }
}

export function* watchOwner(): Generator<Effect, void> {
  yield takeEvery(IOwnerActionTypes.GET_OWNER_ACCOUNT, sagaGetOwnerAccount);
}
