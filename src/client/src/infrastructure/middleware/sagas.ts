import { SagaIterator } from "redux-saga";
import { call, put, select, StrictEffect, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions/actions";
import * as ActionTypes from "../actions/actionTypes";
import { getDrives, IData, IError } from "../api/api";

interface ActionInterface<T = {}> {
  type: string;
  payload?: T;
}

class Action<T = {}> implements ActionInterface<T> {
  public type!: string;
  public payload?: T;
}

function* getDrivesList(): Generator<StrictEffect, void, IData | IError> {
  try {
    const result = yield call(getDrives);
    let drives: string[];
    if ((result as IError).error) {
      Actions.getDrivesFailure();
    } else {
      drives = (result as IData).data as string[];
      yield put(Actions.getDrivesComplete({ drives }));
    }
  } catch {
    yield put(Actions.getDrivesFailure());
  }
}

function* watch(): SagaIterator {
  yield takeEvery(ActionTypes.GET_DRIVES_REQUEST, getDrivesList);
}

export default watch;
