import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message content cannot be empty';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);

      try {
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeVOrO9AxWjvUKl9A0-LjpKP2nfMiZWiCSZ4I3npQbIwpb8jg/formResponse';
        const formDataPayload = new FormData();
        formDataPayload.append('entry.1195235810', formData.name);
        formDataPayload.append('entry.1346893845', formData.email);
        formDataPayload.append('entry.1088523263', formData.subject);
        formDataPayload.append('entry.1639850747', formData.message);

        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formDataPayload
        });

        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger confetti celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#FFFFFF', '#3B82F6']
        });
      } catch (error) {
        console.error('Error submitting form to Google Forms:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d121e] border border-[#2563EB]/30 text-xs font-mono text-[#2563EB] mb-3 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Have a project in mind, a job opportunity, or just want to connect? Send a message and let's start the conversation!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-5 block group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">DIRECT EMAIL</div>
                <div className="text-base font-bold text-white group-hover:text-[#2563EB] transition-colors break-all">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-5 block group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">PHONE NUMBER</div>
                <div className="text-base font-bold text-white group-hover:text-[#2563EB] transition-colors">
                  {personalInfo.phone}
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-5 block group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0d121e] border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">WHATSAPP CHAT</div>
                <div className="text-base font-bold text-white group-hover:text-[#2563EB] transition-colors">
                  Instant Message Me
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#0d121e] border border-white/10 flex items-center justify-center text-zinc-400">
                <MapPin className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">LOCATION</div>
                <div className="text-base font-bold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-[#2563EB]/15 border border-[#2563EB] flex items-center gap-3 text-white text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0d121e] border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0d121e] border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                      } text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0d121e] border ${
                      errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.subject && (
                    <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project scope, timeline, and goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0d121e] border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                    } text-white placeholder-zinc-500 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-bold text-sm shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:bg-[#1D4ED8] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
