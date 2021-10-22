interface IEmployees {
  employees: [
    ...{
        id: string, 
        firstName: string, 
        lastName: string, 
        managers: Array<string>, 
        responsibleFor: Array<string>
    }[]
  ],
}

function employeeByName(employeeName: string, data: IEmployees) {
  const { employees } = data;
  return (!employeeName) ? {} : employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

export default employeeByName;