function pointEquals(p1, p2) {
  p1 == p2;
}

function pointPrecedes(p1, p2) {
  return BigInt(p1) < BigInt(p2);
}

function pointToString(p) {
  return p;
}

module.exports = {
  pointEquals,
  pointPrecedes,
};
