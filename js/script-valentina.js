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

// Submenu Javascript;
let element1 = document.getElementById("pills-home-tab");
let element2 = document.getElementById("pills-profile-tab");

element2.addEventListener('click', function () {
    element2.classList.add('green-b', 'secondary-v');
    element1.classList.remove("green-b", 'secondary-v');
})

element1.addEventListener('click', function () {
    element1.classList.add('green-b', 'secondary-v');
    element2.classList.remove("green-b", 'secondary-v');
})


// Grafico pagina Exchange;
window.onload = () => {

    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Number of iPhones Sold in Different Quarters"
        },
        axisX: {
            minimum: new Date(2015, 01, 25),
            maximum: new Date(2017, 02, 15),
            valueFormatString: "MMM YY"
        },
        axisY: {
            title: "Number of Sales",
            titleFontColor: "#4F81BC",
            includeZero: true,
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "area",
            yValueFormatString: "#,##0.0mn",
            dataPoints: [
                { x: new Date(2015, 02, 1), y: 74.4, label: "Q1-2015" },
                { x: new Date(2015, 05, 1), y: 61.1, label: "Q2-2015" },
                { x: new Date(2015, 08, 1), y: 47.0, label: "Q3-2015" },
                { x: new Date(2015, 11, 1), y: 48.0, label: "Q4-2015" },
                { x: new Date(2016, 02, 1), y: 74.8, label: "Q1-2016" },
                { x: new Date(2016, 05, 1), y: 51.1, label: "Q2-2016" },
                { x: new Date(2016, 08, 1), y: 40.4, label: "Q3-2016" },
                { x: new Date(2016, 11, 1), y: 45.5, label: "Q4-2016" },
                { x: new Date(2017, 02, 1), y: 78.3, label: "Q1-2017", indexLabel: "Highest", markerColor: "red" }
            ]
        }]
    });
    chart.render();

}