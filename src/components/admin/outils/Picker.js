import Calendar from "react-calendar";
import { useState } from "react";
const Picker = ({ handleDateChange }) => {
  const [maDate, setMaDate] = useState();
  const allMonthValues = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Auoût",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div>
      <Calendar
        className="calendar"
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};
export default Picker;
