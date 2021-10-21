import data from '../data';

function animalsByIds(...ids: Array<string>) {
  const { animals } = data;
  return animals.filter(({ id }: any) => ids.includes(id));
}

export default animalsByIds;