"use client";


import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isToday,
  subMonths,
  addMonths,
} from "date-fns";


export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const som = startOfMonth(currentDate);
  const eom = endOfMonth(currentDate);
  const startDate = startOfWeek(som, { weekStartsOn: 1 });
  const endDate = endOfWeek(eom, { weekStartsOn: 1 });

  const dates = [];
  let day = startDate;
  while (day <= endDate) {
    dates.push(day);
    day = addDays(day, 1);
  }

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>⬅️</button>
        <h2 className="text-xl font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth}>➡️</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {dates.map((date) => (
          <div
          key={date.getTime()}
            className={`p-2 rounded ${
              isSameMonth(date, currentDate) ? "bg-gray-100" : "bg-gray-50 text-gray-400"
            } ${isToday(date) ? "border border-blue-500" : ""}`}
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
    </div>
  );
}
