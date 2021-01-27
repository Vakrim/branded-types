type Meter = number & { __tag: "Meter" };
type Second = number & { __tag: "Second" };
type MetersPerSecond = number & { __tag: "MetersPerSecond" };
type MetersPerSecondSquared = number & { __tag: "MetersPerSecondSquared" };

const distance = 5 as Meter;
const thereAndBackAgain = distance * 2;

const getSpeed = (distance: Meter, time: Second) => {
  return (distance / time) as MetersPerSecond;
};

const getAcceleration = (speed: MetersPerSecond, time: Second) => {
  return (speed / time) as MetersPerSecondSquared;
};

const time = 4 as Second;

getSpeed(distance, time);
getSpeed(333, time);
getSpeed(distance, 444);
getSpeed(distance, distance);

const speed = getSpeed(distance, time);
const acceleration = getAcceleration(speed, time);

export {}
