import { Provider } from "react-redux";
import { store, rootSaga } from "./store";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Toaster } from "react-hot-toast";

store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        <Toaster position="bottom-center" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
