import { useRef, useEffect } from 'react';
import moment from 'moment';

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function formatDateToString(date) {
  return moment(date).format('MMMM Do YYYY');
}

export function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}