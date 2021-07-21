import { createStore } from "redux";
import applicationReducer from "../reducers/applicationReducer";

const initialState = {
  isAuthenticated: !!localStorage.getItem("IS_AUTHENTICATED"),
  alertMessage: {
    visibility: false,
    message: "",
  },
  modal: {
    visibility: false,
    callback: () => {},
    title: "",
    subTitle: "",
  },
};

const applicationStore = createStore(
  applicationReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default applicationStore;
