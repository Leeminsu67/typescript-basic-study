/**
 * Non Nullable type
 */
// 타입들이 이렇게 나열되어 있거나 타입을 받앗을때 null과 undefined를 제거할 수 있다
type NonNull = NonNullable<
  string | number | boolean | null | undefined | object
>;
