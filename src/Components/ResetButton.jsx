import React from "react";
import styled from "styled-components";

export default function ResetButton({ reset,lock }) {
  return (
    <div className="text-center">
      <Button
        onClick={() => {
          reset();
        }}
      >
        {lock ? "Restart Game" : "Reset Game"}
      </Button>
    </div>
  );
}
const Button = styled.button`
  padding: 5px 60px;
  border: black;
  background-color: black;
  color: white;
`;
