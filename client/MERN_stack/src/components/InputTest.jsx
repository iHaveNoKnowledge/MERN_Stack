import React, { useState, useEffect } from "react";

/**
 * InputTest component
 *
 * @returns {React.ReactElement} The InputTest component
 */
export const InputTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValues, setStoredValues] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStoredValues((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <div>InputTest</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Content</label>
          <input id="content" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </div>
        <div>
          <label htmlFor="preview">Preview</label>
          <input id="preview" value={inputValue} readOnly />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <div>
        <ul>
          {storedValues.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
