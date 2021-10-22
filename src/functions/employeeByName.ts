import { IDataZooEmployees } from '../data';

function employeeByName(employeeName: string, data: IDataZooEmployees) {
  const { employees } = data;
  return (!employeeName) ? {} : employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

export default employeeByName;