const ancSobre = document.querySelector("a#a-sobre");
const dropDownSobre = document.querySelector("ul#dropdown-sobre");

ancSobre.addEventListener('click', () => {
    let state;
    if (dropDownSobre.style.display == 'none') {
        state = 'block';
    } else {
        state = 'none';
    }
    dropDownSobre.style.display = state;
})