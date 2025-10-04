class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }
}
const mhs1 = new Mahasiswa("Satura", "23012345", "Teknik Informatika");
mhs1.belajar();
