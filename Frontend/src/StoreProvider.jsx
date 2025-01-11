import App from "./App";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
function StoreProvider() {
  return (
    <Provider store={appStore}>
    <App/>
    </Provider>
  );
}

export default StoreProvider;