export const formatNumberWithThousandSeparator = (
  value: number | string | undefined,
  withDecimal: boolean = false
): string => {
  if (value === undefined || value === '') {
    return '- ';
  }
  let parts = value.toString().split('.');
  let decimalPart = parts.length > 1 ? parts[1] : '00';
  let thousandMultiple = [];
  let rest = Number(parts[0]);
  while (rest > 1000) {
    thousandMultiple.push('00' + (rest % 1000).toString().slice(-3));
    rest = (rest - (rest % 1000)) / 1000;
  }

  let intPart =
    thousandMultiple.length > 0 ? rest + ' ' + thousandMultiple.join(' ') : '0';

  return withDecimal ? intPart + '.' + decimalPart : intPart;
};

export const formatDateToFr = (
  date: string | undefined
): string | undefined => {
  return date ? date.split('-').reverse().join('/') : undefined;
};

export const convertDatetimeToDateFr = (
  datetime: string | undefined
): string | undefined => {
  return datetime ? formatDateToFr(datetime.slice(0, 10)) : undefined;
};
