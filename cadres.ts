export class Cadres {
  private _name: string;
  private _dob: string;
  private _gender: string;
  private _address: string;
  constructor(name: string, dob: string, gender: string, address: string) {
    this._dob = dob;
    this._name = name;
    this._address = address;
    this._gender = gender;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get dob(): string {
    return this._dob;
  }

  public set dob(dob: string) {
    this._dob = dob;
  }

  public get gender(): string {
    return this._gender;
  }

  public set gender(gender: string) {
    this._gender = gender;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }
}
