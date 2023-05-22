import React, { FC, useEffect, useState } from "react";

type MonthCounterProps = {
  startDate: string;
};

const MonthCounter: FC<MonthCounterProps> = ({ startDate }) => {
  const [monthsPassed, setMonthsPassed] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const months = (currentDate.getFullYear() - start.getFullYear()) * 12;
    const monthDiff = currentDate.getMonth() - start.getMonth();
    setMonthsPassed(months + monthDiff);
  }, [startDate]);

  return <p>{monthsPassed} msc</p>;
};

export default MonthCounter;
