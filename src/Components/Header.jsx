import React from "react";
import styled from "styled-components";

export default function Header({ winner, lock }) {
  return (
    <>
      {lock && (
        <TopSection>
          <p>{winner}</p>
        </TopSection>
      )}
    </>
  );
}
const TopSection = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  p {
    color: white;
    font-weight: bolder;
    padding: 10px 30px;
    margin: 0;
    background-color: black;
  }
`;
