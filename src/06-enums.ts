/*
  Enum
*/

// TODO: implement the OnOff enum (OFF,ON) to fix the function switchOnOff

enum OnOff {
  OFF,
  ON
}

function switchOnOff(value: OnOff): OnOff {
  return value === OnOff.OFF ? OnOff.ON : OnOff.OFF;
}

// /?\ What is the value of OnOff.OFF and OnOff.ON ?

/*======================================================================================================*/

// TODO: implement the Rangers enum (RED,GREEN,BLUE,YELLOW,PINK)to fix the function isRed

enum Rangers {
  RED = 1,
  GREEN,
  BLUE,
  BLACK,
  YELLOW,
  PINK
}

function isRed(person: Rangers): boolean {
  return person === 1;
}

console.log("RED", isRed(Rangers.RED)); // should return true

/*======================================================================================================*/

// TODO: implement the CodeError enum
//  Key: VALIDATION_ERROR ; Value: "validation_error"
//  Key: UNKNOWN_ERROR ; Value: "unknown_error"
//  Key: RATE_LIMIT_ERROR ; Value: "rate_limit_error"

enum CodeError {
  VALIDATION_ERROR = "validation_error",
  UNKNOWN_ERROR = "unknown_error",
  RATE_LIMIT_ERROR = "rate_limit_error"
}

// /?\ what is the returns of:
// CodeError.VALIDATION_ERROR
// CodeError['rate_limit_error']









export {}
