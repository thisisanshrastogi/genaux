"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Lightbulb, Globe, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously advancing our formulations and processes to stay ahead of industry demands.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards of quality in every product we manufacture.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building long-term relationships with our clients based on trust and mutual success.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Committed to environmentally responsible manufacturing and sustainable practices.",
    },
  ];

  const milestones = [
    {
      year: "2005",
      title: "Founded",
      description:
        "Genaux established with a vision to revolutionize textile chemistry.",
    },
    {
      year: "2010",
      title: "Global Expansion",
      description:
        "Expanded operations to serve manufacturers across Asia, Europe, and Americas.",
    },
    {
      year: "2015",
      title: "R&D Center",
      description:
        "Opened state-of-the-art research and development facility for innovation.",
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description:
        "Launched eco-friendly product line and carbon-neutral manufacturing processes.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white text-[#2e3b51]">
      {/* Hero Section */}
      {/* <section className="py-32 md:py-40 text-center bg-[#2e3b51] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Redefining Textile Chemistry
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
            For over two decades, we’ve been crafting sustainable,
            high-performance solutions that power innovation and reliability
            worldwide.
          </p>
        </div>
      </section> */}

      <section className="relative overflow-hidden py-28 mt-10 bg-white text-gray-900">
        {/* Subtle background glow */}

        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none"></div>

        {/* Thread lines
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C200,300 600,500 800,400"
            stroke="rgba(59,130,246,0.2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,350 C250,250 550,450 800,350"
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0,450 C220,350 580,550 800,450"
            stroke="rgba(59,130,246,0.1)"
            strokeWidth="2"
            fill="none"
          />
        </svg> */}
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-medium text-primary/80 mb-3">
            About Us · Our Vision
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Innovating Chemistry for a{" "}
            <span className="text-primary">Cleaner Tomorrow</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            At <strong>Genaux</strong>, we combine science, sustainability, and
            innovation to engineer fine chemicals that enhance performance while
            reducing environmental impact. Our mission is simple — to lead with
            responsibility and create chemistry that makes a difference.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8"
              onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
            >
              Learn More
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-500/20 hover:text-black px-8"
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>

          {/* Optional image section */}
          {/* <div className="mt-16 relative mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/about-hero.jpg"
            alt="Sustainable chemical innovation"
            className="w-full h-[320px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium opacity-90">
            Empowering industries responsibly.
          </p>
        </div> */}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-bold mb-6 text-[#2e3b51]">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2005, Genaux began as a small research initiative and
              has grown into a global force in textile chemical innovation.
              Through a relentless focus on quality, partnership, and
              sustainability, we've built solutions that empower manufacturers
              in over 50 countries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey is defined by constant evolution, pushing boundaries,
              and creating chemistry that doesn’t just meet standards—it sets
              them.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="/apparel-industry.jpg"
              alt="Modern textile manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2e3b51]">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              What drives us forward and keeps our promise of excellence alive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-[#2e3b51] rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#2e3b51]">
              Our Journey
            </h2>
            <p className="text-gray-600">
              Milestones that shaped our path to innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#2e3b51]/30 transform -translate-x-1/2 rounded-full" />

            <div className="space-y-16">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-8 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-xl">
                      <h3 className="text-2xl font-bold text-[#2e3b51] mb-2">
                        {m.year}
                      </h3>
                      <h4 className="text-xl font-semibold mb-2">{m.title}</h4>
                      <p className="text-gray-600">{m.description}</p>
                    </Card>
                  </div>

                  <div className="w-5 h-5 bg-[#2e3b51] rounded-full" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#2e3b51] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            ["500+", "Active Clients"],
            ["50+", "Countries Served"],
            ["20+", "Years Experience"],
            ["100%", "Quality Assured"],
          ].map(([stat, label], i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold mb-2">{stat}</h3>
              <p className="text-sm tracking-wide font-medium opacity-80">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Partner With Genaux
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Let’s work together to bring innovation and sustainability to your
          textile manufacturing process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/95 transition-all duration-300"
          >
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-300  hover:bg-muted hover:text-black transition-all duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      {}
    </div>
  );
}
