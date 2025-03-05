import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "PYTHON","Pandas","Numpy","Seaborn",
          "Matplotlib","Data Collection","Data Visualization",
          "EDA","SQL","Power BI","Microsoft Excel"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
