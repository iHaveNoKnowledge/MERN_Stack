import React, { useState, useEffect } from "react";

export const InputTest = () => {
  let [input, setInput] = useState("a");

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div>
      <div>InputTest</div>
      <form onSubmit={() => alert("Submitted"+" "+input)}>
        <div>
          <label>Content</label>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>แสดงผล{input}</label>
          <input></input>
        </div>
        <div>
          <button type="submit">บันทึก</button>
        </div>
      </form>
    </div>
  );
};
