const contentHolder = document.getElementById(`content`);
const authorHolder = document.getElementById(`author`);
const accAuthor = document.getElementById(`accAuthor`);
const googleBtn = document.getElementById(`googleBtn`);
const copyBtn = document.getElementById(`copyBtn`);
let test = `Sydney J Harris`,
    content;

function quate() {
    bt.innerText = `Loading....`;
    bt.style.opacity = `.2`;
    bt.style.pointerEvents = `none`;
    fetch(`https://api.quotable.io/random`)
        .then((res) => res.json())
        .then((result) => {
            contentHolder.innerHTML = result.content;
            accAuthor.innerHTML = result.author;
            let temp = result.author;

            authorHolder.innerHTML = `This is What <span class="authtorHead">${temp} Once Said</span>`;
            test = result.author;
            content = result.content;
            bt.innerHTML = `More Qoute`;
            bt.style.opacity = `1`;
            bt.style.pointerEvents = `auto`;
        });
    copyBtn.style.opacity = `1`;
}
bt.addEventListener(`click`, quate);

googleBtn.addEventListener(`click`, () => {
    window.open("http://google.com/search?q=" + test);
});



function textToClipboard() {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    copyBtn.style.transition = `.5s`;
    copyBtn.innerHTML = `Copied !!`;
    setTimeout(() => {
        copyBtn.innerHTML = `  copy the quate <i class="fas fa-copy"></i>`;
        // copyBtn.style.opacity = `.2`;
        // copyBtn.style.pointerEvents = `none`;
        copyBtn.style.transition = `.5s`;
    }, 500);
}
copyBtn.addEventListener(`click`, textToClipboard);