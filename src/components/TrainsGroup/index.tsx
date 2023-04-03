import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import { ITrain } from "../../models/train";
import Train from "../Train";
import "./style.css";

const TrainsGroup = ({ setSelectedTrain }: any) => {
  const [trains, setTrains] = useState<ITrain[]>([]);

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

  return (
    <div className="train__names">
      {trains.map((train) => (
        <Train
          key={train.name}
          train={train}
          setSelectedTrain={setSelectedTrain}
        />
      ))}
    </div>
  );
};

export default TrainsGroup;
