import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import { ITrain } from "../../models/train";
import TrainForm from "./components/TrainForm/TrainForm";
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
      <div className="train__items">
        {trains.map((train) => (
          <div
            className="train__item"
            key={train.name}
            onClick={() => showTrainContainer(train)}>
            {train.name}
          </div>
        ))}
      </div>
      {selectedTrain && (
        <TrainForm
          key={selectedTrain.name}
          selectedTrain={selectedTrain}
          setSelectedTrain={setSelectedTrain}
        />
      )}
    </>
  );
};

export default TrainsGroup;
