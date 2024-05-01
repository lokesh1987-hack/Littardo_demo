// at least one number, at least one letter, correct length
const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

// at least one each of a number, uppercase letter, lowercase letter, and non-alphanumeric, correct length
const isStrongPassword =
  /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

export const passwordValidate = (testcase) => {
  const validPassword = (testcase) => isValidPassword.test(testcase);
  const passwordStrength = (testcase) => isStrongPassword.test(testcase);

  if (passwordStrength(testcase)) {
    return `🙂 strong and valid password.`;
  } else if (validPassword(testcase)) {
    return `🙁 valid password, but not strong.`;
  } else {
    return `☹️Not a valid password.`;
  }
};

const isValidUsername = /^[0-9A-Za-z]{6,16}$/;

export const checkEmptyValue =(object)=>{
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
    if(value == ""){
      let result = {[key]: `Don't go with empty ${key}`} 
      return result
    }
  }
  return null
} 
