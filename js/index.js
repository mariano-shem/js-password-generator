import generateChar from "./generate-password.js";
import toggleCheckbox from "./checkbox-styling.js";
import { 
  UPPER_CASE_CHAR, 
  LOWER_CASE_CHAR, 
  NUMBER_CHAR, 
  SYMBOL_CHAR 
} from "./char-codes.js";
  
const $mainForm = document.querySelector("#mainForm");
const $pwField = document.querySelector("#pwField");
const $copyPw = document.querySelector(".output-copy");
const $charRng = document.querySelector("#charRng");
const $charNum = document.querySelector("#charNum");
const $rngFill = document.querySelector(".slider-fill");
const $checkbox = document.querySelectorAll("input[type=checkbox]");
const $uppTgl = document.querySelector("#uppTgl");
const $numTgl = document.querySelector("#numTgl");
const $symTgl = document.querySelector("#symTgl");
const $genBtn = document.querySelector("#genBtn");

/**
 * Event Listeners:
 *  $mainForm - disable page refresh upon submit
 *  $copyPW - copy newly generated password to clipboard
 *  $charRng - sync range value to label beside it
 *  $checkbox - change checkbox style
 */
$mainForm.addEventListener("submit", e => e.preventDefault())
$copyPw.addEventListener("click", () => {
  navigator.clipboard.writeText($pwField.value)
  alert("Copied to clipboard!")
})
$charRng.addEventListener("input", (e) => {
  $charNum.textContent = Number(e.target.value) + 7;
  $rngFill.style.width = `${e.target.value * 4}%`
})
$checkbox.forEach((box) => {
  box.addEventListener("change", toggleCheckbox)
})

// MAIN: Generate random password
$genBtn.addEventListener("click", () => {
  let selectedTypes = LOWER_CASE_CHAR;

  let pwLength = Number($charRng.value) + 7;
  let checkUppTgl = $uppTgl.checked;
  let checkNumTgl = $numTgl.checked;
  let checkSymTgl = $symTgl.checked;

  if (checkUppTgl) { selectedTypes = selectedTypes.concat(UPPER_CASE_CHAR) }
  if (checkNumTgl) { selectedTypes = selectedTypes.concat(NUMBER_CHAR) }
  if (checkSymTgl) { selectedTypes = selectedTypes.concat(SYMBOL_CHAR) }

  let fullPw = generateChar(pwLength, selectedTypes)
  $pwField.value = fullPw;
  $copyPw.style.display = "inline"
})

