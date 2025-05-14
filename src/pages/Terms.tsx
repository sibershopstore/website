import React from 'react';
import Section from '../components/ui/Section';

const Terms: React.FC = () => {
  return (
    <Section id="terms" title="Syarat & Ketentuan" className="pt-32">
      <div className="prose max-w-4xl mx-auto">
        <h2>1. Penerimaan Syarat dan Ketentuan</h2>
        <p>Dengan menggunakan layanan Siber Shop Store, Anda menyetujui dan terikat oleh syarat dan ketentuan ini.</p>

        <h2>2. Layanan</h2>
        <p>Siber Shop Store menyediakan layanan berikut:</p>
        <ul>
          <li>Pembuatan website dan blog</li>
          <li>Keamanan siber</li>
          <li>Digital forensik</li>
          <li>E-book edukatif</li>
          <li>Penghapusan akun media sosial</li>
          <li>Digital marketing</li>
        </ul>

        <h2>3. Pembayaran</h2>
        <p>Ketentuan pembayaran:</p>
        <ul>
          <li>Pembayaran dilakukan di muka sebelum layanan dimulai</li>
          <li>Harga yang tercantum belum termasuk pajak</li>
          <li>Pembayaran dapat dilakukan melalui transfer bank atau e-wallet</li>
          <li>Bukti pembayaran harus dikirimkan untuk verifikasi</li>
        </ul>

        <h2>4. Jaminan Layanan</h2>
        <p>Kami memberikan jaminan untuk layanan kami:</p>
        <ul>
          <li>Garansi kepuasan 100%</li>
          <li>Dukungan teknis 24/7</li>
          <li>Revisi sesuai kesepakatan</li>
          <li>Kerahasiaan data terjamin</li>
        </ul>

        <h2>5. Hak dan Kewajiban</h2>
        <h3>Hak Klien:</h3>
        <ul>
          <li>Mendapatkan layanan sesuai kesepakatan</li>
          <li>Mendapatkan dukungan teknis</li>
          <li>Mengajukan revisi sesuai ketentuan</li>
          <li>Mendapatkan jaminan kerahasiaan data</li>
        </ul>

        <h3>Kewajiban Klien:</h3>
        <ul>
          <li>Memberikan informasi yang akurat</li>
          <li>Melakukan pembayaran tepat waktu</li>
          <li>Mematuhi ketentuan penggunaan layanan</li>
          <li>Tidak menyalahgunakan layanan</li>
        </ul>

        <h2>6. Pembatalan dan Refund</h2>
        <p>Ketentuan pembatalan dan refund:</p>
        <ul>
          <li>Pembatalan harus diinformasikan minimal 24 jam sebelumnya</li>
          <li>Refund dapat dilakukan sesuai dengan kebijakan yang berlaku</li>
          <li>Biaya administrasi dapat dikenakan untuk pembatalan</li>
        </ul>

        <h2>7. Perubahan Ketentuan</h2>
        <p>Siber Shop Store berhak mengubah syarat dan ketentuan ini tanpa pemberitahuan sebelumnya. Perubahan akan efektif setelah dipublikasikan di website.</p>

        <h2>8. Hubungi Kami</h2>
        <p>Untuk pertanyaan tentang syarat dan ketentuan, silakan hubungi:</p>
        <ul>
          <li>Email: sibershop.store@gmail.com</li>
          <li>WhatsApp: +62 851 7415 5134</li>
        </ul>
      </div>
    </Section>
  );
};

export default Terms;