class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;  // Atribut publik
    this.nim = nim;    // Atribut publik

    let _nilai = nilai;  // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}
const mhs1 = new Mahasiswa('Satura', '2301001', 85);
console.log(`Nilai awal: ${mhs1.getNilai()}`); // Output: 85

mhs1.setNilai(95);
console.log(`Nilai setelah diubah: ${mhs1.getNilai()}`); // Output: 95

mhs1.setNilai(150); // Output: Nilai harus antara 0 dan 100

const mhs2 = new Mahasiswa('Fahri', '1234567', 85);
console.log(`Nilai awal: ${mhs1.getNilai()}`); // Output: 85

mhs2.setNilai(95);
console.log(`Nilai setelah diubah: ${mhs1.getNilai()}`); // Output: 95

mhs2.setNilai(150); // Output: Nilai harus antara 0 dan 100

const mhs3 = new Mahasiswa('Marcellino', '7654321', 85);
console.log(`Nilai awal: ${mhs1.getNilai()}`); // Output: 85

mhs3.setNilai(95);
console.log(`Nilai setelah diubah: ${mhs1.getNilai()}`); // Output: 95

mhs3.setNilai(150); // Output: Nilai harus antara 0 dan 100
