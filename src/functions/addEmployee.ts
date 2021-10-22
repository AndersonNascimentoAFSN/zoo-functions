interface IDataEmployee {
  id: string,
  firstName: string,
  lastName: string,
  managers: Array<string>,
  responsibleFor: Array<string>,
}

interface IPersonalInfo {
  id: string, 
  firstName: string, 
  lastName: string, 
}

interface IAssociatedWith {
  managers: Array<string>, 
  responsibleFor: Array<string>
}

interface IDataZoo {
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

function createEmployee(personalInfo: IPersonalInfo, associatedWith: IAssociatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function addEmployee(dataEmployee: IDataEmployee, dataZoo: IDataZoo) {
  const { employees } = dataZoo;
  const { id, firstName, lastName, managers, responsibleFor } = dataEmployee;

  const employee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(employee);
}