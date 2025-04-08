import { 
  UPPER_CASE_CHAR, 
  LOWER_CASE_CHAR, 
  NUMBER_CHAR, 
  SYMBOL_CHAR 
} from "./charcodes.js";

const $pwField = document.querySelector("#pwField");
const $copyPw = document.querySelector(".fa-copy");
const $charRng = document.querySelector("#charRng");
const $charNum = document.querySelector("#charNum");
const $uppTgl = document.querySelector("#uppTgl");
const $numTgl = document.querySelector("#numTgl");
const $symTgl = document.querySelector("#symTgl");
const $genBtn = document.querySelector("#genBtn");

const $mainForm = document.querySelector("#mainForm");

$mainForm.addEventListener("submit", e => e.preventDefault())

const pfxChar = LOWER_CASE_CHAR.concat(UPPER_CASE_CHAR);
let selectedChar = LOWER_CASE_CHAR;

$charRng.addEventListener("input", (e) => {
  $charNum.textContent = e.target.value;
})

$genBtn.addEventListener("click", () => {
  let pwLength = $charRng.value;
  let checkUppTgl = $uppTgl.checked;
  let checkNumTgl = $numTgl.checked;
  let checkSymTgl = $symTgl.checked;

  if (checkUppTgl) { selectedChar = selectedChar.concat(UPPER_CASE_CHAR) }
  if (checkNumTgl) { selectedChar = selectedChar.concat(NUMBER_CHAR) }
  if (checkSymTgl) { selectedChar = selectedChar.concat(SYMBOL_CHAR) }

  generateChar(pwLength)
})

$copyPw.addEventListener("click", () => {
  navigator.clipboard.writeText($pwField.value)
  alert("Password copied to clipboard!")
})

function generateChar(length) {
  let pwPrfx ="";
  let fullPw = "";
  /**
   * Password Prefix:
   *  Six lowercase and uppercase letters followed by a single dash(-)
   */
  for (let y = 0; y <= 6; y++) {
    if (y === 6) {
      pwPrfx += "-"
    } else {
      pwPrfx += pfxChar[Math.floor(Math.random() *pfxChar.length)]
    }
  }
  
  // Full Password:
  for (let x = 7; x <= length; x++) {
    fullPw += selectedChar[Math.floor(Math.random() *selectedChar.length)]
  }
  
  // Concatenate Prefix and Password then display to text input
  
  
  fullPw = pwPrfx + fullPw;
  $pwField.value = fullPw;
}
