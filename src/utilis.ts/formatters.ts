
export const formatNumberWithThousandSeparator = (value: number|string ,withDecimal: boolean= false): string=>{
  let parts = value.toString().split('.');
  let decimalPart = parts.length>1 ? parts[1] : '00';
  let thousandMultiple = [];
  let rest = Number(parts[0]);
  while(rest>1000){
    thousandMultiple.push('00'+(rest%1000).toString().slice(-3));
    rest = (rest - rest%1000)/1000;
  }

  let intPart = thousandMultiple.length>0 ? rest +' '+ thousandMultiple.join(' ') : '0';
  if(value === ''){
    return '- ';
  }
  else {
    return withDecimal? intPart+'.'+decimalPart : intPart;
  }
}

export const formatDateToFr = (date: string | undefined) : string => {
  return date ? date.split('-').reverse().join('/') : ' - ';
}

export const convertDatetimeToDateFr = (datetime: string | undefined) : string => {
  return datetime ? formatDateToFr(datetime.slice(0,10)) : ' - '; 
}