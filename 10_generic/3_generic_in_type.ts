/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = "코드팩토리";
// error 생략 안됨
// const genericString2: GenericSimpleType = "코드팩토리";

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

// type State<T> = DoneState<T> | LoadingState | ErrorState;
type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  data: ["123", "456"],
};

state = {
  requestedAt: new Date(),
};

state = { error: "error" };

let state2: State<number> = {
  data: [123, 456],
};
