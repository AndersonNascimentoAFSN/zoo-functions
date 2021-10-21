// import data from '../data';
// const { animals } = data;

interface IAnimalsOlderThan {
  animalName: string,
  ageAnimal: number,
}

interface IAnimals extends {
  animals: [
    ...{
      id: string,
      name: string,
      popularity: number,
      location: string,
      residents: [...{ name: string, sex: string, age: number}[]],
    }[]
    ]
};

function animalsOlderThan({ animalName, ageAnimal }: IAnimalsOlderThan, animals: IAnimals) {
  return animals.find(({ name }) => name === animalName)
    ?.residents.every(({ age }) => age >= ageAnimal);
}

export default animalsOlderThan;