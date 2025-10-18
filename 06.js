// Kelas induk (abstrak)
class Kendaraan {
  constructor(merk) {
    if (new.target === Kendaraan) {
      throw new Error("Kelas 'Kendaraan' tidak dapat diinstansiasi langsung!");
    }
    this.merk = merk;
  }

  // Method abstrak (harus diimplementasikan oleh subclass)
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan oleh subclass!");
  }

  info() {
    return `Kendaraan dengan merk: ${this.merk}`;
  }
}

// Subclass Mobil
class Mobil extends Kendaraan {
  constructor(merk, jumlahPintu) {
    super(merk);
    this.jumlahPintu = jumlahPintu;
  }

  maju() {
    return `${this.merk} melaju di jalan raya dengan halus 🚗`;
  }

  bukaPintu() {
    return `${this.merk} membuka ${this.jumlahPintu} pintu.`;
  }
}

// Subclass Motor
class Motor extends Kendaraan {
  constructor(merk, tipe) {
    super(merk);
    this.tipe = tipe;
  }

  maju() {
    return `${this.merk} melaju kencang di jalanan 🏍️`;
  }

  belok(arah) {
    return `${this.merk} berbelok ke arah ${arah}.`;
  }
}

// Subclass Sepeda
class Sepeda extends Kendaraan {
  constructor(merk, jenis) {
    super(merk);
    this.jenis = jenis;
  }

  maju() {
    return `${this.merk} dikayuh pelan-pelan di taman 🚴‍♂️`;
  }
}

// ---- Contoh penggunaan ----
try {
  // const k = new Kendaraan("Umum"); // ❌ akan error (tidak boleh langsung buat objek abstrak)
} catch (error) {
  console.error(error.message);
}

const mobil1 = new Mobil("Toyota", 4);
const motor1 = new Motor("Yamaha", "Sport");
const sepeda1 = new Sepeda("Polygon", "Gunung");

// Menampilkan hasil
console.log(mobil1.info());
console.log(mobil1.maju());
console.log(mobil1.bukaPintu());
console.log("--------------");

console.log(motor1.info());
console.log(motor1.maju());
console.log(motor1.belok("kanan"));
console.log("--------------");

console.log(sepeda1.info());
console.log(sepeda1.maju());
