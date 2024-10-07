// Kelas utama 1
class Kendaraan {
    constructor(nama) {
      this.nama = nama;
    }
  
    bergerak() {
      console.log(`${this.nama} sedang bergerak`);
    }
  }
  
  // Subclass dari Kendaraan
  class Mobil extends Kendaraan {
    constructor(nama, merk) {
      super(nama);
      this.merk = merk;
    }
  
    informasi() {
      console.log(`Mobil merk ${this.merk} dengan nama ${this.nama} sedang bergerak`);
    }
  }
  
  class Motor extends Kendaraan {
    constructor(nama, jenis) {
      super(nama);
      this.jenis = jenis;
    }
  
    informasi() {
      console.log(`Motor jenis ${this.jenis} bernama ${this.nama} sedang bergerak`);
    }
  }
  
  class Sepeda extends Kendaraan {
    constructor(nama, tipe) {
      super(nama);
      this.tipe = tipe;
    }
  
    informasi() {
      console.log(`Sepeda tipe ${this.tipe} bernama ${this.nama} sedang bergerak`);
    }
  }
  
  class Truk extends Kendaraan {
    constructor(nama, kapasitas) {
      super(nama);
      this.kapasitas = kapasitas;
    }
  
    informasi() {
      console.log(`Truk bernama ${this.nama} dengan kapasitas ${this.kapasitas} ton sedang bergerak`);
    }
  }
  
  class Bus extends Kendaraan {
    constructor(nama, jumlahPenumpang) {
      super(nama);
      this.jumlahPenumpang = jumlahPenumpang;
    }
  
    informasi() {
      console.log(`Bus bernama ${this.nama} dapat mengangkut ${this.jumlahPenumpang} penumpang`);
    }
  }
  
  // Kelas utama 2
  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    bersuara() {
      console.log(`${this.nama} sedang bersuara`);
    }
  }
  
  // Subclass dari Hewan
  class Anjing extends Hewan {
    bersuara() {
      console.log(`${this.nama} menggonggong`);
    }
  }
  
  class Kucing extends Hewan {
    bersuara() {
      console.log(`${this.nama} mengeong`);
    }
  }
  
  class Burung extends Hewan {
    bersuara() {
      console.log(`${this.nama} berkicau`);
    }
  }
  
  class Sapi extends Hewan {
    bersuara() {
      console.log(`${this.nama} melenguh`);
    }
  }
  
  class Kuda extends Hewan {
    bersuara() {
      console.log(`${this.nama} meringkik`);
    }
  }
  
  // Kelas utama 3
  class Bangunan {
    constructor(nama) {
      this.nama = nama;
    }
  
    deskripsi() {
      console.log(`Bangunan ini bernama ${this.nama}`);
    }
  }
  
  // Subclass dari Bangunan
  class Rumah extends Bangunan {
    deskripsi() {
      console.log(`Rumah bernama ${this.nama} digunakan untuk tempat tinggal`);
    }
  }
  
  class Kantor extends Bangunan {
    deskripsi() {
      console.log(`Kantor bernama ${this.nama} digunakan untuk bekerja`);
    }
  }
  
  class Sekolah extends Bangunan {
    deskripsi() {
      console.log(`Sekolah bernama ${this.nama} digunakan untuk belajar`);
    }
  }
  
  class RumahSakit extends Bangunan {
    deskripsi() {
      console.log(`Rumah Sakit bernama ${this.nama} digunakan untuk perawatan kesehatan`);
    }
  }
  
  class Mall extends Bangunan {
    deskripsi() {
      console.log(`Mall bernama ${this.nama} digunakan untuk berbelanja dan rekreasi`);
    }
  }
  
  // Kelas utama 4
  class AlatMusik {
    constructor(nama) {
      this.nama = nama;
    }
  
    mainkan() {
      console.log(`${this.nama} sedang dimainkan`);
    }
  }
  
  // Subclass dari AlatMusik
  class Gitar extends AlatMusik {
    mainkan() {
      console.log(`${this.nama} dimainkan dengan cara dipetik`);
    }
  }
  
  class Piano extends AlatMusik {
    mainkan() {
      console.log(`${this.nama} dimainkan dengan cara ditekan`);
    }
  }
  
  class Drum extends AlatMusik {
    mainkan() {
      console.log(`${this.nama} dimainkan dengan cara dipukul`);
    }
  }
  
  class Biola extends AlatMusik {
    mainkan() {
      console.log(`${this.nama} dimainkan dengan cara digesek`);
    }
  }
  
  class Seruling extends AlatMusik {
    mainkan() {
      console.log(`${this.nama} dimainkan dengan cara ditiup`);
    }
  }
  
  // Kelas utama 5
  class Tanaman {
    constructor(nama) {
      this.nama = nama;
    }
  
    tumbuh() {
      console.log(`${this.nama} sedang tumbuh`);
    }
  }
  
  // Subclass dari Tanaman
  class Pohon extends Tanaman {
    tumbuh() {
      console.log(`Pohon bernama ${this.nama} sedang tumbuh tinggi`);
    }
  }
  
  class Bunga extends Tanaman {
    tumbuh() {
      console.log(`Bunga bernama ${this.nama} sedang mekar`);
    }
  }
  
  class Rumput extends Tanaman {
    tumbuh() {
      console.log(`Rumput bernama ${this.nama} tumbuh di tanah`);
    }
  }
  
  class Padi extends Tanaman {
    tumbuh() {
      console.log(`Padi bernama ${this.nama} sedang tumbuh di sawah`);
    }
  }
  
  class Kaktus extends Tanaman {
    tumbuh() {
      console.log(`Kaktus bernama ${this.nama} tumbuh di daerah kering`);
    }
  }
  
  // Menggunakan beberapa subclass
  const mobil = new Mobil("Sedan", "Toyota");
  mobil.informasi();
  
  const anjing = new Anjing("Rex");
  anjing.bersuara();
  
  const rumah = new Rumah("Villa Indah");
  rumah.deskripsi();
  
  const gitar = new Gitar("Gitar Akustik");
  gitar.mainkan();
  
  const pohon = new Pohon("Beringin");
  pohon.tumbuh();
  