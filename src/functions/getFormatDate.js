const getFormatDate = (date) => {
  const formatDate = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format;
  const year = date.getFullYear();
  const month = formatDate(date.getMonth() + 1);
  const day = formatDate(date.getDate());
  return `${year}-${month}-${day}`;
};

export default getFormatDate;