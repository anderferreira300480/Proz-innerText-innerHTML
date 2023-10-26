let elementoH1 = document.querySelector('#titulo')
elementoH1.innerText = 'Novo título com JS'

let elementoA = document.querySelector('a')
elementoA.innerText = 'Texto na tag a'

let elementoUl = document.querySelector('ul')
elementoUl.innerHTML = `
    <li>Elemento de lista JS 01</li>
    <li>Elemento de lista JS 02</li>
    <li>Elemento de lista JS 03</li>
` 

let elementoOl = document.querySelector('#lista-ordenada')
elementoOl.innerHTML = `
    <li><a href="google.com.br">Google</a></li>
    <li><a href="https://about.meta.com">Meta</a></li>
    <li><a href="https://www.aws.com">AWS</a></li>
` 

