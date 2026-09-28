import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone,
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../common/Button';
import { Toast } from '../ui/Toast';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('success');
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setToastType('success');
        setToastMessage(`Thank you, ${formData.name}! Your message has been sent directly to my Gmail inbox.`);
        
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#6366f1', '#22d3ee', '#10b981'],
          });
        } catch (err) {
          // Confetti fallback
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      setToastType('error');
      setToastMessage(`Could not send message automatically. Please email me directly at ${personal.email}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    setToastType('info');
    setToastMessage('Email address copied to clipboard!');
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setPhoneCopied(true);
    setToastType('info');
    setToastMessage('Phone number copied to clipboard!');
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Exceptional"
          subtitle="Have a project in mind, an open frontend role, or want to discuss modern React web architecture? Send me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Availability Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Feel free to reach out directly via email, connect on LinkedIn, or inspect my repositories on GitHub.
                </p>
              </div>

              {/* Email One-Click Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono truncate">
                      {personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-400 hover:bg-slate-300 dark:hover:bg-slate-750 transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone One-Click Copy & Call Box */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 overflow-hidden group/phone flex-1"
                  title="Click to call"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover/phone:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Direct Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono truncate group-hover/phone:text-emerald-500 dark:group-hover/phone:text-emerald-400 transition-colors">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-300 dark:hover:bg-slate-750 transition-all shrink-0 cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {phoneCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 transition-colors font-mono">
                    {personal.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Typical response time: &lt; 12 hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Connect on Social
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white transition-all shadow-sm group"
                  >
                    <GithubIcon className="w-5 h-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-[#0A66C2] dark:text-[#38bdf8] transition-all shadow-sm group"
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#0A66C2] dark:text-[#38bdf8] group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/70 border ${
                        errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } focus:border-brand-500 focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 transition-all`}
                    />
                    {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/70 border ${
                        errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } focus:border-brand-500 focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 transition-all`}
                    />
                    {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend React Project Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/70 border ${
                      errors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                    } focus:border-brand-500 focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 transition-all`}
                  />
                  {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-950/70 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                    } focus:border-brand-500 focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full mt-2"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Toast for Alert Feedback */}
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
