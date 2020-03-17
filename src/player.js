function playerFactory(name, symbol) {
  let winner = false;
  return { name, symbol, winner };
}

export default playerFactory;
