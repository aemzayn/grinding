function subtractProductAndSum(n: number): number {
  let result = 0;
  const arr = n.toString().split("");
  const product = arr.reduce((prev, curr) => {
    return prev * Number(curr);
  }, 1);
  const sum = arr.reduce((prev, curr) => {
    return prev + Number(curr);
  }, 0);

  result = product - sum;
  return result;
}

subtractProductAndSum(234);
