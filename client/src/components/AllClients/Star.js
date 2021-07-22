import { useEffect } from "react";
import "./Star.css";

export default function Star({ cl, converterStars, check }) {

  // useEffect(() => {
  //   converterStars(cl)
  //   check(cl)
  // }, [converterStars, check]);

  return (
<div key={cl._id}>
    <button
    type="button"
    onClick={() => converterStars(cl)}
  >
    
    <span>{check(cl) ? "⭐" : "( )"}</span>
    
  </button> 
  </div>

  );
}
