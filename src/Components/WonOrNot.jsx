const WonOrNot = (data, player) => {
  let i = 0;
  while (i < 7) {
    if (
      data[0 + i].val === player &&
      data[1 + i].val === player &&
      data[2 + i].val === player
    )
      return true;
    i += 3;
  }

  i = 0;
  while (i < 3) {
    if (
      data[0 + i].val === player &&
      data[3 + i].val === player &&
      data[6 + i].val === player
    )
      return true;
    i++;
  }

  if (
    data[0].val === player &&
    data[4].val === player &&
    data[8].val === player
  )
    return true;
  if (
    data[2].val === player &&
    data[4].val === player &&
    data[6].val === player
  )
    return true;
  return false;
};
export default WonOrNot;
