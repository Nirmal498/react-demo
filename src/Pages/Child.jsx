import React from "react";

function Child({ click }) {
  console.log("render child component");
  return (
    <div>
      Child <br />
      <button className="btn" onClick={click}>
        Click
      </button>
    </div>
  );
}

export default React.memo(Child);
