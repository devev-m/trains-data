import { useState, useEffect } from 'react';
import './App.css';
import { ITrain } from './models/train';
import { API_URL } from './constants/api';

function App() {
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

  const handleTrainClick = (train: ITrain) => {
    setSelectedTrain(train);
  };

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
      const validSpeedLimits = selectedTrain.speedLimits.filter((limit) => limit.speedLimit > 0);
      if (validSpeedLimits.length !== selectedTrain.speedLimits.length) {
        console.error('Ошибка: скоростные ограничения должны быть положительными целыми числами.');
      } else {
        console.log(
          'Данные успешно отправлены на сервер:',
          selectedTrain.speedLimits
            .map((item) => item.speedLimit)
            .sort((a: number, b: number) => a - b),
        );
      }
    }
    setSelectedTrain(null);
  };

  return (
    <>
      <h1 className="title">Поезда</h1>

      <div className="wrapper">
        <div className="train__names">
          {trains.map((train) => (
            <div className="train__title" key={train.name} onClick={() => handleTrainClick(train)}>
              {train.name}
            </div>
          ))}
        </div>

        {selectedTrain && (
          <div className="train__speed">
            <h3 className="train__speed-title">
              Скоростные ограничения для поезда "{selectedTrain.name}"
            </h3>
            <form onSubmit={handleSubmit}>
              {selectedTrain.speedLimits.map((item, index) => (
                <div key={item.name}>
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
              <button>Отправить на сервер</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
