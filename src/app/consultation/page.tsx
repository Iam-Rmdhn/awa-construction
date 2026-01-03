'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Hammer,
  MapPin,
  Banknote,
  Lightbulb,
  LandPlot,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ConsultationPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: '',
    projectLocation: '',
    areaLength: '',
    areaWidth: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const areaTotal = (parseFloat(formData.areaLength) || 0) * (parseFloat(formData.areaWidth) || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `Halo Awa Construction, saya ingin konsultasi proyek dengan detail berikut:
    
Nama: ${formData.name}
Email: ${formData.email}
No WhatsApp: ${formData.whatsapp}

Detail Proyek:
Jenis: ${formData.projectType}
Lokasi: ${formData.projectLocation}
Luas: ${formData.areaLength}m x ${formData.areaWidth}m (${areaTotal} m²)

Preferensi:
Budget: ${formData.budget}
Rencana Pengerjaan: ${formData.timeline}`;

    const phoneNumber = '628179243081';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E5F9E] text-white h-16 flex items-center px-4 md:px-8 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="font-unbounded font-bold text-lg md:text-xl">{t.consultation.title}</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-unbounded font-bold text-2xl md:text-3xl lg:text-4xl text-(--color-foreground) mb-4">
              {t.consultation.intro.title}
            </h2>
            <p className="font-nunito text-gray-600">{t.consultation.intro.desc}</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="font-unbounded font-bold text-center text-lg mb-8">
              {t.consultation.contactInfo.title}
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12 text-sm text-gray-700">
              <div className="font-nunito flex items-center gap-3">
                <Mail className="shrink-0" size={20} />
                <span>konsultasi@sagawagroup.id</span>
              </div>
              <div className="font-nunito flex items-center gap-3">
                <Phone className="shrink-0" size={20} />
                <span>+62 817-9243-081</span>
              </div>
              <div className="font-nunito flex items-start gap-3 max-w-xs">
                <MapPin className="shrink-0 mt-1" size={20} />
                <span>JL. Sawo No. 156, RT: 04/01 Cipedak-Jagakarsa, Jakarta Selatan 12630</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Section 1: Basic Info */}
            <div>
              <h3 className="font-unbounded font-bold text-lg mb-6 border-b pb-2">
                {t.consultation.form.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.form.name}
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <User className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.form.email}
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <Mail className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.form.whatsapp}
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <Phone className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Project Detail */}
            <div>
              <h3 className="font-unbounded font-bold text-lg mb-6 border-b pb-2">
                {t.consultation.project.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.project.type}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all appearance-none bg-white"
                      placeholder={t.consultation.project.typePlaceholder}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <Hammer className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.project.location}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <MapPin className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.project.area}
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name="areaLength"
                        value={formData.areaLength}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                        placeholder={t.consultation.project.length}
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                        <LandPlot className="text-gray-400" size={20} />
                      </div>
                    </div>
                    <span className="font-bold text-gray-500">x</span>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name="areaWidth"
                        value={formData.areaWidth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                        placeholder={t.consultation.project.width}
                      />
                    </div>
                    <span className="font-nunito text-sm text-gray-600 whitespace-nowrap">
                      {t.consultation.project.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Preference & Budget */}
            <div>
              <h3 className="font-unbounded font-bold text-lg mb-6 border-b pb-2">
                {t.consultation.preferences.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.preferences.budget}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder={t.consultation.preferences.budgetPlaceholder}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <Banknote className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-nunito block text-sm font-medium text-gray-700 mb-2">
                    {t.consultation.preferences.timeline}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2E5F9E] focus:border-transparent outline-none transition-all"
                      placeholder={t.consultation.preferences.timelinePlaceholder}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1">
                      <Lightbulb className="text-gray-400" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-[#FEB05D] text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-[4px_4px_0px_0px_var(--color-tertiary)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                {t.consultation.submit}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
