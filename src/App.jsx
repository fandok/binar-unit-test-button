import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("testing");
  };

  return (
    <div>
      Main PS
      <button onClick={handleClick}>Mau main!</button>
      <button
        onClick={() => {
          setText("suka dong");
        }}
      >
        Suka gak?
      </button>
      <div>{text ? text : "gak suka"}</div>
    </div>
  );
};

export default App;
