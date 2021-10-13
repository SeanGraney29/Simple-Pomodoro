import React, { useState } from "react";
import PlayStop from "./PlayStop";
import SetTimes from "./SetTimes";
import Subtitle from "./Subtitle";

function Pomodoro() {
  
  const timerDefault = {
    focusTime: 25,
    breakTime: 5,
    focusSecs: 1500,
    breakSecs: 300,
    count: 0,
    label: "Focusing",
    defaultSession: true,
  };

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [hideSubtitle, setHideSubtitle] = useState(true);
  const [TimerData, setTimerData] = useState({ ...timerDefault });


  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setDisableBtn(true);
    setHideSubtitle(false);
  }

  function handleStop() {
    setTimerData({ ...timerDefault });
    setIsTimerRunning(false);
    setDisableBtn(false);
    setHideSubtitle(true);
  }

  return <div className="pomodoro">
      <SetTimes
        TimerData={TimerData}
        isTimerRunning={isTimerRunning}
        setTimerData={setTimerData}
        disableBtn = {disableBtn}
      />
     <PlayStop
        playPause={playPause}
        handleStop={handleStop}
        isTimerRunning={isTimerRunning}
       disableBtn = {!disableBtn}
      />
      <Subtitle
        TimerData={TimerData}
        isTimerRunning={isTimerRunning}
        setTimerData={setTimerData}
        hideSubtitle={hideSubtitle}
      />
    </div>
}

export default Pomodoro;