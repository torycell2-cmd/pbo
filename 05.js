// Kelas induk (superclass)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  suara() {
    return `${this.nama} bersuara...`;
  }

  info() {
    return `Nama: ${this.nama}, Jenis: ${this.jenis}`;
  }
}

// Kelas turunan 1
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing"); // memanggil constructor superclass
    this.warna = warna;
  }

  suara() {
    return `${this.nama} mengeong: "Meong~"`;
  }
}

// Kelas turunan 2
class Anjing extends Hewan {
  constructor(nama, ras) {
    super(nama, "Anjing");
    this.ras = ras;
  }

  suara() {
    return `${this.nama} menggonggong: "Guk guk!"`;
  }
}

// Kelas turunan 3
class Burung extends Hewan {
  constructor(nama, warnaBulu) {
    super(nama, "Burung");
    this.warnaBulu = warnaBulu;
  }

  suara() {
    return `${this.nama} berkicau: "Cuit cuit~"`;
  }
}

// --- Contoh penggunaan ---
const hewan1 = new Hewan("Gajah", "Mamalia");
const kucing1 = new Kucing("Mimi", "Putih");
const anjing1 = new Anjing("Buddy", "Bulldog");
const burung1 = new Burung("Rio", "Biru");

// Menampilkan informasi
console.log(hewan1.info());
console.log(hewan1.suara());
console.log("--------------");

console.log(kucing1.info());
console.log(kucing1.suara());
console.log("--------------");

console.log(anjing1.info());
console.log(anjing1.suara());
console.log("--------------");

console.log(burung1.info());
console.log(burung1.suara());
