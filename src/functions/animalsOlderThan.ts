interface IAnimals {
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

interface IAnimalsOlderThan {
  animalName: string,
  ageAnimal: number,
};

function animalsOlderThan({ animalName, ageAnimal }: IAnimalsOlderThan, data: IAnimals) {
  return data.animals.find(({ name }) => name === animalName)
    ?.residents.every(({ age }) => age >= ageAnimal);
};

export default animalsOlderThan;