export const getNormalizedPrice = (input) => {
  if (input !== 0 && !input) return '';
  return input.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
