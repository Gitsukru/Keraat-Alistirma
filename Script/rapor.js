function sonucSayisiniAl(sonucTipi, liste) {
    let result = 0;
    for (let i = 0; i < liste.lenght; i++) {
        if (liste[i].sonuc == sonucTipi) {
            result++;
        }
    }
    return result;
}


function generateReport(cocugunCevaplari, alistirmaBilgileri) {

    let raporDataYapisi = [{
            label: "Cocugun Ismi",
            data: alistirmaBilgileri.cocukIsmi
        },
        {
            label: "Toplam Soru Sayisi",
            data: alistirmaBilgileri.toplamAlisirmaSayisi
        },
        {
            label: "Toplam Süre",
            data: toplamOyunSuresiAl
        },
        {
            label: "Bitirme Süresi",
            data: cocugunCevaplari
        },
        {
            label: "Dogru Sayisi",
            data: sonucSayisiniAl("DOGRU", cocugunCevaplari)
        },
        {
            label: "Yanlis Sayisi",
            data: sonucSayisiniAl("YANLI", cocugunCevaplari)
        },
        {
            label: "Bos Sayisi",
            data: sonucSayisiniAl("BOS", cocugunCevaplari)
        },
        {
            label: "Not",
            data: notuHesapla(sonucSayisiniAl("DOGRU", cocugunCevaplari), alistirmaBilgileri.toplamAlisirmaSayisi)
        },
    ];
    let rows = [];
    for (let i = 0; i < raporDataYapisi.length; i++) {
        rows.push(`<tr>
        <td>${raporDataYapisi[i].label}</td>
        <td>${raporDataYapisi[i].data}</td>
    </tr>`);
    }
    $("#current_result").html(rows.join(""));
    document.getElementById("#sonuc_modal").showModal();
}




/*
<table>
                            <tr>
                                <td>Cocugun Ismi</td>
                                <td id="rp_cocukIsmi">cocuk</td>
                            </tr>
                            <tr>
                                <td>Toplam Soru Sayisi</td>
                                <td id="rp_toplamSoruSayisi">0</td>
                            </tr>
                            <tr>
                                <td>Toplam Süre</td>
                                <td id="rp_toplamSüre">0</td>
                            </tr>
                            <tr>
                                <td>Bitirme Süresi</td>
                                <td id="rp_bitirmeSüresi">0</td>
                            </tr>

                            <tr>
                                <td>Dogru Sayisi</td>
                                <td id="rp_dogruSayisi">0</td>
                            </tr>
                            <tr>
                                <td>Yanlis Sayisi</td>
                                <td id="rp_yanlisSayisi">0</td>
                            </tr>

                            <tr>
                                <td>Bos Sayisi</td>
                                <td id="rp_bosSayisi">0</td>
                            </tr>
                            <tr>
                                <td>Not</td>
                                <td id="rp_not">0</td>
                            </tr>


                        </table>*/