"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@genaux.com",
      link: "mailto:info@genaux.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Industrial Ave, Tech City, TC 12345",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    // prevent horizontal scroll from absolute accents
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background">
        {/* Decorative background */}
        {/* <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 600px at 20% 20%, rgba(99,102,241,0.08), transparent), radial-gradient(600px 500px at 80% 80%, rgba(16,85,129,0.06), transparent)",
          }}
        /> */}

        {/* Animated orbs */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm">
                    Contact Us
                  </span>
                </div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground tracking-tight">
                  Get in touch — we're here to help
                </h1>
                <p className="text-lg md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Whether you need a quote, technical details, or product
                  customization, our team will help you find the right solution
                  quickly.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="mailto:info@genaux.com"
                  className="group inline-flex  items-center gap-2 px-4 py-3.5 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-medium"
                >
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Email Us
                </a>

                <a
                  href="tel:+1234567890"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-border bg-background text-foreground hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all duration-300 font-medium"
                >
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Call Us
                </a>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-sm">Or send a message below</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Fast response
                  </span>
                  <span className="text-sm text-muted-foreground">
                    — within 24h
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm px-4 py-2.5 rounded-full border border-border/50">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-foreground">
                    Trusted
                  </span>
                  <span className="text-sm text-muted-foreground">
                    — globally
                  </span>
                </div>
              </div>
            </div>

            {/* Right Glass Card */}
            <div className="relative mt-5">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-shadow duration-500">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Quick Contact
                    </h3>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      Choose the fastest way to reach us. You can also leave a
                      detailed message below.
                    </p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:info@genaux.com"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground mb-0.5">
                        Email
                      </div>
                      <div className="text-sm text-muted-foreground">
                        info@genaux.com
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-background/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground mb-0.5">
                        Phone
                      </div>
                      <div className="text-sm text-muted-foreground">
                        +1 (234) 567-890
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="flex   items-center justify-between pt-6 border-t border-border/50">
                  <div className="space-y-1 hidden md:flex md:flex-col ">
                    <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Business Hours
                    </div>
                    <div className="text-sm text-muted-foreground ">
                      Mon–Fri • 9:00 - 18:00
                    </div>
                  </div>

                  <a
                    href="#contact-form"
                    className="group inline-flex w-full md:w-fit items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Leave a message
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              </div>

              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/*form section*/}
      <section
        id="contact-form"
        className="py-16 md:py-24  bg-gradient-to-b from-background/60 via-background to-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split: Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form Column */}
            <div className="space-y-6 ">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Quick responses & tailored solutions — tell us how we can
                    help.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-background/60 to-background/40 rounded-2xl p-6 border border-border shadow-sm">
                {submitted ? (
                  <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
                    <p className="text-green-800 font-semibold mb-1">
                      Thank you — message received!
                    </p>
                    <p className="text-sm text-green-700">
                      We’ll reply within one business day. For urgent issues
                      call us.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    aria-label="Contact form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                          placeholder="Company name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                          placeholder="+1 (555) 555-5555"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                      >
                        <option value="">Choose a subject</option>
                        <option value="product-inquiry">Product inquiry</option>
                        <option value="technical-support">
                          Technical support
                        </option>
                        <option value="bulk-order">Bulk order</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/95"
                      >
                        Send message
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      By sending this message you consent to us storing your
                      details to respond. See our privacy policy for more.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Map Column */}
            <div className="space-y-6 flex flex-col  h-full justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Our location
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visit our office or request an onsite consultation.
                  </p>
                </div>
                <div className="hidden sm:flex gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-muted/40 text-sm">
                    <MapPin className="w-4 h-4" /> 123 Industrial Ave
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="h-72 sm:h-96 bg-muted flex items-center justify-center">
                  <iframe
                    title="Genaux location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4103.119369409639!2d80.31357465928694!3d26.456633139644826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4784ceb8ffb7%3A0xfafd611a53b9935d!2sMDDTI%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1761830185150!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Quick response
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We generally reply within one business day. For urgent
                      requests call us directly.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div>
                        <strong className="block text-foreground">Sales</strong>
                        <a
                          href="mailto:sales@genaux.com"
                          className="text-muted-foreground hover:text-primary"
                        >
                          sales@genaux.com
                        </a>
                      </div>
                      <div>
                        <strong className="block text-foreground">
                          Support
                        </strong>
                        <a
                          href="mailto:support@genaux.com"
                          className="text-muted-foreground hover:text-primary"
                        >
                          support@genaux.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center relative overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
              >
                <div className="absolute -left-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-tr from-primary/6 to-primary/3 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    {info.value}
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-16 md:py-24 bg-background"> */}
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What is the minimum order quantity?",
                answer:
                  "Our minimum order quantity varies by product. Please contact our sales team for specific details about your requirements.",
              },
              {
                question: "Do you offer technical support?",
                answer:
                  "Yes, we provide comprehensive technical support to all our clients. Our experts are available to assist with product selection, application, and troubleshooting.",
              },
              {
                question: "What are your delivery times?",
                answer:
                  "Standard delivery typically takes 5-10 business days. We also offer expedited shipping options for urgent orders.",
              },
              {
                question: "Can you customize products for specific needs?",
                answer:
                  "Absolutely. We specialize in developing custom formulations tailored to your unique manufacturing requirements. Contact us to discuss your needs.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
