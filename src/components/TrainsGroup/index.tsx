import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import { ITrain } from "../../models/train";
import TrainItem from "./components/TrainItem/index";
import Train from "./components/Train";
import "./style.css";

const TrainsGroup = () => {
  const [trains, setTrains] = useState<ITrain[]>([]);
  const [selectedTrain, setSelectedTrain] = useState<ITrain | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTrains(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showTrainContainer = (train: ITrain) => {
    setSelectedTrain(train);
  };

  return (
    <>
      <div>
        {trains.map((train) => (
          <TrainItem
            key={train.name}
            train={train}
            handleTrainClick={showTrainContainer}
          />
        ))}
      </div>
      {selectedTrain && (
        <Train
          key={selectedTrain.name}
          selectedTrain={selectedTrain}
          setSelectedTrain={setSelectedTrain}
        />
      )}
    </>
  );
};

export default TrainsGroup;
