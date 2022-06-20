import { Cadres } from './cadres';
export class Engineer extends Cadres {
    private _specialize: string;
    constructor(name: string, dob: string, address: string, gender:string, specialize: string){
        super(name, dob, gender, address);
        this._specialize = specialize;
    }
    public get specialize(){
        return this._specialize;
    }
    public set specialize(specialize: string){
        this._specialize = specialize;
    }
}