import React from "react";

// Msg.tsx
const Msg = ({ type, text }: { type: string, text: string }) => {
  return (
    <div
      className={`messageBox ${type} showMessage`}
    >
      <span className='icon' />
      <span>{text}</span>
    </div>
  );
};

export default Msg;



