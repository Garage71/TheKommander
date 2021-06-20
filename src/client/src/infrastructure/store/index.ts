import { applyMiddleware, compose, createStore, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import sagas from "../middleware/sagas";
import { initialState } from "./initialState";

const composeEnhancers =
  typeof window === "object" &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];
const appliedMiddleware = applyMiddleware(...middlewares);

const enhancer = composeEnhancers(appliedMiddleware);

const store = createStore(rootReducer, initialState, enhancer);

sagaMiddleware.run(sagas);

export default store;
