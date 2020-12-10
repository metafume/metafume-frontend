export const getToken = () => {
  const value = document.cookie
    .split(';')
    .map(value => value.split('='))
    .map(([key, value]) => [key.trim(), value])
    .find(([key]) => key === 'x-access-token');

  return value?.[1];
};

export const setToken = token => {
  document.cookie = `x-access-token=${token}`;
};

export const deleteToken = () => {
  document.cookie = 'x-access-token=; Max-Age=0';
};
