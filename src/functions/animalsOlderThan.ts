import { IDataZooAnimals } from '../data';

interface IAnimalsOlderThan {
  animalName: string,
  ageAnimal: number,
};

function animalsOlderThan({ animalName, ageAnimal }: IAnimalsOlderThan, data: IDataZooAnimals) {
  return data.animals.find(({ name }) => name === animalName)
    ?.residents.every(({ age }) => age >= ageAnimal);
};

export default animalsOlderThan;