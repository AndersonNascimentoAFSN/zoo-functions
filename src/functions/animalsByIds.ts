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

function animalsByIds(data: IAnimals, ...ids: Array<string>) {
  return data.animals.filter(({ id }: any) => ids.includes(id));
}

export default animalsByIds;