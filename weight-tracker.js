// input your weekly calorie allowance
const tdee = 15500;

// input daily calories allowed for weight loss
const dailyAllowed = 1800;

// input amount of calories needed to stay the same weight 
const maintenance = 2200;

// input calories ate - any exercise for sunday-saturday. No need for additional input
let dailies = [2450, 1380, 1330, 1220, 1150,1600,2000];

// will hold the sum of all elements in the dailies array
let weeklyTotal;

// will hold any elements in daily that are greater than maintenence
let overAte = [];

// pushes elements over maintenence into overAte array
for (i = 0; i < dailies.length; i++) {
  if (dailies[i] > dailyAllowed) {
    overAte.push(dailies[i]);
  }
}


// sum of dailies array
weeklyTotal = dailies.reduce((partialSum, a) => partialSum + a, 0);

// average calories per day
let weeklyAverage = weeklyTotal / dailies.length;

// how many calories over
let overUnder = Math.abs(tdee - weeklyTotal)

/* determines how many pounds you can expect to lose or gain. 1 pound is equal to 3500 calories. */
const lossOrGain = () => {
  let poundsLost;
  let poundsGained;
if (weeklyTotal < tdee) {
  poundsLost = (overUnder / 3500);
  poundsLost = Math.round(poundsLost * 100) / 100
  return poundsLost;
} else if (weeklyTotal > tdee) {
  poundsGained = (overUnder / 3500);
  poundsGained = Math.round(poundsGained * 100) / 100
  return poundsGained;
}
}

/* function that logs everything to console. I wanted to somehow iterate through the days of the week and assign them to the corresponding numbers so there wouldnt be so many console.logs but i couldnt figure it out */

const report = () => {
    console.log('On Sunday, you ate ' + dailies[0] + ' calories')

    console.log('On Monday, you ate ' + dailies[1] + ' calories')

    console.log('On Tuesday, you ate ' + dailies[2] + ' calories')

    console.log('On Wednesday, you ate ' + dailies[3] + ' calories')

    console.log('On Thursday, you ate ' + dailies[4] + ' calories')

    console.log('On Friday, you ate ' + dailies[5] + ' calories')

    console.log('On Saturday, you ate ' + dailies[6] + ' calories')

    console.log('In total, you ate ' + weeklyTotal + ' calories for an average calories per day of ' + weeklyAverage + ' calories')
    
    if (weeklyTotal < tdee) {
      console.log('You ate ' + overUnder + ' calories under your tdee! You can expect to lose about ' + lossOrGain() + ' pound(s)!')
    } else if (weeklyTotal > tdee) {
      console.log('You ate ' + overUnder + ' calories over your tdee. You can expect to gain about ' + lossOrGain() + ' pound(s)....')
    } else {
      console.log('You ate exactly the amount of calories as your tdee. You will stay the same weight!')
    }
    if (overAte.length > 0) {
      console.log('You overate ' + overAte.length + ' days this week. Clean it up!!!!!')
    } else {
      console.log('You did not overeat any day this week! nice!')
    }
}




 report()
