//simple app so all types in one file

export interface Ilog {
  id: number | string;
  phoneNumber: string;
}

export interface IState {
  phoneNumber: string;
  currentCall: { id: number; phoneNumber: string };
  log: Ilog[];
}
