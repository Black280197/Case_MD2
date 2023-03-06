// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');

import {AccountManager} from "./Account/AccountManager";
import {EmployeeManager} from "./Employee/EmployeeManager";

export function main() {
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
        let i = readlineSync.question('Your choice: ');
        do {
            switch (i) {
                case 1:
                    employeeManager.add()
                    break;
                case 2:

            }
        } while (true)
    }

let accountManager: AccountManager = new AccountManager();
let employeeManager: EmployeeManager = new EmployeeManager();
clear();
accountManager.welcome();

