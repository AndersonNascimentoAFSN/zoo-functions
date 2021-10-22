import { IDataZooEmployees } from '../data';

interface IPersonalInfo {
  id: string, 
  firstName: string, 
  lastName: string, 
}

interface IAssociatedWith {
  managers: Array<string>, 
  responsibleFor: Array<string>
}

interface IDataEmployee extends IPersonalInfo, IAssociatedWith {}

function createEmployee(personalInfo: IPersonalInfo, associatedWith: IAssociatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function addEmployee(dataEmployee: IDataEmployee, dataZoo: IDataZooEmployees) {
  const { employees } = dataZoo;
  const { id, firstName, lastName, managers, responsibleFor } = dataEmployee;

  const employee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(employee);
}

export default addEmployee;
