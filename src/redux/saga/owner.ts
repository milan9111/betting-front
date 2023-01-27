import { ethers } from "ethers";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { notificationError } from "../../helpers/notificationError";
import { IOwnerAction, IOwnerActionTypes } from "../../types/owner";
import { getAccountOwner, getContactBalance } from "../../web3/owner";

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

function* sagaGetBalanceContract(
  action: IOwnerAction
): Generator<Effect, void> {
  try {
    const contractBalance = yield call(
      getContactBalance,
      action.payload as any
    );
    yield put({
      type: IOwnerActionTypes.SET_BALANCE_CONTRACT,
      payload: contractBalance,
    });
  } catch (error) {
    notificationError(error);
  }
}

export function* watchOwner(): Generator<Effect, void> {
  yield takeEvery(IOwnerActionTypes.GET_OWNER_ACCOUNT, sagaGetOwnerAccount);
  yield takeEvery(
    IOwnerActionTypes.GET_BALANCE_CONTRACT,
    sagaGetBalanceContract
  );
}
