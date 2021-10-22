import { IDataZooAnimals } from '../data';

function animalsByIds(data: IDataZooAnimals, ...ids: Array<string>) {
  return data.animals.filter(({ id }: any) => ids.includes(id));
}

export default animalsByIds;
