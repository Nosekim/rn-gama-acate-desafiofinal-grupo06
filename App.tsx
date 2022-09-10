import RootRoutes from "./src/routes";
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from "./src/store";

function App() {

  return(
    <Provider store={store}>

      <StatusBar backgroundColor="#272629" style="light" />
      <RootRoutes />
      
    </Provider>
  )
}

export default App;
