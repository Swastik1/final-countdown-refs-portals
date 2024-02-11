import React from "react";

const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>{result}</h2>
      <p>
        The target time was <storng>{targetTime}</storng> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds</strong>left!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
