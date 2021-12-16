export const randomTimer = (keys: (() => () => NodeJS.Timer)[]) => {
  const index = Number(((keys.length - 1) * Math.random()).toFixed(0));
  return keys[index];
};

export const randomKey = (keys: string[]) => {
  const index = Number(((keys.length - 1) * Math.random()).toFixed(0));
  return keys[index];
};
