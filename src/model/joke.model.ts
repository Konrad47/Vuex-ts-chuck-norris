export interface IJoke {
  value: string;
}
export class Joke implements IJoke {
  constructor(public value: string) {}
}
