import { ITrain } from "../../../../models/train";
import "./style.css";

const TrainItem = ({ train, handleTrainClick }) => {
  const handleClick = (train: ITrain) => {
    handleTrainClick(train);
  };

  return (
    <div
      className="train__item"
      key={train.name}
      onClick={() => handleClick(train)}>
      {train.name}
    </div>
  );
};

export default TrainItem;
