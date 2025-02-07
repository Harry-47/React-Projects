import { useState } from 'react';
import Input from './components/Input';
import Container from './components/Container';
import ButtonMaker from './components/ButtonMaker';

function App() {
  const buttons = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/", ".", "C", "="
  ];

  const [display, setDisplay] = useState("");  // Default value for display

  function handleButtonClick(value) {
    if (value === "=") {
      try {
        // Safely evaluate the expression
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");  // Clear display
    } else {
      setDisplay(display + value);  // Append value to display
    }
  }

  return (
    <>
      <Container>
        <Input display={display} />
      </Container>
      <Container>
        <ButtonMaker buttons={buttons} handleButtonClick={handleButtonClick} />
      </Container>
    </>
  );
}

export default App;
