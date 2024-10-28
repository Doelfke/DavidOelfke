const format = (date: Date | string) => {
  let parsedDate: Date;
  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  return parsedDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const dateUtils = {
  format
};
