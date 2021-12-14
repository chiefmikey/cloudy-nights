const random = (keys: []) =>
  keys[((keys.length - 1) * Math.random()).toFixed(0) as keyof typeof keys];

export default random;
