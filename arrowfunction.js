//funcao anonima
let z = function (n1, n2) {return n1 + n2}

//arrow function
let x = (n1, n2) => {return n1 + n1}

//invocar
console.log(z(10,20));
console.log(x(10,20));

//arrow com somente um parametro
let y = n1 => { return n1 * n2}
function consultar(){
    fetch("url")
        .then(x => x.text())
    //reescrevendo
    // .then é um método do objeto fetch
    fetch("url")
    .then(function (x) {return x.text()})
}