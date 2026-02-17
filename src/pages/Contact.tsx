import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mineralInterest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Inquiry submitted successfully! You will receive a confirmation email shortly.'
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          mineralInterest: "",
          message: ""
        });
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit inquiry. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas pt-20 pb-16 px-4 contact-section">
      <style>
        {`
        /* TEXTBOXES ONLY - Deep Press with Dark Shadows */
        /* Applied to: input, textarea, select elements */
        
        .deep-press-input,
        .deep-press-textarea,
        .deep-press-select {
          position: relative;
          width: 100%;
          background: linear-gradient(145deg, #08080c, #121212);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 14px 16px;
          color: #ffffff;
          font-size: 15px;
          font-family: inherit;
          box-shadow: 
            inset 5px 5px 10px rgba(0, 0, 0, 0.9),
            inset -5px -5px 10px rgba(25, 25, 35, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        /* Dark shadow layer for textboxes */
        .deep-press-input::after,
        .deep-press-textarea::after,
        .deep-press-select::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: -10px;
          background: rgba(0, 0, 0, 0.7);
          filter: blur(14px);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        /* Hover state */
        .deep-press-input:hover,
        .deep-press-textarea:hover,
        .deep-press-select:hover {
          box-shadow: 
            inset 6px 6px 12px rgba(0, 0, 0, 0.95),
            inset -6px -6px 12px rgba(30, 30, 45, 0.25),
            0 6px 16px rgba(0, 0, 0, 0.5);
          transform: translateY(-1px);
          border-color: rgba(120, 119, 198, 0.15);
        }

        .deep-press-input:hover::after,
        .deep-press-textarea:hover::after,
        .deep-press-select:hover::after {
          opacity: 1;
          bottom: -12px;
          filter: blur(16px);
          background: rgba(0, 0, 0, 0.8);
        }

        /* Focus state - Intense deep press */
        .deep-press-input:focus,
        .deep-press-textarea:focus,
        .deep-press-select:focus {
          background: linear-gradient(145deg, #07070a, #09090e);
          box-shadow: 
            inset 7px 7px 14px rgba(0, 0, 0, 0.95),
            inset -7px -7px 14px rgba(30, 30, 45, 0.25),
            0 0 0 2px rgba(120, 119, 198, 0.2),
            0 8px 20px rgba(0, 0, 0, 0.6);
          transform: translateY(-2px);
          border-color: rgba(120, 119, 198, 0.3);
          outline: none;
        }

        .deep-press-input:focus::after,
        .deep-press-textarea:focus::after,
        .deep-press-select:focus::after {
          opacity: 1;
          bottom: -14px;
          filter: blur(18px);
          background: rgba(0, 0, 0, 0.9);
        }

        /* Textarea specific */
        .deep-press-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.5;
        }

        /* Select dropdown arrow */
        .deep-press-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238888aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 18px;
          background-color: transparent;
          padding-right: 45px;
          cursor: pointer;
        }

        /* Placeholder styling */
        .deep-press-input::placeholder,
        .deep-press-textarea::placeholder,
        .deep-press-select option:first-child {
          color: #666677;
          opacity: 0.8;
        }

        /* Button - Keeping original */
        .contact-submit-btn {
          position: relative;
          height: 56px;
          width: 100%;
          background: linear-gradient(145deg, #1a1a2e, #141424);
          border: none;
          border-radius: 14px;
          color: white;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          box-shadow: 
            0 10px 35px rgba(0, 0, 0, 0.7),
            0 4px 8px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          overflow: hidden;
          cursor: pointer;
        }

        .contact-submit-btn:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 18px 45px rgba(0, 0, 0, 0.8),
            0 6px 12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .contact-submit-btn:active {
          transform: translateY(-1px);
          box-shadow: 
            0 6px 25px rgba(0, 0, 0, 0.6),
            0 2px 4px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.1s ease;
        }

        /* Status message styling */
        .status-success {
          background: rgba(21, 128, 61, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }
        
        .status-error {
          background: rgba(185, 28, 28, 0.15);
          border: 1px solid rgba(248, 113, 113, 0.3);
          color: #fca5a5;
        }

        /* Grid form layout */
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl text-text-primary mb-4">
            Institutional Contact
          </h1>
          <p className="font-body text-text-secondary max-w-4xl">
            Engage with Adonnow Trading Limited regarding mineral procurement,
            verification, logistics coordination, and long-term institutional
            supply relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Inquiry Form */}
          <div>
            <h2 className="font-heading text-2xl text-text-primary mb-8">
              Submit Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-text-secondary">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="deep-press-input w-full"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-text-secondary">
                  Company / Institution <span className="text-red-500">*</span>
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="deep-press-input w-full"
                  placeholder="Company or institution name"
                />
              </div>

              <div className="contact-form-grid">
                <div>
                  <label className="block mb-2 text-text-secondary">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="deep-press-input w-full"
                    placeholder="youremail@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-text-secondary">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="deep-press-input w-full"
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-text-secondary">
                  Mineral Interest <span className="text-red-500">*</span>
                </label>
                <select
                  name="mineralInterest"
                  value={formData.mineralInterest}
                  onChange={handleChange}
                  required
                  className="deep-press-select w-full"
                >
                  <option value="">Select mineral category</option>
                  <option value="gold">Gold</option>
                  <option value="tanzanite">Tanzanite</option>
                  <option value="copper">Copper Cathode</option>
                  <option value="coltan">Coltan</option>
                  <option value="smelting">Industrial Smelting</option>
                  <option value="vault">Vault Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-text-secondary">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="deep-press-textarea w-full"
                  placeholder="Provide details about your inquiry, including quantity requirements, quality specifications, timeline, and any relevant documentation..."
                />
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'status-success' : 'status-error'}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Processing Inquiry...
                    </span>
                  ) : (
                    'Submit Institutional Inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-2xl text-text-primary mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Headquarters
                </h3>
                <p className="text-text-secondary">
                  Adonnow Trading Limited<br />
                  Karen, Nairobi KENYA<br />
                  East Africa Regional Office<br />
                  Dar es Salaam, TANZANIA<br/>
                  Lubumbashi Office, DRC-CONGO
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Operating Hours
                </h3>
                <p className="text-text-secondary">
                  Monday – Friday<br />
                  08:00 – 18:00 EAT<br />
                  Saturday: 09:00 – 13:00 EAT<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Response Standards
                </h3>
                <p className="text-text-secondary">
                  Verified institutional inquiries: Within 2 business hours<br />
                  General inquiries: Within 24 hours<br />
                  All communications are encrypted by default
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Secure Correspondence
                </h3>
                <p className="text-text-secondary">
                  <a href="mailto:inquiry@adonnow.com" className="text-text-highlight hover:text-text-primary transition-colors">
                    inquiry@adonnow.com
                  </a><br />
                  <a href="tel:+254707513272" className="text-text-highlight hover:text-text-primary transition-colors">
                    +254 707 513 272 <br/>
                    +255 772 832 777<br/>
                    +243 987 302 907
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-10 aspect-video overflow-hidden rounded-lg">
              <img
                src="/mineral-images/vault5.png"
                alt="Adonnow Trading Operations"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;