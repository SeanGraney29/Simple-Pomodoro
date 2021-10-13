import React from "react";
import { minutesToDuration } from "../utils/duration";

function SetTimes({ TimerData, setTimerData, disableBtn }) {

const tdft = TimerData.focusTime;
const tdbt = TimerData.breakTime;

function handleFPlus () {
    let timeAdjust = Math.min(tdft + 5, 60)
    setTimerData((currentData) => {
    return {
      ...currentData,
      focusTime: timeAdjust,
      focusSecs: timeAdjust*60,
    }});
}

function handleFMinus () {
  let timeAdjust = Math.max(tdft - 5, 5)
  setTimerData((currentData) => {
  return {
    ...currentData,
    focusTime: timeAdjust,
    focusSecs: timeAdjust*60,
  }});
}

function handleBPlus () {
  let timeAdjust = Math.min(tdbt + 1, 15)
  setTimerData((currentData) => {
  return {
    ...currentData,
    breakTime: timeAdjust,
    breakSecs: timeAdjust*60,
  }});
}

function handleBMinus () {
let timeAdjust = Math.max(tdbt - 1, 1)
setTimerData((currentData) => {
  return {
    ...currentData,
    breakTime: timeAdjust,
    breakSecs: timeAdjust*60,
  }});
}

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(tdft)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              disabled={disableBtn}
              onClick={handleFMinus}
              name="decrease-focus"
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              disabled={disableBtn}
              onClick={handleFPlus}
              name="increase-focus"
            >
             <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(tdbt)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                disabled={disableBtn}
                onClick={handleBMinus}
                name="decrease-break"
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                disabled={disableBtn}
                onClick={handleBPlus}
                name="increase-break"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetTimes;