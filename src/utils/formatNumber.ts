const formatNumber = (
  number: number | string,
  format: number = 1,
  isDecimal: boolean = false,
): string => {
  const convertedNumber = typeof number === "number" ? number : Number(number);

  if (convertedNumber === 0) {
    return convertedNumber.toFixed(0);
  }

  if (convertedNumber < 1000) {
    return convertedNumber.toFixed(isDecimal ? format : 0);
  }

  const si = [
    { v: 1e3, s: "k" },
    { v: 1e6, s: "m" },
    { v: 1e9, s: "b" },
    { v: 1e12, s: "t" },
    { v: 1e15, s: "p" },
    { v: 1e18, s: "e" },
  ];

  let index = si.length - 1;

  while (index > 0 && convertedNumber < si[index].v) {
    index--;
  }

  const formattedNumber = (convertedNumber / si[index].v).toFixed(format ?? 0);

  return (
    formattedNumber.replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s
  );
};

export default formatNumber;
