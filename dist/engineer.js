"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engineer = void 0;
const cadres_1 = require("./cadres");
class Engineer extends cadres_1.Cadres {
    constructor(name, dob, address, gender, specialize) {
        super(name, dob, gender, address);
        this._specialize = specialize;
    }
    get specialize() {
        return this._specialize;
    }
    set specialize(specialize) {
        this._specialize = specialize;
    }
}
exports.Engineer = Engineer;
