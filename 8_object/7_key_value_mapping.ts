/**
 * Key Value Mapping
 */
enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

type UserApiStatus3 = {
  [k in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[k];
  // getUser: GlobalApiStatus["getUser"];
  // paginateUsers: GlobalApiStatus["paginateUsers"];
  // banUser: GlobalApiStatus["banUser"];
};

// UserApiStatus2와 UserApiStatus3는 타입이 같다

type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginateUsers"
>;

// 원하지 않는 타입을 제거하고 할당
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

// error
// const key: AllKeys = "new";
const key: AllKeys = "banUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[k];
};

interface LoadingScreen {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingScreen | ErrorStatus;

type StatusType = FetchStatus["type"];
