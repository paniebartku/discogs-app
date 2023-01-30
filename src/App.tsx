import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CollectionView from "./features/collection/CollectionView";
import ProfileView from "./features/profile/profileView";
import { Routes, Route } from "react-router-dom";

const NoMatch = () => {
  return <h1>No match</h1>;
};

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<ProfileView />} />
        <Route path="collection" element={<CollectionView />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
