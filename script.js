let miliSecondCount = 0;
let secondCount = 0;
let minutesCount = 0;
let hoursCount = 0;
let startTimeCounter;
const miliSecondCounter = document.getElementById('miliSecondCount');
const secondCounter = document.getElementById('secondCount');
const minutesCounter = document.getElementById('minutesCount');
const hoursCounter = document.getElementById('hoursCount');

const btnStart = document.getElementById('btnStart');
// const btnPause = document.getElementById('btnPause');
// const btnStop = document.getElementById('btnStop');
// const btnReset = document.getElementById('btnReset');

const timeCounter = () => {
   startTimeCounter = setInterval(() => {
      console.log('Somossa ki tomar');
      miliSecondCount++;
      if (miliSecondCount < 10) {
         miliSecondCounter.innerText = `0${miliSecondCount}`;
      } else {
         miliSecondCounter.innerText = miliSecondCount;
      }
      if (miliSecondCount === 100) {
         miliSecondCounter.innerText = '00';
         miliSecondCount = 0;
         secondCount++;
         if (secondCount < 10) {
            secondCounter.innerText = `0${ secondCount }`;
         } else {
            secondCounter.innerText = secondCount;
         }
         // console.log(secondCount);
      } else if (secondCount === 60) {
         secondCounter.innerText = '00';
         secondCount = 0;
         minutesCount++;
         minutesCounter.innerText = minutesCount;

         if (minutesCount < 10) {
            minutesCounter.innerText = `0${minutesCount}`;
         } else {
            minutesCounter.innerText = minutesCount;
         }
      } else if (minutesCount === 60) {
         minutesCounter.innerText = '00';
         minutesCount = 0;
         hoursCount++;
         hoursCounter.innerText = hoursCount;

         if (hoursCount < 10) {
            hoursCounter.innerText = `0${hoursCount}`;
         } else {
            hoursCounter.innerText = hoursCount;
         }
      }
   }, 10);

}

// Start Time & end Time On Single Button
// const startTimeCount = () => {
//    if (btnStart.innerText === 'Start') {
//       timeCounter()
//       btnStart.innerText = 'Stop'
//       btnStart.setAttribute('id','btnStop')
//    } else {
//       clearInterval(startTimeCounter)
//       btnStart.innerText = 'Start'
//       btnStart.setAttribute('id', 'btnStart')
//    }
// }

// Start Time
const startTimeCount = () => {
   timeCounter()
   console.log('start Korci');
}

// Stop Time
const stopTimeCount = () => {
   clearInterval(startTimeCounter);
   console.log('Stop Korci');
}

// Reset Watch
const resetTimeCount = () => {
   clearInterval(startTimeCounter)
   // on reset stop button toggle to Start button
   // if (btnStart.innerText === 'Stop') {
   //    btnStart.innerText = 'Start'
   //    btnStart.setAttribute('id', 'btnStart')
   // }
   console.log('Reset Korci');
   miliSecondCount = 0;
   secondCount = 0;
   minutesCount = 0;
   hoursCount = 0;
   miliSecondCounter.innerText = '00';
   secondCounter.innerText = '00';
   minutesCounter.innerText = '00';
   hoursCounter.innerText = '00';
   hoursCounter.innerText = '00';
}




{
//    let secondCounter = 0
// let muniteCounter = 0
//    let hourCounter = 0
//    let startTimeCounter;
// const timeCounter = () => {
//    startTimeCounter = setInterval(() => {
//       secondCounter++
//       document.getElementById('counterElementSecond').style.setProperty('--value', secondCounter)
//       if (secondCounter === 60) {
//          secondCounter = 0
//          muniteCounter++
//          document.getElementById('counterElementMinute').style.setProperty('--value', muniteCounter)
//       } else if (muniteCounter === 60) {
//          muniteCounter = 0
//          hourCounter++
//          document.getElementById('counterElementHours').style.setProperty('--value', hourCounter)
//       }
//    }, 1000)
// }
// // Start Time
// const startTimeCount = () => {
//    timeCounter()
// }

// // Stop Time
// const stopTimeCount = () => {
//    // timeCounter()
//    clearInterval(startTimeCounter)
// }
// // Reset Watch
// const resetTimeCount = () => {
//    clearInterval(startTimeCounter)
//    miliSecondCount = 0;
//    secondCount = 0;
//    minutesCount = 0;
//    hoursCount = 0;
//    }
}
