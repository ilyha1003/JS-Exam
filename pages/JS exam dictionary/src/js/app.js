import getData from "./Api";
import { loaderHTML } from "./constants";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const wordList = document.querySelector('.word__list');
    input.focus();

    input.oninput = () => {
        wordList.innerHTML = loaderHTML;
        getData();
    }
})