import React from "react";
import Mainstrcture from "./Mainstrcture";
import Data from "./Data";

const App = () => {
  return (
    <>
      {Data.map((val) => {
        return (
          <Mainstrcture imgsrc={val.imgsrc} title={val.title} des={val.des} />
        );
      })}
    </>
  );
};

export default App;
