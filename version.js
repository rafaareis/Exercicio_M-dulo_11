const versionsObj = [
    {
        id: 1,
        versionModel: "Desktop",
        iClass: "fa-solid fa-desktop fa-xl",
        alt: "Desenho de Desktop"
    },
    {
        id: 2,
        versionModel: "Mobile",
        iClass: "fa-solid fa-mobile-screen-button fa-xl",
        alt: "Desenho de Mobile"
    },
    {
        id: 3,
        versionModel: "Tablet",
        iClass: "fa-solid fa-tablet-screen-button fa-xl",
        alt: "Desenho de Tablet"
    }
]

let versions = versionsObj.map(function(version) {
    return `
            <li>
                <div id="${version.versionModel}" class="model-version" >
                    <h3>Versão:</h3>
                    <div class="model">
                        <i class="${version.iClass}"></i>
                        <h4>${version.versionModel}</h4>
                    </div>
                </div>  
            </li>
            `;
})

document.querySelector('.version').innerHTML = versions.join("");

