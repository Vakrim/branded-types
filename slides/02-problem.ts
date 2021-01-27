const getSpeed = (distance: number, time: number) => {
  return distance / time;
};

const isFasterThatUsainBolt = (speed: number) => {
  return speed > getSpeed(100, 9.58); // 100 meters, at 9.58 seconds
};

const kamilSpeed = getSpeed(14, 10); // metres in 10 sec
export const isKamilFaster = isFasterThatUsainBolt(kamilSpeed);

const teslaSpeed = getSpeed(250, 1); // 250 mph
export const isTeslaFaster = isFasterThatUsainBolt(teslaSpeed); // 😔
