import { useState } from 'react';
import StartScreen from './screens/Start.jsx';
import MainMenu from './screens/MainMenu.jsx';
import CharacterSelect from './screens/CharacterSelect.jsx';

function App() {

  const [screen, setScreen] = useState("start");
  
  const goToStart = () => setScreen("start");
  const goToMain = () => setScreen("main");
  const goToCharacterSelect = () => setScreen("characterSelect");
  
  return (
    <>
      {screen === "start" && <StartScreen onStart={goToMain} />}
      {screen === "main" && <MainMenu onBack={goToStart} onCharacterSelect={goToCharacterSelect} />}

      {screen === "characterSelect" && (
        <CharacterSelect onBack={goToMain} />
      )}
       
    </>
  );
}

export default App;
