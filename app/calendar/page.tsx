'use client';

import { useState } from 'react';
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
} from 'date-fns';

type CalendarEvent = {
  date: Date;
  title: string;
};

export default function CalendarClient() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [events] = useState<CalendarEvent[]>([
    { date: new Date(2025, 5, 30), title: 'Rent Due' },
    { date: new Date(2025, 5, 30), title: 'Team Meeting' },
    { date: new Date(2025, 6, 2), title: '5K Run' },
  ]);

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

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate(),
    );
  };
  return (
    <div className="p-6 max-w-lg mx-auto w-full">
      <div className="relative flex items-center justify-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-pink-500 hover:text-pink-600 transition absolute left-0"
          aria-label="Previous month"
        >
          ←
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-red-300">
          {format(currentDate, 'MMMM yyyy')}
        </h2>

        <button
          onClick={handleNextMonth}
          className="text-red-300 hover:text-pink-600 transition absolute right-0"
          aria-label="Next month"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-red-300">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {dates.map((date) => (
          <div
            key={date.getTime()}
            className={`p-2 rounded text-sm cursor-pointer transition flex flex-col items-center justify-center aspect-square
              ${
                isSameMonth(date, currentDate)
                  ? 'bg-[#fff0eb] text-pink-700'
                  : 'bg-white text-red-300'
              }
              ${isToday(date) ? 'border border-pink-500 font-semibold' : ''}
            `}
          >
            {format(date, 'd')}
            <div className="flex gap-[2px] mt-1 flex-wrap justify-center">
              {getEventsForDate(date).map((_, idx) => (
                <span
                  key={idx}
                  className="w-1.5 h-1.5 rounded-full bg-red-300"
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
