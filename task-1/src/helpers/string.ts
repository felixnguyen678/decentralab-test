import { SELECTED_EYE_COLOR } from './constants';
import { IDataType, IPerson } from './types';

export const getColorsListFromString = (str: string) => str.split(", ");

export const convertData = (data: { results: IPerson[] }) => {
  const { results = [] } = data || {};
  const { totalMass, totalHeight, filteredItems } = results.reduce(
    (acc: IDataType, item: IPerson) => {
      const { eye_color, mass, height } = item;
      if (eye_color.includes(SELECTED_EYE_COLOR)) {
        acc.totalMass += +mass;
        acc.totalHeight += +height;
        acc.filteredItems.push(item);
      }
      return acc;
    },
    { totalMass: 0, totalHeight: 0, filteredItems: [] }
  );

  return {
    filteredItems,
    totalMass,
    totalHeight,
  };
};
