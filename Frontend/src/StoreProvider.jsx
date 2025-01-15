import App from "./App";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistor } from './utils/appStore';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function StoreProvider() {
  return (
    <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
bodyClassName = "toastBody"
/>
    </PersistGate>
  </Provider>
  );
}

export default StoreProvider;