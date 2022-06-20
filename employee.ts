import { Cadres } from "./cadres";
export class Employee extends Cadres {
  private _level: string;
  constructor(
    name: string,
    dob: string,
    gender: string,
    address: string,
    level: string
  ) {
    super(name, dob, gender, address);
    this._level = level;
  }

  public get level() {
    return this._level;
  }

  public set level(level: string) {
    this._level = level;
  }
}
