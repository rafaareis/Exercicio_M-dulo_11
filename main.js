const menuArr = ['Sobre a Loja', 'Produtos']

let menu = menuArr.map(function(item) {
    return `<li><a href="#${item}">${item}</a></li>`;
})

document.querySelector('.nav').innerHTML = menu.join("");