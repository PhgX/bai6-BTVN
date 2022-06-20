import { Cadres } from './cadres';
export class Staff extends Cadres {
    private _job: string;
    constructor(name: string, dob: string, gender: string, address: string, job: string){
        super(name, dob, gender, address);
        this._job = job;
    }
    public get job(){
        return this._job;
    }
    public set job(job: string){
        this._job = job;
    }
}