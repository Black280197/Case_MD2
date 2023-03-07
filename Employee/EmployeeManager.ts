import {Employee} from "./Employee";
// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');

import {type} from "./Employee";
import {main} from "../main";

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
        }
        return -1;
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

    add(): void {
        clear();
        var typeOfStaff: type = {
            type: "",
            parttime: {salery: 0, hour: 0},
            fulltime: {salery: 0, hour: 0},
        };
        let name: string = readlineSync.question(`Employee's name: `);
        let email: string = readlineSync.question(`Email: `);
        let birthday: string = readlineSync.question(`Birthday: `);
        let phoneNumber: string = readlineSync.question(`phoneNumber: `);
        let status: boolean;
        console.log(`
        Trạng thái nhân viên:
        1. Nghỉ làm
        2. Đang làm việc       
        `)
        do {
            let s = +readlineSync.question(`Your choice:`);
            switch (s) {
                case 1:
                    status = false;
                    break;
                case 2:
                    status = true;
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ ! Hãy chọn lại !`);
                    continue;
            }
            break;
        } while (true);

        do {
            console.log(`
        Nhân viên này là kiểu:
        1. Parttime
        2. Fulltime
        `)
            let i = +readlineSync.question('Your chose: ');
            switch (i) {
                case 1:
                    typeOfStaff.type = "parttime";
                    typeOfStaff.parttime.salery = +readlineSync.question('Salery: ');
                    typeOfStaff.parttime.hour = 0;
                    typeOfStaff.fulltime.salery = -1;
                    typeOfStaff.fulltime.hour = -1;
                    break;
                case 2:
                    typeOfStaff.type = "fulltime";
                    typeOfStaff.fulltime.salery = +readlineSync.question('Salery: ');
                    typeOfStaff.fulltime.hour = 0;
                    typeOfStaff.parttime.salery = -1;
                    typeOfStaff.parttime.hour = -1;
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ ! Vui lòng chọn lại !`);
                    continue;
            }
            break;
        } while (true);

        let employee: Employee = new Employee(name, email, birthday, phoneNumber, status, typeOfStaff);
        this.employees.push(employee);
        console.log(`Thêm nhân viên mới thành công`);
        let z = readlineSync.question('Press Enter to return Menu!')
        main();
    }

    searchEmployee(): void {
        clear();
        let name = readlineSync.question('Search by name: ')
        let i = this.findIndex(name);
        if (i === -1) {
            console.log(`Tên nhân viên không tồn tại`);
            let z = readlineSync.question('Press Enter to return !');
            main();
        } else {
            clear();
            console.log(`
            -----Search by name-----
            Name: ${this.employees[i].name};
            Email: ${this.employees[i].email};
            Birthday: ${this.employees[i].birthday};
            phoneNumber: ${this.employees[i].phoneNumber};
            Status: ${this.employees[i].status};
            Type: ${this.employees[i].typeOfStaff.type};
            Salery: ${(this.employees[i].typeOfStaff.type === "fulltime") ? this.employees[i].typeOfStaff.fulltime.salery : this.employees[i].typeOfStaff.parttime.salery};
            ${(this.employees[i].typeOfStaff.type === "fulltime") ? "Overtime hours: " : "Working hours: "}` +
            `${(this.employees[i].typeOfStaff.type === "fulltime") ? this.employees[i].typeOfStaff.fulltime.hour : this.employees[i].typeOfStaff.parttime.hour};
            `)
            let z = readlineSync.question('Press Enter to return !');
            main();
        }
    }

    // updateEmployee(index: number,title: string, content: any): void {
    //     if (this.employees.length > 0)
    //     this.employees[index][title] = content;
    // }
    //
    // updateEmployeeStatus(index: number): void {
    //     this.employees[index]["status"] = !this.employees[index]["status"];
    // }
}