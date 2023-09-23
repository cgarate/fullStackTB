// This is the naive version of the Sieve of Eratosthenes algorithm. Added only for reference.
// Problem is the amount of memory it would need to allocate space for numsArray when limit is big (~ >100,000)
const sieveOfEratosthenesBasic = (limit: number): number[] => {
  const numsArray = Array.from({ length: limit + 1 }, () => true);

  for (let i = 2; i * i <= limit; i++) {
    if (numsArray[i]) {
      for (let j = i + i; j <= limit; j += i) {
        numsArray[j] = false;
      }
    }
  }
  const primeNumbers = numsArray.reduce(
    (result: number[], value, index) => (value ? [...result, index] : result),
    [],
  );
  return primeNumbers;
};

// This version uses typedArrays
const prepareTypedArrayView = (limit: number) => {
  const size = limit - 1;
  const arrayView = new Uint8Array(size);
  for (let i = 2; ; ++i) {
    const iSqr = i * i;
    if (iSqr > limit) break;
    if (arrayView[i - 2] === 0) {
      for (let c = iSqr - 2; c < size; c += i) {
        arrayView[c] = 1;
      }
    }
  }
  let bi = 0;
  return function () {
    while (bi < size && arrayView[bi] !== 0) {
      ++bi;
    }
    if (bi >= size) return null;
    return bi++ + 2;
  };
};

export const getPrimeNumbersToN = (limit: number) => {
  const typedArrayView = prepareTypedArrayView(limit);
  let prime = typedArrayView();
  const result = [];
  while (prime !== null) {
    result.push(prime);
    prime = typedArrayView();
  }
  return result;
};

export const getMedian = (dataPoints: number[]) => {
  if (
    !Array.isArray(dataPoints) ||
    (Array.isArray(dataPoints) && dataPoints.length < 1)
  )
    return null;
  const isLengthEven = dataPoints.length % 2 === 0;
  const middleDataPoint = dataPoints.length / 2;
  return isLengthEven
    ? (dataPoints[middleDataPoint - 1] + dataPoints[middleDataPoint]) / 2
    : dataPoints[Math.floor(middleDataPoint)];
};
