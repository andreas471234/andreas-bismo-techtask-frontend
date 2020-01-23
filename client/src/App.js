import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import PublicRoutes from "./router";
import AppHolder from "./App.style";
import Boot from "./redux/boot";

const App = () => (
  <AppHolder>
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  </AppHolder>
);
Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
