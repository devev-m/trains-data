import { ITrain } from "../../models/train";
import "./style.css";

const Train = ({ train, setSelectedTrain }: any) => {
  const handleTrainClick = (train: ITrain) => {
    setSelectedTrain(train);
  };

  return (
    <div
      className="train__title"
      key={train.name}
      onClick={() => handleTrainClick(train)}>
      {train.name}
    </div>
  );
};

export default Train;
