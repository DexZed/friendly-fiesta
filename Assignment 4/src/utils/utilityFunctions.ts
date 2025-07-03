// utils/formatDate.ts
export const formatDateTime = (input: string | Date): string => {
  const date = new Date(input);
  if (isNaN(date.getTime())) return 'Invalid date';

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',     // e.g. Jul
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,       // AM/PM
  });
};
