import {Employee} from "./Employee";

interface list {
    on: Array<Employee>;
    off: Array<Employee>;
}

export class EmployeeManager {
    employees: Employee[] = [];

    constructor() {
    }

    findIndex(name: string): number {
        for (let i: number = 0; i < this.employees.length; i++) {
            if (this.employees[i].name === name) return i
            else return -1;
        }
    }

    checkStatus(name: string): boolean {
        return this.employees[this.findIndex(name)].status;
    }

    delete(name: string): void {
        this.employees.splice(this.findIndex(name), 1);
    }

    listWithStatus(): list {
        let l: list = {on:[], off:[]};
        for (let i: number = 0; i < this.employees.length; i++) {
            if (this.employees[i].status = true) l.on.push(this.employees[i])
            else l.off.push(this.employees[i]);
        }
        return l;
    }

    add(employee: Employee): void {
        this.employees.push(employee);
    }

    searchEmployee(name: string) {
        let i = this.findIndex(name);
        console.log(this.employees[i]);
    }

    updateEmployee(index: number,title: string, content: any): void {
        this.employees[index][title] = content;
    }

    updateEmployeeStatus(index: number): void {
        this.employees[index]["status"] = !this.employees[index]["status"];
    }
}