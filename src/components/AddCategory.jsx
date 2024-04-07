import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handlerInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        placeholder="Buscar gifs"
        type="text"
        onChange={handlerInputValue}
        value={inputValue}
      />
    </form>
  );
};
