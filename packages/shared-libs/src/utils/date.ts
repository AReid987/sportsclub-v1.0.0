import { format, formatDistanceToNow, isAfter, isBefore, parseISO } from 'date-fns';

export const formatDate = (date: Date | string, formatStr = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};

export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, 'PPP p');
};

export const formatTimeAgo = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

export const isEventLive = (startTime: Date | string, endTime?: Date | string): boolean => {
  const now = new Date();
  const start = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  
  if (endTime) {
    const end = typeof endTime === 'string' ? parseISO(endTime) : endTime;
    return isAfter(now, start) && isBefore(now, end);
  }
  
  return isAfter(now, start);
};

export const isEventUpcoming = (startTime: Date | string): boolean => {
  const now = new Date();
  const start = typeof startTime === 'string' ? parseISO(startTime) : startTime;
  return isAfter(start, now);
};
