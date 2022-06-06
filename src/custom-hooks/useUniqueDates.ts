export function useUniqueDates(firstArr: any, secondArr: any) {
  const myObj: any = {};
  firstArr.forEach((gp: any) => {
    const { date, points } = gp;
    if (!myObj[date]) {
      myObj[date] = { gained: points };
    } else {
      myObj[date].gained = myObj[date].gained + points;
    }
  });
  secondArr.forEach((sp: any) => {
    const { date, points } = sp;
    if (!myObj[date]) {
      myObj[date] = { spent: points };
    } else if (!myObj[date].spent) {
      myObj[date].spent = points;
    } else {
      myObj[date].spent = myObj[date].spent + points;
    }
  });
  return myObj;
}
