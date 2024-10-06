class Sensor {
    constructor(nama, jenis, jangkauan, lokasi) {
        this.nama = nama;
        this.jenis = jenis;
        this.jangkauan = jangkauan; // dalam kilometer
        this.lokasi = lokasi;
        this.status = "mati"; // Status awal sensor
    }

    infoSensor() {
        return `Sensor ${this.nama} (${this.jenis}) berlokasi di ${this.lokasi}, dengan jangkauan ${this.jangkauan} km. Status: ${this.status}.`;
    }

    nyalakanSensor() {
        this.status = "menyala";
        return `Sensor ${this.nama} telah dinyalakan.`;
    }

    matikanSensor() {
        this.status = "mati";
        return `Sensor ${this.nama} telah dimatikan.`;
    }
}

class SensorPendeteksiTsunami extends Sensor {
    constructor(nama, jangkauan, lokasi, sensitivitas, waktuRespons) {
        super(nama, "Pendeteksi Tsunami", jangkauan, lokasi);
        this.sensitivitas = sensitivitas; // tinggi gelombang minimal yang bisa dideteksi dalam meter
        this.waktuRespons = waktuRespons; // waktu respons dalam detik
    }

    infoSensor() {
        return `${super.infoSensor()} Sensitivitas: ${this.sensitivitas} meter, Waktu respons: ${this.waktuRespons} detik.`;
    }

    restartSensor() {
        this.status = "mati";
        console.log(`Sensor ${this.nama} sedang dimatikan untuk restart...`);
        this.status = "Mati";
        return `Sensor ${this.nama} telah dihidupkan kembali.`;
    }
}

const sensorTsunami = new SensorPendeteksiTsunami("Tsunami Alert-3000", 500, "Pantai Sumatra Barat", 0.5, 10);

// Menghidupkan sensor
console.log(sensorTsunami.nyalakanSensor());

// Menampilkan informasi sensor
console.log(sensorTsunami.infoSensor());

// Merestart sensor
console.log(sensorTsunami.restartSensor());

// Menampilkan informasi sensor setelah restart
console.log(sensorTsunami.infoSensor());
