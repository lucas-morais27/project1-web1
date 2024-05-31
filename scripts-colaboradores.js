document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const empresas = [
        {
            logo: "images/logos/logo3.png",
            nome: "Cacau Show",
            fraseEfeito: "Bônus 4x mais pontos como CacauLovers."
        },
        {
            logo: "images/logos/logo2.png",
            nome: "Unimed",
            fraseEfeito: "Plano de Saúde para você e sua família."
        },
        {
            logo: "images/logos/logo1.png",
            nome: "Vitarella",
            fraseEfeito: "Cestas mensais com nossos produtos."
        }
    ];

    const empresasContainer = document.getElementById('empresas');

    empresas.forEach(empresa => {
        const empresaElement = document.createElement('div');
        empresaElement.classList.add('card');

        empresaElement.innerHTML = `
            <img src="${empresa.logo}" alt="${empresa.nome}">
            <div class="content">
                <h3>${empresa.nome}</h3>
                <p>${empresa.fraseEfeito}</p>
            </div>
        `;

        empresasContainer.appendChild(empresaElement);
    });

    const sideMenu = document.getElementById('sideMenu');
    const menuToggle = document.getElementById('menuToggle');

    menuToggle.addEventListener('click', function() {
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-70px';
        } else {
            sideMenu.style.left = '0px';
        }
    });
});
