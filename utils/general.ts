export const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\./g, ",");
};
