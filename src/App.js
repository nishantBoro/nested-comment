import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import store from "./store";
// import { MainReplyBoxContainer } from "./components/ReplyBox";
import { CommentSectionContainer } from "./components/CommentSection";

function App() {
  return (
    <Provider store={store}>
      {/* <MainReplyBoxContainer /> */}
      <CommentSectionContainer />
    </Provider>
  );
}

export default App;
