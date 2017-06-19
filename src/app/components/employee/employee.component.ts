import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeesService]
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];


  constructor(private employeesService: EmployeesService) {
    // Use API
    //this.employeesService.getEmployees().subscribe(emps => {
    //  this.employees = emps;
    //});
    this.employees = this.employeesService.getEmployees();
  }

  ngOnInit() {
  }

}

interface Employee {
  id: number;
  name: string;
  skills: string[];
}
