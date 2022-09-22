import RootRoutes from "./src/routes";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import store from "./src/store";

Amplify.configure(awsconfig);

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#272629" style="light" />
      <RootRoutes />
    </Provider>
  );
}

export default App;
