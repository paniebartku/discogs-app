import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CollectionView from "./features/collection/CollectionView";
import ProfileView from "./features/profile/profileView";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <ProfileView />
        <CollectionView />
      </div>
    </ChakraProvider>
  );
};

export default App;
