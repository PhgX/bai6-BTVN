"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadres = void 0;
class Cadres {
    constructor(name, dob, gender, address) {
        this._dob = dob;
        this._name = name;
        this._address = address;
        this._gender = gender;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get dob() {
        return this._dob;
    }
    set dob(dob) {
        this._dob = dob;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
}
exports.Cadres = Cadres;
