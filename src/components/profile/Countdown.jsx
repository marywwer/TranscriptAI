import { useState, useEffect } from "react";

function Countdown() {
  const initialMinutes = 143;
  const [remainingMinutes, setRemainingMinutes] = useState(initialMinutes);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingMinutes((prevMinutes) => {
        if (prevMinutes > 0) {
          return prevMinutes - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {remainingMinutes > 0 ? (
        <div
          style={{
            marginTop: "0.25rem",
            fontSize: "0.9rem",
            color: "#cbd5e1",
          }}
        >
          <i
            className="fas fa-clock"
            style={{ marginRight: "0.5rem", color: "#22c55e" }}
          ></i>
          {remainingMinutes} минут осталось
        </div>
      ) : (
        <div
          style={{
            marginTop: "0.25rem",
            fontSize: "0.9rem",
            color: "#cbd5e1",
          }}
        >
          <i
            className="fas fa-clock"
            style={{ marginRight: "0.5rem", color: "#c52222ff" }}
          ></i>
          Время истекло!
        </div>
      )}
    </div>
  );
}

export default Countdown;