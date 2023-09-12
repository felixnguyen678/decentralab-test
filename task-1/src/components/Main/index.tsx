import React, { useEffect, useState } from 'react';
import { IDataType } from '../../helpers/types';
import { API_URL } from '../../helpers/constants';
import { convertData } from '../../helpers/string';
import LoadingIndicator from '../LoadingIndicator';
import Item from '../Item';
import styles from './styles.module.scss'

const Main: React.FC = () => {
  const [data, setData] = useState<IDataType>({
    totalMass: 0,
    totalHeight: 0,
    filteredItems: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const convertedData = convertData(data);
        setData(convertedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const { totalMass, totalHeight, filteredItems } = data;
  const isListEmpty =
    !Array.isArray(filteredItems) || filteredItems.length === 0;

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : isListEmpty ? (
        <p>No data available</p>
      ) : (
        <div className={styles.main}>
          <div className={styles.topContainer}>
            <p className={styles.mass}>Total mass: {totalMass}</p>
            <p className={styles.height}>
              Average height: {totalHeight / filteredItems.length}
            </p>
            <div className={styles.title}>
              <span className={styles.titleContent}> Blue eyes</span> people:
            </div>
          </div>

          <div className={styles.listContainer}>
            {filteredItems.map((item, index) => (
              <Item key={index} person={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
