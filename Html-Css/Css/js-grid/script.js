let root = document.querySelector('.root');
let sel = document.querySelector('.sel1')
let sel2 = document.querySelector('.sel2')

for (let i = 3; i < 7; i++) {
    sel.innerHTML += `<option value="${i}">${i}</option>`;
    sel2.innerHTML += `<option value="${i}">${i}</option>`;
}

function addBox(box, row) {
    root.innerHTML = "";
    let num = box * row;

    for (let i = 0; i < num; i++) {
        root.append(createBox())
    }
}

function createBox() {
    let num = 1
    let num2 = 1
    let div = document.createElement('div')
    let contCol = document.createElement('div')

    let textColumn = document.createElement('h3')
    textColumn.innerHTML = "grid-column: <span>span</span> <span class='num'>1</span>;"
    let buttonColumn = document.createElement('button')
    buttonColumn.innerHTML = "+"
    buttonColumn.onclick = () => {
        if (sel.value > num) {
            div.setAttribute('style', `grid-column: span ${++num}; grid-row: span ${num2};`)
            outColumn.innerHTML = num;
            textColumn.innerHTML = `grid-column: <span> span</span> <span class='num'>${num}</span>;`
        }
    }
    buttonColumn.classList.add('button')
    let outColumn = document.createElement('span')
    outColumn.innerHTML = "1"
    outColumn.classList.add('count')
    let buttonColumnMinus = document.createElement('button')
    buttonColumnMinus.innerHTML = "-"
    buttonColumnMinus.classList.add('button')
    buttonColumnMinus.onclick = () => {
        if (1 < num) {
            div.setAttribute('style', `grid-column: span ${--num}; grid-row: span ${num2};`)
            outColumn.innerHTML = num;
            textColumn.innerHTML = `grid-column: <span> span</span> <span class='num'>${num}</span>;`
        }
    }
    div.classList.add('box')


    let contCol2 = document.createElement('div')
    let textColumn2 = document.createElement('h3')
    textColumn2.innerHTML = "grid-row: <span>span</span> <span class='num'>1</span>;"
    let buttonColumn2 = document.createElement('button')
    buttonColumn2.classList.add('button')
    buttonColumn2.innerHTML = "+"
    buttonColumn2.onclick = () => {
        if (5 > num2) {
            div.setAttribute('style', `grid-column: span ${num}; grid-row: span ${++num2};`)
            outColumn2.innerHTML = num2;
            textColumn2.innerHTML = `grid-row: <span> span</span> <span class='num'>${num2}</span>;`
        }
    }
    let buttonColumnMinus2 = document.createElement('button')
    buttonColumnMinus2.innerHTML = "-"
    buttonColumnMinus2.classList.add('button')
    buttonColumnMinus2.onclick = () => {
        if (1 < num2) {
            div.setAttribute('style', `grid-column: span ${num}; grid-row: span ${--num2};`)
            outColumn2.innerHTML = num2;
            textColumn2.innerHTML = `grid-row: <span> span</span> <span class='num'>${num2}</span>;`
        }
    }
    let outColumn2 = document.createElement('span')
    outColumn2.innerHTML = "1"
    outColumn2.classList.add('count')
    contCol2.append(textColumn2, buttonColumnMinus2, outColumn2, buttonColumn2)
    contCol.append(textColumn, buttonColumnMinus, outColumn, buttonColumn)
    div.append(contCol, contCol2)
    return div
}
addBox(sel.value, sel2.value)

root.setAttribute('style', `grid-template-columns: repeat(${sel.value}, 1fr); grid-template-rows: repeat(${sel2.value}, 300px);`)

sel.onchange = () => {
    root.setAttribute('style', `grid-template-columns: repeat(${sel.value}, 1fr); grid-template-rows: repeat(${sel2.value}, 300px);`)

    addBox(sel.value, sel2.value)
}

sel2.onchange = () => {
    root.setAttribute('style', `grid-template-columns: repeat(${sel.value}, 1fr); grid-template-rows: repeat(${sel2.value}, 300px);`)

    addBox(sel.value, sel2.value)
}