import dayjs from 'dayjs';

export function useUniqueDates(firstArr: any, secondArr: any) {
  const myObj: any = {};
  const transactions = [...firstArr, ...secondArr];

  transactions.forEach((item: any) => {
    const { createdAt, points, price } = item;
    const formattedDate = dayjs(createdAt).format('MM/DD/YYYY');
    if (!myObj[formattedDate]) {
      if (points) {
        myObj[formattedDate] = { gained: points };
      } else {
        myObj[formattedDate] = { spent: price };
      }
    } else {
      if (points) {
        myObj[formattedDate].gained = myObj[formattedDate].gained + points;
      } else {
        myObj[formattedDate].spent = myObj[formattedDate].spent + price;
      }
    }
  });
  return myObj;
}
