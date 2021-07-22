import { useEffect } from "react";
import "./Star.css";

export default function Star({ cl, converterStars, check }) {
  // useEffect(() => {
  //   converterStars(cl)
  //   check(cl)
  // }, [converterStars, check]);

  return (
    <div style={{ position: "absolute" }} key={cl._id}>
      <button type="button" onClick={() => converterStars(cl)}>
        <span>
          {check(cl) ? (
            <span style={{ fontSize: "40px" }}>⭐</span>
          ) : (
            <span style={{ color: "transparent", fontSize: "40px" }}>1111</span>
          )}
        </span>
      </button>
    </div>
  );
}
