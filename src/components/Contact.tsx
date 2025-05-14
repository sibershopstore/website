import React, { useState, useRef } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_727k195',
          'template_l9m6nzd',
          form.current,
          'ShwzX_TGYjaFSiSvO'
        );
        alert('Pesan berhasil dikirim!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Gagal mengirim pesan. Silakan coba lagi.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <Section
      id="contact"
      title="Hubungi Kami"
      subtitle="Hubungi kami untuk konsultasi gratis atau pertanyaan tentang layanan kami."
      centered
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Info Kontak</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded-lg">
                <Phone size={20} className="text-teal-500" />
              </div>
              <div>
                <h4 className="font-medium text-white">Telepon/WhatsApp</h4>
                <p className="text-slate-300">+62 851 7415 5134</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded-lg">
                <Mail size={20} className="text-teal-500" />
              </div>
              <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-slate-300">sibershop.store@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded-lg">
                <MapPin size={20} className="text-teal-500" />
              </div>
              <div>
                <h4 className="font-medium text-white">Alamat</h4>
                <p className="text-slate-300">
                  Cikarang Barat<br />
                  Kab. Bekasi, Jawa Barat<br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-medium text-white mb-3">Jam Operasional:</h4>
            <p className="text-slate-300">Senin - Jumat: 08:00 - 17:00</p>
            <p className="text-slate-300">Sabtu - Minggu: 09:00 - 15:00</p>
          </div>
        </div>
        
        <div>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Subjek pesan"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Tulis pesan Anda disini..."
                required
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" variant="secondary" className="w-full sm:w-auto">
                Kirim Pesan
              </Button>
              
              <a 
                href="https://wa.me/6285174155134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium rounded-md px-4 py-2 bg-green-600 hover:bg-green-700 text-white transition-all duration-200 w-full sm:w-auto"
              >
                <MessageSquare size={18} />
                Hubungi via WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;