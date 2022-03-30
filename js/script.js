const contentHolder = document.getElementById(`content`);
const authorHolder = document.getElementById(`author`);
const accAuthor = document.getElementById(`accAuthor`);
let test, content;

const googleBtn = document.getElementById(`googleBtn`);
const copyBtn = document.getElementById(`copyBtn`);

function quate() {
    bt.innerHTML = `Loading....`;
    fetch(`https://api.quotable.io/random`)
        .then((res) => res.json())
        .then((result) => {
            contentHolder.innerHTML = result.content;
            accAuthor.innerHTML = result.author;
            let temp = result.author;

            authorHolder.innerHTML = `This is What ${temp} once said`;
            test = result.author;
            content = result.content;
        });
    bt.innerHTML = `More Qoute`;
    copyBtn.style.opacity = `1`;
}
bt.addEventListener(`click`, quate);

window.onload = function() {
    quate();
};

googleBtn.addEventListener(`click`, () => {
    window.open("http://google.com/search?q=" + test);
});

// In 'Add To Cart' event handler change the button text to 'Item Added'
// In the same event handler use: setTimeout(makeTimeoutFunc(), 2000);
// In makeTimeoutFunc() change the button text to original value.

function textToClipboard() {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    copyBtn.innerHTML = `Copied !!`;
    setTimeout(() => {
        copyBtn.innerHTML = `  copy the quate <i class="fas fa-copy"></i>`;
        copyBtn.style.opacity = `.2`;
        copyBtn.style.pointerEvents = `none`;
        copyBtn.style.transition = `.5s`;
    }, 500);
}
copyBtn.addEventListener(`click`, textToClipboard);