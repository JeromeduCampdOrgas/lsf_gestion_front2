import Calendar from "react-calendar";
import "../../../styles/outils/datepicker.css";
import { useState } from "react";

const Picker = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [calendarText, setCalendarText] = useState("Pas de date sélectionnée");
  const [showPicker, setShowPicker] = useState();
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
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`La date sélectionnée es ${value.toDateString()}`);
    setShowPicker(!showPicker);
    const maDate = value.toLocaleDateString("fr");
    console.log(maDate);
  };
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue}`);
  };
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
  };
  return <Calendar />;
};
export default Picker;
