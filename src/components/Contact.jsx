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
          colors: ['#FACC15', '#000000', '#EAB308', '#FDE047']
        });
      } catch (error) {
        console.error('Error submitting form to Google Forms:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-50/80 border-t border-zinc-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-400/50 text-xs font-mono font-bold text-yellow-800 mb-3 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Get In <span className="text-yellow-600 underline decoration-yellow-400 decoration-4">Touch</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
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
              className="glass-card glass-card-hover p-6 rounded-3xl border border-zinc-200 bg-white flex items-center gap-5 block group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 border border-yellow-400/50 flex items-center justify-center text-yellow-700 group-hover:scale-110 group-hover:bg-yellow-200 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">DIRECT EMAIL</div>
                <div className="text-base font-bold text-zinc-950 group-hover:text-yellow-700 transition-colors break-all">
                  {personalInfo.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-zinc-200 bg-white flex items-center gap-5 block group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 border border-yellow-400/50 flex items-center justify-center text-yellow-700 group-hover:scale-110 group-hover:bg-yellow-200 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">PHONE NUMBER</div>
                <div className="text-base font-bold text-zinc-950 group-hover:text-yellow-700 transition-colors">
                  {personalInfo.phone}
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-3xl border border-zinc-200 bg-white flex items-center gap-5 block group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-yellow-100 border border-yellow-400/50 flex items-center justify-center text-yellow-700 group-hover:scale-110 group-hover:bg-yellow-200 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">WHATSAPP CHAT</div>
                <div className="text-base font-bold text-zinc-950 group-hover:text-yellow-700 transition-colors">
                  Instant Message Me
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl border border-zinc-200 bg-white flex items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase mb-0.5">LOCATION</div>
                <div className="text-base font-bold text-zinc-950">
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
            <div className="glass-card p-8 rounded-3xl border border-zinc-200 bg-white relative shadow-sm">
              <h3 className="text-2xl font-bold text-zinc-950 mb-6">
                Send a Message
              </h3>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-yellow-50 border border-yellow-400 flex items-center gap-3 text-zinc-900 text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${
                        errors.name ? 'border-red-500' : 'border-zinc-200 focus:border-yellow-500 focus:bg-white'
                      } text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none transition-colors shadow-xs`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${
                        errors.email ? 'border-red-500' : 'border-zinc-200 focus:border-yellow-500 focus:bg-white'
                      } text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none transition-colors shadow-xs`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-700 uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${
                      errors.subject ? 'border-red-500' : 'border-zinc-200 focus:border-yellow-500 focus:bg-white'
                    } text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none transition-colors shadow-xs`}
                  />
                  {errors.subject && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-700 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project scope, timeline, and goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border ${
                      errors.message ? 'border-red-500' : 'border-zinc-200 focus:border-yellow-500 focus:bg-white'
                    } text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none transition-colors resize-none shadow-xs`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-red-500 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-yellow-400 text-black font-bold text-sm shadow-md hover:shadow-lg hover:bg-yellow-300 border border-yellow-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
