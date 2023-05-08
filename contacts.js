const contactsObj = [
    {
        id: 1,
        socialNetwork: 'Facebook',
        aClass: 'facebook-link',
        href: 'https://www.facebook.com/',
        iClass: 'fa-brands fa-facebook-f fa-2xl',
        tagI: '<i class="fa-brands fa-facebook"></i>',
        alt: 'Ícone do Facebook'
    },
    {
        id: 2,
        socialNetwork: 'Instagram',
        aClass: 'instagram-link',
        href: 'https://www.instagram.com/',
        iClass: 'fa-brands fa-instagram fa-2xl',
        tagI: '<i class="fa-brands fa-instagram"></i>',
        alt: 'Ícone do Instagram'
    },
    {
        id: 3,
        socialNetwork: 'Telegram',
        aClass: 'telegram-link',
        href: 'https://web.telegram.org/k/',
        iClass: 'fa-brands fa-telegram fa-2xl',
        tagI: '<i class="fa-brands fa-telegram"></i>',
        alt: 'Ícone do Telegram'
    },
    {
        id: 4,
        socialNetwork: 'Youtube',
        aClass: 'youtube-link',
        href: 'https://www.youtube.com',
        iClass: 'fa-brands fa-youtube fa-2xl',
        tagI: '<i class="fa-brands fa-youtube"></i>',
        alt: 'Ícone do Youtube'
    },
    {
        id: 5,
        socialNetwork: 'WhatsApp',
        aClass: 'whatsapp-link',
        phone:'5512982757380',
        href:'https://web.whatsapp.com/send?phone=',
        iClass: 'fa-brands fa-whatsapp fa-2xl',
        alt: 'Ícone do Whatsapp'
    },
    {
        id: 6,
        socialNetwork: 'TikTok',
        aClass: 'tiktok-link',
        href: 'https://www.tiktok.com',
        iClass: 'fa-brands fa-tiktok fa-2xl',
        tagI: '<i class="fa-brands fa-tiktok"></i>',
        alt: 'Ícone do TikTok'
    },
    {
        id: 7,
        socialNetwork: 'Spotify',
        aClass: 'spotify-link',
        href: 'https://open.spotify.com/',
        iClass: "fa-brands fa-spotify fa-2xl",
        alt: 'Ícone do TikTok'
    }
]

let contacts = contactsObj.map(function(contact) {
    if(contact.socialNetwork === 'WhatsApp') {
        return `<li>
                <div class="contact" >
                <a class="${contact.aClass}" href="${contact.href}${contact.phone}" id="${contact.socialNetwork}">
                    <i class="${contact.iClass}" alt="${contact.alt}" id="logo"></i>
                 </a>
                </div>
                </li>`;
        } else {
        return `<li>
                <div class="contact">
                <a class="${contact.aClass}" href="${contact.href}" id="${contact.socialNetwork}">
                    <i class="${contact.iClass}" alt=${contact.alt}" id="logo"></i>
                </a>
                </div>
                </li>`;
    }
})

document.querySelector('.contacts').innerHTML = contacts.join("");