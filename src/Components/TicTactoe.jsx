import React, { useRef, useState } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Header from "./Header";
import styled from "styled-components";
import WonOrNot from "./WonOrNot";

export default function TicTactoe() {
  const [count, Setcount] = useState(0);
  const [lock, Setlock] = useState(false);
  const [winner, setWinner] = useState("");
  const intitial_data = [
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
  ];
  const [data, setdata] = useState(intitial_data);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  let player = "";
  const boxHandle = (e, n) => {
    if (e.target.hasChildNodes() || lock === true) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='O.png'/>`;
      let old = data;
      old[n].val = "o";
      setdata(old);
      Setcount(count + 1);
      player = old[n].val;
    } else {
      e.target.innerHTML = `<img src='X.png'/>`;
      let old = data;
      old[n].val = "x";
      setdata(old);
      Setcount(count + 1);
      player = old[n].val;
    }
    console.log(data);
    console.log(WonOrNot(data, player) + " " + player);
    if (WonOrNot(data, player) === true) {
      gameOver();
    }
  };
  const gameOver = () => {
    Setlock(true);
    console.log("over");
    setWinner(
      "Game over for you : " +
        (player == "x" ? "O" : "X") +
        ") Winner : " +
        player.toUpperCase()
    );
  };

  const reset = () => {
    Setlock(false);
    setWinner("");
    Setcount(0);
    box_array.map((e) => (e.current.innerHTML = ""));
    setdata(intitial_data);
  };

  return (
    <Main>
      <Header winner={winner} lock={lock} />
      <Board boxHandle={boxHandle} box_array={box_array} />
      <ResetButton reset={reset} lock={lock} />
    </Main>
  );
}

const Main = styled.main`
  padding: 0;
  padding-top: 20px;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #0d1321;
`;
