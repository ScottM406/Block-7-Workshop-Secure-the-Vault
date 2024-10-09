let firstNumber = 88; // math for first combination number based on this number
let secondNumber = 1090; // math for second combination number based on this number
let thirdNumber = 1; // math for third combination number based on this number

// Below are the equations that produce the combinatiion numbers that show up in the alert.

let firstCombinationNumber =  firstNumber * 0.5 - 35 + 1; // first number in alert combination
let secondCombinationNumber = secondNumber - 900 - 170 + 20; // second number in alert combination
let thirdCombinationNumber = thirdNumber * 78 / 2; // third number in alert combination

alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination:
  ${firstCombinationNumber } - ${secondCombinationNumber } - ${thirdCombinationNumber}`
)