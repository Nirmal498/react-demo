import React from "react";
import { Button } from "react-bootstrap";

function Child({ click }) {
  console.log("render child component");
  return (
    <div>
      <h1>Home Child page</h1>

      <Button variant="primary" onClick={click}>
        Click
      </Button>
    </div>
  );
}

export default React.memo(Child);
