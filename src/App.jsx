import React from "react";
import Home from "./Components/Home";
import MobileHome from "./Components/mobileHome";
import { useScreenSize } from "./hooks/useScreenSize";

function App() {
  const isMobile = useScreenSize();

  return <>{isMobile ? <MobileHome /> : <Home />}</>;
}

export default App;
