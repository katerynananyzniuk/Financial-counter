export function checkFormat(sum: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'Eur',
    minimumFractionDigits: 0
  });
  return formatter.format(sum)
}