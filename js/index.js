import { 
  UPPER_CASE_CHAR, 
  LOWER_CASE_CHAR, 
  NUMBER_CHAR, 
  SYMBOL_CHAR 
} from "./char-codes.js";

import generateChar from "./generate-password.js";

const $mainForm = document.querySelector("#mainForm");
const $pwField = document.querySelector("#pwField");
const $copyPw = document.querySelector(".output-copy");
const $charRng = document.querySelector("#charRng");
const $charNum = document.querySelector("#charNum");
const $rngFill = document.querySelector(".slider-fill")
const $uppTgl = document.querySelector("#uppTgl");
const $numTgl = document.querySelector("#numTgl");
const $symTgl = document.querySelector("#symTgl");
const $genBtn = document.querySelector("#genBtn");

/**
 * Event Listeners:
 *  $mainForm - disable page refresh upon submit
 *  $copyPW - copy newly generated password to clipboard
 *  $charRng - sync range value to label beside it
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

// MAIN: Generate random password
$genBtn.addEventListener("click", () => {
  let selectedTypes = LOWER_CASE_CHAR;

  let pwLength = $charRng.value;
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
