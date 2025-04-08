import { LOWER_CASE_CHAR, UPPER_CASE_CHAR } from "./char-codes.js";

const prefixTypes = LOWER_CASE_CHAR.concat(UPPER_CASE_CHAR);

export default function generateChar(length, selectedTypes) {
  let pwPrefix ="";
  let pwSuffix ="";
  let fullPw = "";
 
 // Password Prefix: Six lowercase and uppercase letters followed by a single dash(-)
  for (let y = 0; y <= 6; y++) {
    if (y === 6) {
      pwPrefix += "-"
    } else {
      pwPrefix += prefixTypes[Math.floor(Math.random() * prefixTypes.length)]
    }
  }
  
  // Full Password:
  for (let x = 7; x <= length; x++) {
    pwSuffix += selectedTypes[Math.floor(Math.random() * selectedTypes.length)]
  }
  
  // Concatenate Prefix and Suffix, then store in Password
  return fullPw = pwPrefix + pwSuffix;

}