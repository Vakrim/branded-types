type Meter = number & { __tag: "Meter" };
type Second = number & { __tag: "Second" };
type MetersPerSecond = number & { __tag: "MetersPerSecond" };
type MetersPerSecondSquared = number & { __tag: "MetersPerSecondSquared" };

type Division =
  | {
      dividend: Meter;
      divisor: Second;
      result: MetersPerSecond;
    }
  | {
      dividend: MetersPerSecond;
      divisor: Second;
      result: MetersPerSecondSquared;
    };

type Divided<T, R, Dict = Division> = Dict extends {
  dividend: T;
  divisor: R;
  result: infer Result;
}
  ? Result
  : never;

const divide = <T extends number, R extends number>(
  dividend: T,
  divisor: R
) => {
  return (dividend / divisor) as Divided<T, R>;
};

type A = Divided<Meter, Second>;
type B = Divided<A, Second>;
type C = Divided<B, Second>;

const distance = 5 as Meter;
const time = 4 as Second;

const speed = divide(distance, time);
const acceleration = divide(speed, time);
const jerk = divide(acceleration, time);

type Assert<T, R extends T> = null;

type TestA = Assert<number, 1>;
type TestB = Assert<1, number>;

type TestC = Assert<typeof speed, MetersPerSecond>;
type TestD = Assert<typeof acceleration, MetersPerSecondSquared>;
type TestE = Assert<typeof jerk, MetersPerSecondSquared>;

type Multiplied<T, R, Dict = Division> = Dict extends {
  dividend: infer Result;
  divisor: T;
  result: R;
}
  ? Result
  : Dict extends {
      dividend: infer Result;
      divisor: R;
      result: T;
    }
  ? Result
  : never;

type E = Multiplied<MetersPerSecond, Second>;
type F = Multiplied<Second, MetersPerSecond>;

export {};
