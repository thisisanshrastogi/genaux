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
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Decorative background blobs */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 400px at 10% 10%, rgba(99,102,241,0.12), transparent), radial-gradient(500px 350px at 90% 90%, rgba(16,85,129,0.08), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Headline + description */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground mb-4">
                Get in touch — we’re here to help
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Whether you need a quote, technical details, or product
                customization, our team will help you find the right solution
                quickly.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@genaux.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground shadow hover:bg-primary/95 transition"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>

                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-background text-foreground hover:shadow-md transition"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm text-muted-foreground hover:underline transition self-center"
                >
                  Or send a message below
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
                  <strong className="text-foreground">Fast response</strong>
                  <span>— usually within 24h</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full">
                  <strong className="text-foreground">Trusted</strong>
                  <span>— global manufacturers</span>
                </span>
              </div>
            </div>

            {/* Right: Glass card with quick contact summary */}
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/6 border border-border rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Quick Contact
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Choose the fastest way to reach us. You can also leave a
                      detailed message below.
                    </p>
                  </div>
                  {/* <div className="text-xs text-muted-foreground">Mon–Fri</div> */}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <a
                    href="mailto:info@genaux.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-primary/15 to-primary/5 border border-transparent hover:border-primary/20 transition"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Email
                      </div>
                      <div className="text-sm text-muted-foreground">
                        info@genaux.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background border border-border hover:shadow-sm transition"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Phone
                      </div>
                      <div className="text-sm text-muted-foreground">
                        +1 (234) 567-890
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium text-foreground">
                      Business Hours
                    </div>
                    <div>Mon–Fri • 9:00 — 18:00</div>
                  </div>

                  <a
                    href="#contact-form"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/95 transition"
                  >
                    Leave a message
                  </a>
                </div>
              </div>

              {/* Accent ring */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-gradient-to-tr from-primary/8 to-primary/4 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-background/60 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split: Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Form Column */}
            <div id="contact-form" className="space-y-6 ">
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
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
