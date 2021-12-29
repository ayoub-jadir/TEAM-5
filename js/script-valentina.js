// Script JS di Valentina

// Chiamata Ajax per gestione file JSon (sezione Menu Navbar relativa alle lingue straniere supportate);
document.getElementById("btn-drop").addEventListener("mouseenter", mostraLista);

function mostraLista() {

    let ajax = new XMLHttpRequest();

    ajax.open("GET", "langs.json", true);

    ajax.onload = function () {
        if (this.status == 200) {

            let languages = JSON.parse(this.responseText);
            let show = "";


            for (let i in languages) {
                show += `
                    <li><a class="dropdown-item langs" href="#">${languages[i].nativeName}</a></li>           
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
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     
