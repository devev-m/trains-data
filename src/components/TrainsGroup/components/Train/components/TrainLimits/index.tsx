import "./style.css";

const TrainLimits = ({ item, index, selectedTrain, setSelectedTrain }) => {
  const handleSpeedLimitChange = (e: any, index: number) => {
    const newLimit = +e.target.value;
    const newSpeedLimits = [...selectedTrain.speedLimits];
    newSpeedLimits[index].speedLimit = newLimit;
    setSelectedTrain({
      ...selectedTrain,
      speedLimits: newSpeedLimits,
    });
  };

  return (
    <>
      <h4 className="train__speed-subtitle">
        Текущее скоростное ограничение для {item.name} : {item.speedLimit}
      </h4>
      <input
        type="number"
        onChange={(e) => handleSpeedLimitChange(e, index)}
        placeholder="Изменить..."
      />
    </>
  );
};

export default TrainLimits;
