import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  constructor(private http: Http) {
    console.log('Init...');
  }

  getEmployees() {
    // Use API
    //return this.http.get('http://xxxxx')
    //  .map(res => res.json());
    return [{
        id: 69,
        name: 'parn',
        skills: ['walk']
      }, {
        id: 70,
        name:'kung',
        skills: ['run','walk']
      }, {
        id: 71,
        name:'jung',
        skills: ['run','walk','eat']   
      }
    ];
  }

}
