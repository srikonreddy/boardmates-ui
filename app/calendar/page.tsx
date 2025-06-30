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
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        <button
          onClick={handlePrevMonth}
          className="text-pink-500 hover:text-pink-600 transition"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextMonth}
          className="text-pink-500 hover:text-pink-600 transition"
          aria-label="Next month"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-pink-400">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {dates.map((date) => (
          <div
            key={date.getTime()}
            className={`p-2 rounded text-sm cursor-pointer transition
              ${
                isSameMonth(date, currentDate)
                  ? 'bg-[#fff0eb] text-pink-500'
                  : 'bg-white text-pink-200'
              }
              ${isToday(date) ? 'border border-pink-500 font-semibold' : ''}`}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
}
