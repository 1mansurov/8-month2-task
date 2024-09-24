import React, { useState } from 'react';

const getWeekday = (dayNumber: number): string => {
  switch (dayNumber) {
    case 1:
      return "Dushanba";
    case 2:
      return "Seshanba";
    case 3:
      return "Chorshanba";
    case 4:
      return "Payshanba";
    case 5:
      return "Juma";
    case 6:
      return "Shanba";
    case 7:
      return "Yakshanba";
    default:
      return "1 va 7 oraligacha son kiriting";
  }
};

const WeekdayFinder: React.FC = () => {
  const [dayNumber, setDayNumber] = useState<number>(1);
  const [weekday, setWeekday] = useState<string>("");

  const handleFindDay = () => {
    const day = getWeekday(dayNumber);
    setWeekday(day);
  };

  return (
    <div className="weekday-finder">
      <h1>Hafta kunini top</h1>
      <input
        type="number"
        min="1"
        max="7"
        value={dayNumber}
        onChange={(e) => setDayNumber(Number(e.target.value))}
      />
      <button onClick={handleFindDay}>Bosing</button>

      {weekday && <p>{weekday}</p>}
    </div>
  );
};

export default WeekdayFinder;
