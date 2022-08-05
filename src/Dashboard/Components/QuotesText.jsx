import React from "react";

function QuotesText({ quote, color }) {
  return (
    <div className="quote-text" style={{ color: color }}>
      <span id="text">{quote}</span>
    </div>
  );
}

export default QuotesText;
