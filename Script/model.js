




let cocukIsmi = null;
let toplamAlistirmaSayisi = 50;
let tekAlistirmaSuresi = 2;
let alistirmaListesi = [];
/**
 * Steps
 *  - javascriptin native random metodlari kullanilarak verilen 
 *      max ve min degerleri arasinda bir random tam sayi uretirim.
 * @param {*} min 
 * @param {*} max 
 */
function carpanUret(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
/**
 * Steps:
 *  - Bana gelen carpan max ve min degerlerine göre random sayi üretirim
 *  - Carpani ve carpan2 için bu islemi yaparim.
 * @param {*} min 
 * @param {*} max 
 */
function alistirmaOlustur(carpan1Min, carpan1Max, carpan2Min, carpan2Max) {
    let birinciCarpan = carpanUret(carpan1Min, carpan1Max);
    let ikinciCarpan = carpanUret(carpan2Min, carpan2Max);
    return {
        carpan1: birinciCarpan,
        carpan2: ikinciCarpan
    };
}

function toplamOyunSuresiAl(){
    return toplamAlistirmaSayisi * tekAlistirmaSuresi;
}


/**
 * Steps:
 *  - Bana veri olarak gelen "toplamAlistirmaSayisi" kadar alistirma uretmem gerekiyor
 *  - Herbir alistirmayi olusturmasi icin  " alistirmaOlustur" fonksuyonuna delege ediyorum.
 * @param {*} veriler 
 */
function alistirmalariOlustur(veriler) {
    cocukIsmi = veriler.cocukIsmi;
    toplamAlistirmaSayisi = veriler.toplamAlistirmaSayisi;
    tekAlistirmaSuresi = veriler.tekAlistirmaSuresi;
    for (let i = 0; i < veriler.toplamAlistirmaSayisi; i++) {
        let alistirma =
            alistirmaOlustur(veriler.birinciCarpanMinimum,
                veriler.birinciCarpanMaximum,
                veriler.ikinciCarpanMinimum,
                veriler.ikinciCarpanMaximum);
        alistirmaListesi.push(alistirma);
    }
    return alistirmaListesi;
};


function alistirmalariKontrolEt(kullaniciCevaplari){  
    // [{index:0, result: 11}, {index:1, result: 23}, ...]

    for(let i=0; i<kullaniciCevaplari.length; i++){
        let alistirma = alistirmaListesi[kullaniciCevaplari[i].index];
        let alistirmaSonucu = alistirma.carpan1 * alistirma.carpan2;

        if(kullaniciCevaplari[i].cevap == ""){
            kullaniciCevaplari[i].sonuc = "BOS";
        }else if(kullaniciCevaplari[i].cevap == alistirmaSonucu){
            kullaniciCevaplari[i].sonuc = "DOGRU";
        }else{
            kullaniciCevaplari[i].sonuc = "YANLIS";
        }
    }
    return kullaniciCevaplari();
}


function notuHesapla (dogruSayisi, toplamSoruSayisi) {
 return ((dogruSayisi/toplamSoruSayisi) * 6).toFixed(1);
}