const sum = (values: number[]) =>
  values.reduce((total, value) => total + value, 0);

const average = (values: number[]) =>
  values.length ? sum(values) / values.length : 0;

export { average, sum };
