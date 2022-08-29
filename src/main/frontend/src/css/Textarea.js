import React from "react";
import jQuery from "jquery";

const Textarea = () => {
  const autoResizeTextarea = () => {
    let textarea = document.querySelector(".autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
    }
  };
  return (
    <div>
      <textarea
        maxLength="1200"
        className="autoTextarea"
        disabled
        onKeyDown={autoResizeTextarea}  
        onKeyUp={autoResizeTextarea} 
      />
    </div>
  )
};

export default Textarea;
