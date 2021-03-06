import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    private baseapi = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getallemployees() {
        return this.http.get(this.baseapi + "/employee/getall");
    }
    getEmployeeSheets(id){
        return this.http.get(this.baseapi + "/employee/getemployeesheets/"+id);
    }

    getalltasks(){
         return this.http.get(this.baseapi + "/employee/getalltasks");
    }

    saveSheet(obj){
        return this.http.post(this.baseapi + "/employee/saveSheet",obj)
    }
}