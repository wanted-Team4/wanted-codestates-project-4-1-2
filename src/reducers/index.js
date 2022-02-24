import { combineReducers } from "redux";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
});

export default rootReducer;
