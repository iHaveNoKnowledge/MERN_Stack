import { useState } from "react";
import { InputTest } from "./components/InputTest";

function App() {
  return (
    <>
      <div>
        <h1>MERN Stack</h1>
        <div className="card"></div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <div>
          <InputTest />
        </div>
      </div>
    </>
  );
}

export default App;
