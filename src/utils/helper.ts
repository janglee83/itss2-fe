const getRelativeTime = (dateString: string): string => {
  const dateOnly = dateString.substring(0, 10);
  const currentDate: Date = new Date();
  const inputDate: Date = new Date(dateOnly);

  const differenceInTime: number = currentDate.getTime() - inputDate.getTime();
  const differenceInDays: number = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays < 1) {
    return "hôm nay";
  } else {
    const daysAgo: string = Math.floor(differenceInDays).toString();
    return `${daysAgo} ngày trước`;
  }
};

export default getRelativeTime;
