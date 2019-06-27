/*
  Enum
*/

// TODO: implement the OnOff enum (OFF,ON) to fix the function switchOnOff



// Uncomment these line to see the error and fix it
// function switchOnOff(value: OnOff): OnOff {
//   return value === OnOff.OFF ? OnOff.ON : OnOff.OFF;
// }

// /?\ What is the value of OnOff.OFF and OnOff.ON ?

/*======================================================================================================*/

// TODO: implement the Rangers enum (RED,GREEN,BLUE,YELLOW,PINK)to fix the function isRed

enum Rangers {
}

function isRed(person: Rangers): boolean {
  return person === 1;
}

// Uncomment these line to see the error and fix it
// console.log("RED", isRed(Rangers.RED)); // should return true

/*======================================================================================================*/

// TODO: implement the CodeError enum
//  Key: VALIDATION_ERROR ; Value: "validation_error"
//  Key: UNKNOWN_ERROR ; Value: "unknown_error"
//  Key: RATE_LIMIT_ERROR ; Value: "rate_limit_error"

enum CodeError {

}

// /?\ Uncomment these line, what is the returns of:
// CodeError.VALIDATION_ERROR
// CodeError['rate_limit_error']









export {}
