function findMinTruckCapacity(weights, T) {
  let minCapacity = Math.max(...weights); 
  let maxCapacity = weights.reduce((sum, weight) => sum + weight, 0); 

  while (minCapacity <= maxCapacity) {
    const midCapacity = Math.floor((minCapacity + maxCapacity) / 2);
    let tripsRequired = 1;
    let currentTripWeight = 0;

    for (const weight of weights) {
      if (currentTripWeight + weight <= midCapacity) {
        currentTripWeight += weight;
      } else {
        tripsRequired++;
        currentTripWeight = weight;
      }
    }

    if (tripsRequired <= T) {
      maxCapacity = midCapacity - 1;
    } else {
      minCapacity = midCapacity + 1;
    }
  }

  return minCapacity;
}

// Example usage:
const weights = [7, 8, 5];
const T = 3;
const minTruckCapacity = findMinTruckCapacity(weights, T);
console.log("Minimum truck capacity:", minTruckCapacity);
