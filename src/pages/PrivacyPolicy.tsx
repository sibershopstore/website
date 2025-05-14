import React from 'react';
import Section from '../components/ui/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <Section id="privacy" title="Kebijakan Privasi" className="pt-32">
      <div className="prose max-w-4xl mx-auto">
        <h2>1. Informasi yang Kami Kumpulkan</h2>
        <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk:</p>
        <ul>
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Alamat</li>
          <li>Informasi pembayaran</li>
        </ul>

        <h2>2. Penggunaan Informasi</h2>
        <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
        <ul>
          <li>Menyediakan layanan yang Anda minta</li>
          <li>Mengirim informasi tentang layanan kami</li>
          <li>Meningkatkan layanan kami</li>
          <li>Mengirim pembaruan dan pemberitahuan</li>
          <li>Menanggapi pertanyaan dan permintaan Anda</li>
        </ul>

        <h2>3. Keamanan Data</h2>
        <p>Kami mengambil langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda dari akses yang tidak sah atau pengungkapan. Ini termasuk:</p>
        <ul>
          <li>Enkripsi data sensitif</li>
          <li>Firewall dan sistem keamanan</li>
          <li>Akses terbatas ke data pribadi</li>
          <li>Pemantauan keamanan berkelanjutan</li>
        </ul>

        <h2>4. Berbagi Informasi</h2>
        <p>Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi Anda dalam situasi berikut:</p>
        <ul>
          <li>Dengan persetujuan Anda</li>
          <li>Untuk memenuhi kewajiban hukum</li>
          <li>Untuk melindungi hak dan keamanan</li>
        </ul>

        <h2>5. Hak Anda</h2>
        <p>Anda memiliki hak untuk:</p>
        <ul>
          <li>Mengakses informasi pribadi Anda</li>
          <li>Memperbarui atau mengoreksi informasi Anda</li>
          <li>Meminta penghapusan informasi Anda</li>
          <li>Menolak penggunaan informasi Anda untuk tujuan tertentu</li>
        </ul>

        <h2>6. Perubahan Kebijakan</h2>
        <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diumumkan di situs web kami.</p>

        <h2>7. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi kami, silakan hubungi kami di:</p>
        <ul>
          <li>Email: sibershop.store@gmail.com</li>
          <li>WhatsApp: +62 851 7415 5134</li>
        </ul>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;