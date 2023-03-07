// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');

import {AccountManager} from "./Account/AccountManager";
import {EmployeeManager} from "./Employee/EmployeeManager";

export function main() {
    clear();
        console.log(`               
                -----Menu-----
    
              1. Thêm nhân viên
              2. Tìm kiếm nhân viên
              3. Kiểm tra trạng thái nhân viên
              4. Sửa thông tin nhân viên
              5. Thay đổi trạng thái của nhân viên
              6. Thông tin tài khoản
              7. Đăng xuất
    `)
    do {
        let i = +readlineSync.question('Your choice: ');

            switch (i) {
                case 1:
                    employeeManager.add();
                    break;
                case 2:
                    employeeManager.searchEmployee();
                    break;
                case 3:
                    employeeManager.checkStatus();
                    break;
                case 4:
                    employeeManager.updateEmployeeInfor();
                    break;
                case 5:
                    employeeManager.updateEmployeeStatus();
                    break;
                case 6:
                    accountManager.showAccount();
                    break;
                case 7:
                    accountManager.welcome();
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ !`)
            }
        } while (true)
    }

let accountManager: AccountManager = new AccountManager();
let employeeManager: EmployeeManager = new EmployeeManager();
clear();
accountManager.welcome();

