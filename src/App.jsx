import { useState, useEffect } from 'react';
import StartScreen from './screens/Start.jsx';
import MainMenu from './screens/MainMenu.jsx';
import CharacterSelect from './screens/CharacterSelect.jsx';

function App() {

  const [screen, setScreen] = useState("start");
  
  const goToStart = () => setScreen("start");
  const goToMain = () => setScreen("main");
 

  return (
    <>
      {screen === "start" && <StartScreen onStart={goToMain} />}
      {screen === "main" && <MainMenu onBack={goToStart}> </MainMenu>}

      
       
    </>
  );
}

export default App;
