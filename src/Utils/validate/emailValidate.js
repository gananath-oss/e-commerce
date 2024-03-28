import { Telegram } from "@mui/icons-material";
import { emailDomain, numberChar, simpleChar } from "./charValidate";
import { set } from "mongoose";

const emailValidate = (data, setErrMsg) => {
  setErrMsg([]);
  const dataForCheck = String(data).split("@");
  if (dataForCheck.length === 2) {
    const tempError = [];
    const invalidChar = [];
    let finalValidResult = true;
    const validChar = simpleChar.concat(numberChar);
    const userName = dataForCheck[0].split("");

    userName.forEach((char) => {
      let valid = false;
      validChar.forEach((vChar) => {
        if (vChar === char) {
          valid = true;
        }
      });
      invalidChar.push(valid);
    });

    invalidChar.forEach((ele) => {
      if (!ele) {
        if (finalValidResult) {
          finalValidResult = false;
          tempError.push("Invalid username");
        }
      }
    });

    let emailDomainValidate = false;
    let domainName = dataForCheck[1];
    emailDomain.forEach((domain) => {
      if (domainName === domain) {
        emailDomainValidate = true;
      }
    });

    if (!emailDomainValidate) {
      tempError.push("Invalid domain name");
    }

    setErrMsg(tempError);
  } else {
    setErrMsg([" * Invalid e-mail"]);
  }
};

export default emailValidate;
