import React from "react";
import "./App.css";

import LeftHand from "./LeftHand";
import RightHandK from "./RightHandK";

import { ChakraProvider } from "@chakra-ui/react";

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <main class="body">
          <div
            style={{
              width: "100vw",
              height: "100vh",
              padding: 32,
              display: "flex",
              gap: 32,
            }}
          >
            {/* <NavBar />
            <Preferences /> */}
            <LeftHand />
            <RightHandK />
          </div>
        </main>
      </ChakraProvider>
    );
  }
}

export default App;
