

let containerDiv = document.querySelector("#container");

let button = document.createElement('button');
button.innerText = ('CLICK ME!');
let gridDivs = document.createElement('div')
// let button=document.querySelectorAll('#btn');
button.addEventListener('click', function () {
    while (containerDiv.hasChildNodes()){
        containerDiv.removeChild(containerDiv.firstChild);
    }
    squareNum = prompt('How many squares per side would you like');
    // if (squareNum < 16) {
    //     squareNum = 16;
    // }

    // return (squareNum); 
    
    squareNum = Number(squareNum);

 squareHeight = 600 / Math.sqrt(squareNum);
        gridDivs.style.height = `${squareHeight}px`;
        gridDivs.style.width = `${squareHeight}px`;


    for (let i = 0; i < squareNum; i++) {
       

        let gridDivs = document.createElement('div');
        gridDivs.style.height = `${squareHeight}px`;
        gridDivs.style.width = `${squareHeight}px`;
        gridDivs.style.border = ' 1px solid';
 containerDiv.appendChild(gridDivs);


        gridDivs.addEventListener('mouseover', function () {
            gridDivs.style.backgroundColor = 'black'
           
        });
    }
})

let buttonDiv = document.querySelector('#btnDiv');
buttonDiv.append(button);




