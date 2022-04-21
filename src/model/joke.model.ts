export interface IJoke {
  value: string;
  iconUrl: string;
}
export class Joke implements IJoke {
  constructor(public value: string, public iconUrl: string) {}
}
