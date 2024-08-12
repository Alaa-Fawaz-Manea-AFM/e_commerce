import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex items-end gap-1">
      <div>
        <div className="text-xs font-medium">Days</div>
        <div className="text-3xl font-bold">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-red mb-1 text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Hours</div>
        <div className="text-3xl font-bold">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-red mb-1 text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Minutes</div>
        <div className="text-3xl font-bold">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-red mb-1 text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Seconds</div>
        <div className="text-3xl font-bold">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
