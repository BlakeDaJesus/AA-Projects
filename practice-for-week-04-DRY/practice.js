function multiplyBiggerNumByTwo(num1, num2) {

  if (num1 > num2) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
}

function divideBiggerNumByThree(num1, num2) {

  if (num1 > num2) {
    return num1 / 3;
  } else {
    return num2 / 3;
  }
}

function eatMostTacos(sum1, sum2) {

  if (sum1 > sum2) {

    return `I ate ${sum1} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${sum2} tacos.`;
  }
}

function adoptSmallerDog(weight1, weight2) {

  if (weight1 < weight2) {
    return `I adopted a dog that weighs ${weight1} pounds.`;
  } else {
    return `I adopted a dog that weighs ${weight2} pounds.`;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
