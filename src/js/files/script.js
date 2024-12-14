// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";

// Підключення списку активних модулів
import { flsModules } from "./modules.js";
const headerLanguage = document.querySelector(".header__language");
const headerLanguagUa = document.querySelector(".language-ua");
const headerLanguagRu = document.querySelector(".language-ru");
if (headerLanguage) {
  headerLanguage.addEventListener("click", function (e) {
    headerLanguagUa.classList.toggle("_language");
    headerLanguagRu.classList.toggle("_language");
  });
}
