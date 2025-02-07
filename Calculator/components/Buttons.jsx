import style from './Buttons.module.css';

function Buttons({ value, handleButtonClick }) {
  function performHandling(event) {
    event.preventDefault();
    handleButtonClick(value);  // Directly use the value prop
  }

  return (
    <button
      classNameNameName={style.button}  // Optional, for accessibility purposes
      onClick={performHandling}
    >
      {value}
    </button>
  );
}

export default Buttons;
