import { set } from "express/lib/application";
import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace === true) history.pop();
    setHistory(current => [...current, newMode])
  }

  function back() {
    // use cb to access the most recent history state
    setHistory(history => {
      // create a copy  so original state is not modded
      const historyCopy = [...history]
      // check history has a previous mode i.e. more than 1
      if (history.length > 1) {
        // remove last mode from the history
        historyCopy.pop()
        // set the mode to the last elem of the modded history
        setMode(historyCopy[historyCopy.length - 1])
      }
      return historyCopy
    })
  }
  return { mode, transition, back };
}