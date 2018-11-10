function alistirmalariEkranaYaz(liste) {
    let alistirmaKumbarasi = [];
    for (let i = 0; i <liste.length; i++) {
        alistirmaKumbarasi.push(`<div>
                                 <label>${liste[i].carpan1} x ${liste[i].carpan2}</label> 
                                 <input id="alistirtma_${i}"/>
                                 </div>`);
    }
    $(".alistirma_container").html(alistirmaKumbarasi.join(""));
}


function alistirmaSonuclariniAl(){
    return Array.from($(".alistirma_container input"))
                .map(function(inputElm){
                    return {
                            index: +$(inputElm).attr("id").replace("alistirma_", ""), 
                            cevap: $(inputElm).val(),
                            sonuc: undefined // "DOGRU", "YANLIS", "BOS"
                        };
                });
}



function alistirmaSonuclariniEkranaYazdir(kontrolEdilmisSonuclar) {

    for (let i = 0; i < kontrolEdilmisSonuclar.length; i++) {

        if (kontrolEdilmisSonuclar[i].sonuc == "DOGRU") {
            sonucRengi = "lightgreen";
        } else if (kontrolEdilmisSonuclar[i].sonuc == "YANLIS") {
            sonucRengi = "pink";
        } else if (kontrolEdilmisSonuclar[i].sonuc == "BOS") {
            sonucRengi = "yellow";
        }
        $(`#alistirma_${kontrolEdilmisSonuclar[i].index}`).css("backgroundColor", sonucRengi);
    }
}

function ekraniDondur() {
    $(".alistirma_container input").attr("disabled", "disabled");
}

function alistirmayiBitir() {
    let alistirmaSonuclariListesi = alistirmaSonuclariniAl();
    let kontrolEdilmisSonuclar =
        alistirmalariKontrolEt(alistirmaSonuclariListesi);
    alistirmaSonuclariniEkranaYazdir(kontrolEdilmisSonuclar);
    generateReport(kontrolEdilmisSonuclar, veriAl());
}

function timerBaslat(toplamSureSaniye) {
    toplamSureSaniye = Math.ceil(toplamSureSaniye);

    let intervalHanle =
        setInterval(function () {
            toplamSureSaniye--;
            if (toplamSureSaniye <0) {
                timerSonlandir(intervalHanle);
                ekraniDondur();
                alistirmayiBitir();
            }
            $("time").html(toplamSureSaniye);
        }, 1000);
}

function timerSonlandir(timerHandle) {
    clearInterval(timerHandle);
}

function veriAl() {
    let cocukIsmi = $("#Isim").val();
    let toplamAlistirmaSayisi = +$("#toplamAlistirmaSayisi").val();
    let tekAlistirmaSuresi = +$("#tekAlistirmaSuresi").val();

    let birinciCarpanMaximum = +$("#BC_max").val();
    let birinciCarpanMinimum = +$("#BC_min").val();
    let ikinciCarpanMaximum = +$("#IC_max").val();
    let ikinciCarpanMinimum = +$("#IC_min").val();


    return {
        cocukIsmi,
        toplamAlistirmaSayisi,
        tekAlistirmaSuresi,
        birinciCarpanMaximum,
        birinciCarpanMinimum,
        ikinciCarpanMaximum,
        ikinciCarpanMinimum
    }
}
