import TrainLimits from "./components/TrainLimits/index";
import "./style.css";

const Train = ({ selectedTrain, setSelectedTrain }) => {
  const handleSubmitFormSpeeds = (e: any) => {
    e.preventDefault();
    const validSpeedLimits = selectedTrain.speedLimits.filter((item: any) => item.speedLimit > 0);
    if (validSpeedLimits.length !== selectedTrain.speedLimits.length) {
      console.error("Ошибка: все скоростные ограничения должны быть положительными целыми числами");
    } else {
      console.log(
        "Данные успешно отправлены на сервер:",
        selectedTrain.speedLimits
          .map((item: any) => item.speedLimit)
          .sort((a: number, b: number) => a - b),
      );
    }
    setSelectedTrain(null);
  };

  return (
    <div className="train__speed">
      <h3 className="train__speed-title">
        Скоростные ограничения для поезда "{selectedTrain.name}"
      </h3>
      <form
        className="train__speed-form"
        onSubmit={handleSubmitFormSpeeds}>
        {selectedTrain.speedLimits.map((item: any, index: number) => (
          <TrainLimits
            key={item.name}
            item={item}
            index={index}
            selectedTrain={selectedTrain}
            setSelectedTrain={setSelectedTrain}
          />
        ))}
        <button className="train__speed-button">Отправить на сервер</button>
      </form>
    </div>
  );
};

export default Train;
