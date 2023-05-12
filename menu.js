const menuArr = [
    {
        id: 1,
        categoria: 'Sobre a Loja',
        idCat: 'Sobre'
    },
    {
        id: 2,
        categoria: 'Redes Sociais',
        idCat: 'redes-sociais'
    },
    {
        id: 3,
        categoria: 'Produtos',
        idCat: 'products',
        subCategoria: [
                        {
                            id: 1,
                            categoria: 'Moda Feminina',
                            idCat: 'fem'
                        },
                        {
                            id: 2,
                            categoria: 'Moda Masculina',
                            idCat: 'masc'
                        },
                    ]
    }
]

let menu = menuArr.map(function(item) {
    if (item.categoria === 'Produtos') {
    return `
            <li>
                <a href="#${item.idCat}">${item.categoria}</a>
                <ul class="subMenu">${item.subCategoria.map(function(subItem){
                    return `<li><a href="#${subItem.idCat}">${subItem.categoria}</a></li>`;
                }).join("")}
                </ul>
            </li>
            `;
    } else {
    return `
            <li>
                <a href="#${item.idCat}">${item.categoria}</a>
            </li>
            `;
    }
})

document.querySelector('.nav').innerHTML = menu.join("");