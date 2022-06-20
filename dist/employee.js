"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const cadres_1 = require("./cadres");
class Employee extends cadres_1.Cadres {
    constructor(name, dob, gender, address, level) {
        super(name, dob, gender, address);
        this._level = level;
    }
    get level() {
        return this._level;
    }
    set level(level) {
        this._level = level;
    }
}
exports.Employee = Employee;
