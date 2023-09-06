import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./Routers/Router";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={Persistor} loading={null}>
          <Router />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
