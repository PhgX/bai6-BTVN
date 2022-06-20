"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const cadres_1 = require("./cadres");
class Staff extends cadres_1.Cadres {
    constructor(name, dob, gender, address, job) {
        super(name, dob, gender, address);
        this._job = job;
    }
    get job() {
        return this._job;
    }
    set job(job) {
        this._job = job;
    }
}
exports.Staff = Staff;
