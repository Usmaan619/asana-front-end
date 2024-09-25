export const setCache = (key: any, value: any): any => {
  localStorage.setItem(key, value);
};

export const getCache = (key?: any): any => {
  localStorage.getItem(key);
};
