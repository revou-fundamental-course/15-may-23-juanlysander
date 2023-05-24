// fungsi luasPersegi mengambil data dari input user yang dimasukkan ke dalam variabel "sisi"
// lalu di kalkulasi dan dimasukkan ke dalam variabel "result"
// baris terakhir adalah untuk menampilkan hasil perhitungan luas dengan melakukan manipulasi isi dari HTML
// dengan id "output_luas"
// sebelum fungsi ini berjalan ada fungsi if untuk menampilkan error ketika user menekan tombol HITUNG
// tanpa memasukkan angka / memasukkan string value dengan isNaN (is Not a Number)

// notes:
// alternatif if valdation = try-catch


function luasPersegi() {
    let luas = document.getElementById("output_luas")
    let sisi = document.getElementById("sisi-luas").value;
    let result = sisi * sisi

    if (sisi === ''){
        alert('Jangan dikosongin ya!');
        return;
    }

    if (isNaN(sisi)) {
        alert("Isi dengan ANGKA saja ya!");
        return;
    }

    luas.innerHTML = "Luas Persegi: <br>" + sisi + " X " + sisi + " =<br>" + "<span style='color: red;'>" + result + "</span>";

}

// fungsi reset ini untuk menghapus atau mereset luas.innerHTML yang sudah ada isinya dan tertampil di user interface

function resetLuas() {
    let luas = document.getElementById("output_luas")
    let sisi = document.getElementById("sisi-luas").value;
    luas.innerHTML = "";
    sisi.value = "";
}

function kelilingPersegi() {
    let keliling = document.getElementById("output_keliling")
    let sisi = document.getElementById("sisi-keliling").value;
    let result = 4 * sisi

    if (sisi === ''){
        alert('Jangan dikosongin ya!');
        return;
    }

    if (isNaN(sisi)) {
        alert("Isi dengan ANGKA saja ya!");
        return;
    }

    keliling.innerHTML = "Keliling Persegi: <br>" + "4" + " X " + sisi + " =<br>" + "<span style='color: red;'>" + result + "</span>";

}

function resetKeliling() {
    let keliling = document.getElementById("output_keliling")
    let sisi = document.getElementById("sisi-keliling").value;
    keliling.innerHTML = "";
    sisi.value = "";
}


// PERSEGI PANJANG
// logic mirip dengan persegi, perbedaan terdapat di 2 input untuk mengambil value panjang dan lebar dari user
// lalu pada if karena variabelnya ada 2, maka digunakan operator || (atau) sehingga jika salah satu input 
// kosong maka alert tetap akan muncul

function luasPP() {
    let luas = document.getElementById("output_luas_pp")
    let panjang = document.getElementById("panjang-luas-pp").value;
    let lebar = document.getElementById("lebar-luas-pp").value;
    let result = panjang * lebar

    if (panjang === '' || lebar === ""){
        alert('Jangan dikosongin ya! Isi Panjang dan Lebarnya');
        return;
    }

    if (isNaN(panjang) || isNaN(lebar)) {
        alert("Isi dengan ANGKA saja ya!");
        return;
    }

    luas.innerHTML = "Luas Persegi Panjang: <br>" + panjang + " X " + lebar + " =<br>" + "<span style='color: red;'>" + result + "</span>";

}

function resetLuasPP() {
    let luas = document.getElementById("output_luas_pp")
    let panjang = document.getElementById("panjang-keliling-pp").value;
    let lebar = document.getElementById("lebar-keliling-pp").value;
    luas.innerHTML = "";
    panjang.value = "";
    lebar.value = ";"
}

function kelilingPP() {
    let keliling = document.getElementById("output_keliling_pp")
    let panjang = document.getElementById("panjang-keliling-pp").value;
    let lebar = document.getElementById("lebar-keliling-pp").value;
    let result = (2 * panjang) + (2 * lebar)

    if (panjang === '' || lebar === ""){
        alert('Jangan dikosongin ya! Isi Panjang dan Lebarnya');
        return;
    }

    if (isNaN(panjang) || isNaN(lebar)) {
        alert("Isi dengan ANGKA saja ya!");
        return;
    }

    keliling.innerHTML = "Keliling Persegi Panjang: <br>" + "(2 X " + panjang + ") + (2 X " + lebar + ") =<br>" + "<span style='color: red;'>" + result + "</span>";

}

function resetKelilingPP() {
    let keliling = document.getElementById("output_keliling_pp")
    let panjang = document.getElementById("panjang-keliling-pp").value;
    let lebar = document.getElementById("lebar-keliling-pp").value;
    keliling.innerHTML = "";
    panjang.value = "";
    lebar.value = "";
}