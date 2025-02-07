import Buttons from "./buttons";

function ButtonMaker({ buttons, handleButtonClick }) {
  return (
    <>
      {buttons.map(item => (
        <Buttons key={item} value={item} handleButtonClick={handleButtonClick} />
      ))}
    </>
  );
}

export default ButtonMaker;
