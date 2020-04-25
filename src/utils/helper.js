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

export function formatDateToString2(date) {
  return moment(date).format('DD/MM/YYYY HH:mm');
}

export function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function calculateTimeTilNow(time) {
  const date = new Date(time).getTime();
  const now = new Date().getTime();
  let totalSeconds = (now - date) / 1000;
  const days = Math.round(totalSeconds / 86400);
  totalSeconds %= 86400;
  const hours = Math.round(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  if (days !== 0) return `${days}d`;
  if (hours !== 0) return `${hours}h`; 
  if (minutes !== 0) return `${minutes}m`;
  return `${seconds}s`;
}
