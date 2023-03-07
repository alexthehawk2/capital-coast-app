import "@/styles/index.css";
import theme from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";
import store from "@/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
