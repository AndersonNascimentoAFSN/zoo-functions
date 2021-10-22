"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function employeeByName(employeeName, data) {
    const { employees } = data;
    return (!employeeName) ? {} : employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}
exports.default = employeeByName;
