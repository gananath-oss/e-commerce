import {
  capitalChar,
  numberChar,
  simpleChar,
  symbolChar,
} from "./charValidate";

const passwordValidateFun = (password = [], charSet = []) => {
  let state = false;
  password.forEach((passChar) =>
    charSet.forEach((checkChar) => {
      if (passChar === checkChar) {
        if (!state) {
          state = true;
        }
      }
    })
  );
  return state;
};

const passwordValidate = (data, setError, setErrMsg) => {
  const password = String(data).split("");
  setErrMsg([]);
  setError(false);

  if (password.length >= 8 && password.length <= 15) {
    const tempErrMsg = [];
    const simpleCharState = passwordValidateFun(password, simpleChar);
    const capitalCharState = passwordValidateFun(password, capitalChar);
    const numberCharState = passwordValidateFun(password, numberChar);
    const symbolCharState = passwordValidateFun(password, symbolChar);

    if (!simpleCharState) {
      tempErrMsg.push("Password must be have at least one simple letter");
    }
    if (!capitalCharState) {
      tempErrMsg.push("Password must be have at least one capital letter");
    }
    if (!numberCharState) {
      tempErrMsg.push("Password must be have at least one number");
    }
    if (!symbolCharState) {
      tempErrMsg.push(
        "Password must be have at least one symbole '@,#,$,%,^,&,*,(,),_,-,=,+,~,<,>,;,:,[,{,],}'"
      );
      console.log(tempErrMsg);
    }
    if (tempErrMsg.length > 0) {
      setErrMsg(tempErrMsg);
      setError(true);
    }
  } else {
    setErrMsg(["Password should between 8 - 15 characters"]);
    setError(true);
  }
};

export default passwordValidate;
