import { Cadres } from "./cadres";
import { Employee } from "./employee";
import { Engineer } from "./engineer";
import { Staff } from "./staff";

export class CadresManagement {
  private static CadresList : Cadres[] = [];

  getFullCadresInfo(): Cadres[] {
    return CadresManagement.CadresList;
  }

  addNewCadres(cadres: Cadres): void {
    CadresManagement.CadresList.push(cadres);
  }

  findCadresByName(name: string): number{
    let index = -1;
    for(let cadres of CadresManagement.CadresList){
      if(cadres.name === name){
        index = CadresManagement.CadresList.indexOf(cadres);        
      }
    }
    return index;
  }

  isCadresAnEmployee(name: string): boolean{
    let index = this.findCadresByName(name);
    if(CadresManagement.CadresList[index] instanceof Employee){
      return true;
    }
    return false;
  }

  isCadresAnStaff(name: string): boolean{
    let index = this.findCadresByName(name);
    if(CadresManagement.CadresList[index] instanceof Staff){
      return true
    }
    return false
  }

  isCadresAnEngineer(name: string): boolean{
    let index = this.findCadresByName(name);
    if(CadresManagement.CadresList[index] instanceof Engineer){
      return true
    }
    return false
  }

  updateCadresByName(name: string, newCadres: Cadres): boolean {
    let index = this.findCadresByName(name);
    if(index !== -1){
      CadresManagement.CadresList[index] = newCadres;
      return true;
    }
    return false;
  }

  deleteCadresByName(name: string): boolean {
    let index = this.findCadresByName(name);
    if(index !== -1){
      CadresManagement.CadresList.splice(index, 1);
      return true;
    }
    return false;
  }
}