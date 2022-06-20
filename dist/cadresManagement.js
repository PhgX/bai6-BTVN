"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadresManagement = void 0;
const employee_1 = require("./employee");
const engineer_1 = require("./engineer");
const staff_1 = require("./staff");
class CadresManagement {
    getFullCadresInfo() {
        return CadresManagement.CadresList;
    }
    addNewCadres(cadres) {
        CadresManagement.CadresList.push(cadres);
    }
    findCadresByName(name) {
        let index = -1;
        for (let cadres of CadresManagement.CadresList) {
            if (cadres.name === name) {
                index = CadresManagement.CadresList.indexOf(cadres);
            }
        }
        return index;
    }
    isCadresAnEmployee(name) {
        let index = this.findCadresByName(name);
        if (CadresManagement.CadresList[index] instanceof employee_1.Employee) {
            return true;
        }
        return false;
    }
    isCadresAnStaff(name) {
        let index = this.findCadresByName(name);
        if (CadresManagement.CadresList[index] instanceof staff_1.Staff) {
            return true;
        }
        return false;
    }
    isCadresAnEngineer(name) {
        let index = this.findCadresByName(name);
        if (CadresManagement.CadresList[index] instanceof engineer_1.Engineer) {
            return true;
        }
        return false;
    }
    updateCadresByName(name, newCadres) {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.CadresList[index] = newCadres;
            return true;
        }
        return false;
    }
    deleteCadresByName(name) {
        let index = this.findCadresByName(name);
        if (index !== -1) {
            CadresManagement.CadresList.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.CadresManagement = CadresManagement;
CadresManagement.CadresList = [];
