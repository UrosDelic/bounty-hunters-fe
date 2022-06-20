export function useUniqueDates(firstArr: any, secondArr: any) {
  const myObj: any = {};
  firstArr.forEach((gp: any) => {
    const { createdAt, price } = gp;
    if (!myObj[createdAt]) {
      myObj[createdAt] = { gained: price };
    } else {
      myObj[createdAt].gained = myObj[createdAt].gained + price;
    }
  });
  secondArr.forEach((sp: any) => {
    const { createdAt, price } = sp;
    if (!myObj[createdAt]) {
      myObj[createdAt] = { spent: price };
    } else if (!myObj[createdAt].spent) {
      myObj[createdAt].spent = price;
    } else {
      myObj[createdAt].spent = myObj[createdAt].spent + price;
    }
  });
  return myObj;
}
