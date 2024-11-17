const filmler = [
    {
        ad: "How to Train Your Dragon Homecoming",
        poster: "httydh.jpg",
        altyazi: "https://download1478.mediafire.com/b4ww810d7mog-R8A7L2j5myrlrNa1hcec0-HCTfY0cVzKutNIdRq-w7Vj4hJaJMR2Ee1BqaYQ826ehaAKULglmPoABZ7W7vFitaYBNecmFgzLSVHRcNLojkOZctlCiovDJBmdkeNzUgfdgVr24JnI_YJeKrX4lRFMgStUME35IeRHg/7hdl5fc9hpvkfur/httydh.srt",
        dili: "Azerice",
        durumu: "Tamamlanmış"
    },
	
	{
        ad: "Carl's Date",
        poster: "cd.jpg",
        altyazi: "https://download1589.mediafire.com/hupgvolztnrggHpBWfcz5D4lVeje-ptJcuQxowP-7ezIUlJsJ7zlfHzvG-yrSF06egnUkr2xQ81TdmqcBj-hKxvKMQs9RkbHDf2E3LgzynhXzlY3p9Hn7HVSe850bElw6ZxS-SpIdegH660F8LM31ar5U7piD5v3uzUy8LCYwRGoiQ/lbltxvmvzl4te68/carlsdate.srt",
        dili: "Azerice",
        durumu: "Tamamlanmış"
    },

  {
        ad: "Deadpool & Wolverine",
        poster: "daw.jpg",
        altyazi: "https://www.mediafire.com/file/xsv7pr3p2tdxqun/daw_aze.srt/file",
        dili: "Azerice",
        durumu: "Tamamlanmış"
    },
];

function aramaYap() {
    const aramaKutusu = document.getElementById("aramaKutusu").value.toLowerCase();
    const filmSonucu = filmler.find(film => film.ad.toLowerCase() === aramaKutusu);

    const filmDetay = document.getElementById("filmDetay");
    const anaMenuButonu = document.getElementById("anaMenuButonu");
    const altyaziNasılKurulurButonu = document.getElementById("altyaziNasılKurulur");

    if (filmSonucu) {
        filmDetay.innerHTML = `
            <img src="${filmSonucu.poster}" alt="${filmSonucu.ad}" class="filmPoster">
            <div class="filmBilgi">
                <h2>${filmSonucu.ad}</h2>
                <p><strong>Altyazı Dili:</strong> ${filmSonucu.dili}</p>
                <p><strong>Altyazı Durumu:</strong> ${filmSonucu.durumu}</p>
                <a href="${filmSonucu.altyazi}" target="_blank" class="altyaziLink">Altyazıyı İndir</a>
            </div>
        `;
        anaMenuButonu.style.display = "block"; // Ana Menü butonunu göster
        altyaziNasılKurulurButonu.style.display = "block"; // Altyazı nasıl kurulur butonunu göster
    } else {
        filmDetay.innerHTML = `<p style="color: red;">Film bulunamadı. Lütfen filmin IMDb ismini aratin.</p>`;
        anaMenuButonu.style.display = "block"; // Ana Menü butonunu göster
        altyaziNasılKurulurButonu.style.display = "block"; // Altyazı nasıl kurulur butonunu göster
    }
}

function anaMenuyeDon() {
    const filmDetay = document.getElementById("filmDetay");
    const anaMenuButonu = document.getElementById("anaMenuButonu");
    const altyaziNasılKurulurButonu = document.getElementById("altyaziNasılKurulur");

    filmDetay.innerHTML = `<p>Film araması yapmak için yukarıdaki kutuya bir film adı yazın.</p>`;
    anaMenuButonu.style.display = "none"; // Ana Menü butonunu gizle
    altyaziNasılKurulurButonu.style.display = "none"; // Altyazı nasıl kurulur butonunu gizle
    document.getElementById("aramaKutusu").value = ""; // Arama kutusunu temizle
}

function altyaziNasılKurulur() {
    window.open("http://vidmoly.me/w/dgrwnlt0ptyn", "_blank");
}
