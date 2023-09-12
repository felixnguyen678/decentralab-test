import React from 'react';
import { getColorsListFromString } from '../../helpers/string';
import { IPerson } from '../../helpers/types';
import MaleIcon from '../../icons/MaleIcon';
import FemaleIcon from '../../icons/FemaleIcon';
import { COLOR_CODES, EGender } from '../../helpers/constants';
import styles from './styles.module.scss'

interface ItemProps {
  person: IPerson;
  key: number | string;
}

export default function Item({ person }: ItemProps) {
  const { name, gender, hair_color, skin_color, eye_color, films } =
    person || {};

  const hairColorsList = getColorsListFromString(hair_color);
  const skinColorsList = getColorsListFromString(skin_color);
  const eyeColorsList = getColorsListFromString(eye_color);

  const renderGenderIcon = () => {
    if (gender === EGender.Male) return <MaleIcon />;
    return <FemaleIcon />;
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.name}>{name || ''}</div>
      <div className={styles.bodyContainer}>
      <div className={styles.gender}> Gender:&nbsp;{renderGenderIcon()}</div>
      <div className={styles.colorListContainer}>
        <div className={styles.colorListLabel}>Hair Colors:</div>
        {hairColorsList.map((item: string) => (
          <div
            className={styles.colorRound}
            style={{
              background: COLOR_CODES[item] || item,
            }}
          />
        ))}
      </div>
      <div className={styles.colorListContainer}>
        <div className={styles.colorListLabel}> Skin Colors:</div>

        {skinColorsList.map((item: string) => (
          <div
          className={styles.colorRound}
          style={{
              background: COLOR_CODES[item] || item,
            }}
          />
        ))}
      </div>
      <div className={styles.colorListContainer}>
        <div className={styles.colorListLabel}>Eye Colors:</div>

        {eyeColorsList.map((item: string) => (
          <div
          className={styles.colorRound}
          style={{
              background: COLOR_CODES[item] || item,
            }}
          />
        ))}
      </div>
      <div className={styles.films}>Total films: {films?.length}</div>
      </div>
    </div>
  );
}
