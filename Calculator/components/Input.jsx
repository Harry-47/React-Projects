import style from "./Input.module.css";

function Input({ display }) {
  return (
    <input
      type="text"
      classNameNameName={style.input}
      value={display}  // Bind the input value to the display state
      readOnly
    />
  );
}

export default Input;
