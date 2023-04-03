import { useState } from "react";
import { ITrain } from "./models/train";
import TrainsGroup from "./components/TrainsGroup";
import SpeedLimit from "./components/SpeedLimit";
import "./App.css";

function App() {
  const [selectedTrain, setSelectedTrain] = useState<ITrain | null>(null);

  return (
    <>
      <h1 className="title">Поезда</h1>
      <div className="wrapper">
        <TrainsGroup setSelectedTrain={setSelectedTrain} />
        {selectedTrain && (
          <SpeedLimit
            selectedTrain={selectedTrain}
            setSelectedTrain={setSelectedTrain}
          />
        )}
      </div>
    </>
  );
}

export default App;
