import "./style.css";

const SpeedLimit = ({ selectedTrain, setSelectedTrain }: any) => {
  const handleSpeedLimitChange = (newValue: string, index: number) => {
    if (selectedTrain) {
      const newSpeedLimits: any = [...selectedTrain.speedLimits];
      const newLimit = parseInt(newValue);
      newSpeedLimits[index].speedLimit = newLimit;
      if (newLimit > 0) {
        setSelectedTrain({
          ...selectedTrain,
          speedLimits: newSpeedLimits,
        });
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedTrain) {
      const validSpeedLimits = selectedTrain.speedLimits.filter(
        (limit: any) => limit.speedLimit > 0,
      );
      if (validSpeedLimits.length !== selectedTrain.speedLimits.length) {
        console.error("Ошибка: скоростные ограничения должны быть положительными целыми числами.");
      } else {
        console.log(
          "Данные успешно отправлены на сервер:",
          selectedTrain.speedLimits
            .map((item: any) => item.speedLimit)
            .sort((a: number, b: number) => a - b),
        );
      }
    }
    setSelectedTrain(null);
  };

  return (
    <div className="train__speed">
      <h3 className="train__speed-title">
        Скоростные ограничения для поезда "{selectedTrain.name}"
      </h3>
      <form onSubmit={handleSubmit}>
        {selectedTrain.speedLimits.map((item: any, index: number) => (
          <div
            className="train__speed-info"
            key={item.name}>
            <div>
              Текущее скоростное ограничение для {item.name} : {item.speedLimit}
            </div>
            <input
              type="number"
              onChange={(e) => handleSpeedLimitChange(e.target.value, index)}
              placeholder="Изменить..."
            />
          </div>
        ))}
        <button className="train__speed-button">Отправить на сервер</button>
      </form>
    </div>
  );
};

export default SpeedLimit;
