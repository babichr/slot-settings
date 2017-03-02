import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { coinValue, betValue } from "./reducers";

const logger = createLogger();
const initialState = {
	betValue: {
		value: 1,
		checked: true
	},
	coinValue:{
		value: 0.01,
		checked: true
	}
};

const makeRootReduces = () => {
	return combineReducers({
		coinValue,
		betValue
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