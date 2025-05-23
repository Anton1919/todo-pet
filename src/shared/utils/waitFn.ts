const randomMs = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const waitFn = async (min: number, max: number) => {
  const range = randomMs(min, max);
  return await new Promise((resolve) => setTimeout(resolve, range));
};
