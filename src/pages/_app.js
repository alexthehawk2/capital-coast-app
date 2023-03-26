import "@/styles/index.css";
import theme from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/store";

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ChakraProvider>
    </Provider>
  );
}
