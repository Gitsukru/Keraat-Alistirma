/**
 * Interaction:
 * 1. Parametrele Alanlarini Doldur
 * 2. Baslat butonuna basilacak alistirma yuklemesi tetiklenecek
 * 3. Butona basildiktan sonra timer çalismaya baslayacak
 * 4. Alistirmalar yuklenecek
 * 5. Alistirmalar cözülmeye calisilacak. cözülen alistirmanin sonucu Kutucuga yazilacak.
 * 6. Timer süresi biterse ekran donacak
 * 7. Bitir butonuna basilinca alistirma bitecek ve 
 * 8. Alistirma bitince sonuclar alistirma alaninda gösterilecek
 * 9. Raporlama gosterilecek
 *    Hali hazirdaki alistirmanin socunclari
      Genel olarak simdiye kadar yapilan tüm alistirmalarin sonuclari

 * 
 * bu gun 
 * autofocus
 * tofixed
 * html raport sayfasi gosterdik dialog shov modal function
 * literal yapiyi kullandik html
 * raporlama...
 * 3 adet js dosyasi ekledik alistir, rapor,storage
 * 
 * bu gun 
 * grafik olustur (Bar Chart)
 * local storrag dan bilgileri al (cocugun ismi ==> veri al)
 * JSON.sringfy ==> string ==> objeye cevir ==> JSON.parse.
 * arrayleri for la gezerek notu bulduk / bulundugu arrayi secerek de ulasabiliriz / birde map ile 
 * map, filter ==> 1 ve 1den fazla, find ==>, reduce
 * biz map ve find kullandik cocugunraporlari icn
 * butun notlari array ile birdefada dom a gonderiyoruz map ve string litteral le
 * 
 * ikinci bölüm contact manager
 * isim soy isim telefon 1,2,3 adres, email,
 * 
 * 
 * 
 */
$(document).ready(function () {

    $(".baslat").on("click", () => {
        let veriler = veriAl(); //veriler.cocukIsmi
        let alistirmaListesi = alistirmalariOlustur(veriler); // 1 (op1: 5; op2: 7;  result:)
        alistirmalariEkranaYaz(alistirmaListesi);
        timerBaslat(toplamOyunSuresiAl());
    });

    $(".bitir").on("click", () => {
        alistirmayiBitir();
    });

    $(".GeneRapor").on("click", () => {
        //simdiye kadar aktif olan
        let 
    });

});