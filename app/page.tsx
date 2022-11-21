import React from "react";
import Home from "../components/home/page";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="w-screen md:flex md:justify-center">
      <Home />
    </div>
  );
};

export default App;
