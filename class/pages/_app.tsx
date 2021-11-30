import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8MkBjwRVZjdylnLnyHsImf6VS8Q-gXsY",
  authDomain: "codecamp-04-3ad57.firebaseapp.com",
  projectId: "codecamp-04-3ad57",
  storageBucket: "codecamp-04-3ad57.appspot.com",
  messagingSenderId: "42940765939",
  appId: "1:42940765939:web:bc66bed930c7ff339a4986",
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  // const [userInfo, setUserInfo] = useState({});
  const myValue = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    // userInfo: userInfo,
    // setUserInfo: setUserInfo,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
