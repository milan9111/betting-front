import { ethers } from "ethers";
import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { notificationError } from "../../helpers/notificationError";
import { notificationSuccess } from "../../helpers/notificationSuccess";
import { IOwnerAction, IOwnerActionTypes } from "../../types/owner";
import {
  checkFaidedAccountAddress,
  getAccountOwner,
  getContactBalance,
  sendValueToContract,
  transferBalance,
} from "../../web3/owner";

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

function* sagaSendValueToContract(
  action: IOwnerAction
): Generator<Effect, void> {
  try {
    const tx = yield call(sendValueToContract, action.payload as any);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaTransferBalance(action: IOwnerAction): Generator<Effect, void> {
  try {
    const tx = yield call(transferBalance, action.payload as any);
    notificationSuccess(tx);
  } catch (error) {
    notificationError(error);
  }
}

function* sagaCheckFailedAccountAddress(
  action: IOwnerAction
): Generator<Effect, void> {
  try {
    const res = yield call(checkFaidedAccountAddress, action.payload as any);
    yield put({
      type: IOwnerActionTypes.SET_FAILED_ACCOUNT_ADDRESS,
      payload: res,
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
  yield takeEvery(
    IOwnerActionTypes.SEND_VALUE_TO_CONTRACT,
    sagaSendValueToContract
  );
  yield takeEvery(IOwnerActionTypes.TRANSFER_BALANCE, sagaTransferBalance);
  yield takeEvery(
    IOwnerActionTypes.GET_FAILED_ACCOUNT_ADDRESS,
    sagaCheckFailedAccountAddress
  );
}
