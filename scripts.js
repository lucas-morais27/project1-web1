document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada e pronta!");

    const eventos = [
        {
            title: "Web Summit",
            img: "images/events/web-summit.png",
            date: "14 ~ 17 de Novembro"
        },
        {
            title: "VTEX Day",
            img: "images/events/vtex-day.jpg",
            date: "10 ~ 11 de Outubro"
        }
    ];

    const reunioes = [
        {
            title: "Reunião RH",
            img: "images/meetings/meeting1.png",
            date: "Qua, 08 MAI 08:30"
        },
        {
            title: "Negócios",
            img: "images/meetings/meeting2.png",
            date: "Sex, 10 MAI 14:00"
        },
        {
            title: "Reunião RH",
            img: "images/meetings/meeting1.png",
            date: "Qui, 30 MAI 08:30"
        },
        {
            title: "Negócios",
            img: "images/meetings/meeting2.png",
            date: "Seg, 03 JUN 14:00"
        }
    ];

    const workshops = [
        {
            title: "Workshop",
            img: "images/workshops/workshop.jpg",
            description: "Importância da imagem pessoal..."
        }
    ];

    function createCard(item) {
        return `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    ${item.date ? `<p>${item.date}</p>` : ''}
                    ${item.description ? `<p>${item.description}</p>` : ''}
                </div>
            </div>
        `;
    }

    function renderSection(sectionId, items) {
        const section = document.getElementById(sectionId);
        items.forEach(item => {
            section.insertAdjacentHTML('beforeend', createCard(item));
        });
    }

    renderSection('eventos', eventos);
    renderSection('reunioes', reunioes);
    renderSection('workshops', workshops);
});
