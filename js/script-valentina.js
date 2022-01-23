// Script JS di Valentina

// Chiamata Ajax per gestione file JSon (sezione Menu Navbar relativa alle lingue straniere supportate);
document.getElementById("btn-drop").addEventListener("mouseenter", mostraLista);

function mostraLista() {

    let ajax = new XMLHttpRequest();

    ajax.open("GET", url, true);

    ajax.onload = function () {
        if (this.status == 200) {

            let languages = JSON.parse(this.responseText);
            let show = "";


            for (let i in languages) {
                show += `
                    <li><a class="dropdown-item langs text-center" href="#">${languages[i].nativeName}</a></li>           
                    `
            }

            document.getElementById("lista-lingue").innerHTML = show;


        } else if (this.status == 404) {
            document.getElementById("lista-lingue").innerHTML = "Risorsa non trovata!";
        }

    }

    ajax.send();

}


// Script in JQuery per animazione Menu Dropdown in Hover;
$(document).ready(function () {
    $(".dropdown").hover(function () {
        let dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});


// Grafico pagina Exchange;
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});