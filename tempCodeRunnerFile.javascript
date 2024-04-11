// Import necessary testing libraries
const { render, fireEvent } = require('@testing-library/react');

test('handleSubmit function works correctly', () => {
  // Mock necessary functions and variables
  const e = { preventDefault: jest.fn() };
  const setStorage = jest.fn();
  const setInput = jest.fn();

  // Call the handleSubmit function
  handleSubmit(e, setStorage, setInput);

  // Assertions
  expect(e.preventDefault).toHaveBeenCalled();
  expect(setStorage).toHaveBeenCalledWith(expect.arrayContaining([input]));
  expect(setInput).toHaveBeenCalledWith("");
});

