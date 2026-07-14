const sum = (values: number[]) =>
  values.reduce((total, value) => total + value, 0);

const average = (values: number[]) =>
  values.length ? sum(values) / values.length : 0;

const max = (...values: number[]) => Math.max(...values);
// Equal: values.reduce((a, b) => a > b ? a : b, -Infinity);

const min = (...values: number[]) => Math.min(...values);
// Equal: values.reduce((a, b) => a < b ? a : b, Infinity);

const sqrt = (value: number) => Math.sqrt(value);

const calculateVariance = (values: number[]) => {
  const avg = average(values);
  return values.map((value) => (value - avg) ** 2);
};

const standardDeviation = (values: number[]) =>
  sqrt(average(calculateVariance(values)));

const unbiasedStandardDeviation = (values: number[]) =>
  sqrt(sum(calculateVariance(values)) / max(1, values.length - 1));

export { average, max, min, sum, standardDeviation, unbiasedStandardDeviation };
