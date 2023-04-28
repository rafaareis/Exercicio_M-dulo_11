const produtosObj = [
    {
        id: 1,
        name: 'Adidas Tênis Breaknet Originals',
        gender: 'M',
        price: 'R$ 227.99',
        img: 'images/adidas-breaknet-originals.webp'
    },
    {
        id: 2,
        name: 'Tênis Nike Drownshifter 12',
        gender: 'M',
        price: 'R$ 299.99',
        img: 'images/nike-downshifter-12.webp'
    },
    {
        id: 3,
        name: 'Tênis Olympikus Zex',
        gender: 'M',
        price: 'R$ 188.99',
        img: 'images/olympikus-zex.webp'
    },
    {
        id: 4,
        name: 'Tênis Casual Masculino Ollie Branco Plazza',
        gender: 'M',
        price: 'R$ 99.99',
        img: 'images/ollie-branco-plazza.webp'
    },
    {
        id: 5,
        name: 'Tênis Nike Flex Runner 2G',
        gender: 'F',
        price: 'R$ 379.99',
        img: 'images/nike-flex-runner.webp'
    },
    {
        id: 6,
        name: 'Tênis de Corrida Feminino Mizuno Jet 5',
        gender: 'F',
        price: 'R$ 199.99',
        img: 'images/mizuno-jet.webp'
    },
    {
        id: 7,
        name: 'Tênis Olympikus Easy Feminino',
        gender: 'F',
        price: 'R$ 149.99',
        img: 'images/olympikus-easy.webp'
    },
    {
        id: 8,
        name: 'Tênis Fila Move On',
        gender: 'F',
        price: 'R$ 199.49',
        img: 'images/fila-move-on.webp'
    }

]

let produtosFem = produtosObj.map(function(produtoFem) {
    if(produtoFem.gender === 'F') {
        return `
                <div class="produto-fem">
                    <img src="${produtoFem.img}" alt="Foto de ${produtoFem.name}" />
                    <h3>${produtoFem.name}</h3>
                    <div class="price">
                        <span>${produtoFem.price}</span>
                    </div>
                    <button type="button">Adicionar ao carrinho</button>
                </div>
                `;  
    }
})

document.querySelector('.produtos-fem').innerHTML = produtosFem.join("");

let produtosMasc = produtosObj.map(function(produtoMasc) {
    if(produtoMasc.gender === 'M') {
        return `
                <div class="produto-masc">
                    <img src="${produtoMasc.img}" alt="Foto de ${produtoMasc.name}" />
                    <h3>${produtoMasc.name}</h3>
                    <div class="price">
                        <span>${produtoMasc.price}</span>
                    </div>
                    <button type="button">Adicionar ao carrinho</button>
                </div>
                `;  
    }
})

document.querySelector('.produtos-masc').innerHTML = produtosMasc.join("");