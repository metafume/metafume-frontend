export const getCookie = () => {
  const value = document.cookie
    .split(';')
    .map(value => value.split('='))
    .map(([key, value]) => [key.trim(), value])
    .find(([key]) => key === 'x-access-token');

  return value?.[1];
};

export const setCookie = token => {
  document.cookie = `x-access-token=${token}`;
};

