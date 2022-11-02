function getReadTime(text) {
    function countReadTime(text) {
        const wordsPerMinute = 200;
        const numberOfWords = text.split(/\s/g).length;

        if (numberOfWords < wordsPerMinute) {
            return 0;
        }

        return Math.round(numberOfWords / wordsPerMinute);
    }

    const minutes = countReadTime(text);

    if (minutes === 0) {
        return `moins d'une minute`;
    }

    const unit = minutes === 1 ? "minute" : "minutes";

    return `${minutes} ${unit}`;
}

const ELEMENT_SELECTOR = ".post-body-container";
const READTIME_SELECTOR = "small";

const element = document.querySelector(ELEMENT_SELECTOR);
const readTimeElement = document.createElement(READTIME_SELECTOR);

if (element && readTimeElement) {
    const p = document.createElement("p");

    readTimeElement.textContent = `Lecture en ${getReadTime(
        element.textContent
    )}`;

    readTimeElement.style.fontSize = "0.7em";
    readTimeElement.style.fontFamily = "Helvetica, Arial, sans-serif";  
    readTimeElement.style.backgroundColor = "#ff0000";
    readTimeElement.style.padding = "0.2em 0.5em";
    readTimeElement.style.borderRadius = "0.45em";
    readTimeElement.style.boxShadow = "1px 5px 5px #333";
    
    p.appendChild(readTimeElement);

    element.prepend(p);
}