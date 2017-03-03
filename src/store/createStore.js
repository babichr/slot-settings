import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { values } from "./reducers";

const logger = createLogger();
const initialState = {
	values: {
		coin: 0.01,
		bet: 1,
		sound: "on",
		music: "off"
	}
};

const makeRootReduces = () => {
	return combineReducers({
		values
	})
}

export const store = createStore(
	makeRootReduces(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
)