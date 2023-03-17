export const writeToCache = (url, data) => localStorage.setItem(url, JSON.stringify(data));

export const readFromCache = (url) => JSON.parse(localStorage.getItem(url)) || null;

export const stateCache = (url, empty) => localStorage.getItem(url) || empty;
