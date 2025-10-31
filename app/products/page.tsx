"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "pre-treatment"
  );

  const features = [
    {
      title: "Superior Quality",
      description:
        "Rigorous testing and quality control ensure consistent excellence in every batch.",
    },
    {
      title: "Cost Effective",
      description:
        "Optimized formulations deliver maximum value without compromising performance.",
    },
    {
      title: "Environmentally Responsible",
      description:
        "Sustainable manufacturing practices and eco-friendly compositions.",
    },
    {
      title: "Technical Support",
      description:
        "Dedicated experts available to help you implement and optimise processes.",
    },
    {
      title: "Customization",
      description:
        "Tailored formulations designed to meet your specific production and performance needs.",
    },
    {
      title: "Global Standards",
      description:
        "Compliance with international regulations and certifications for reliable supply.",
    },
  ];

  const productCategories = [
    {
      id: "pre-treatment",
      name: "Pre-treatment Chemicals",
      description: "Prepare fabrics for optimal dyeing and finishing",
      color: "from-blue-500 to-blue-600",
      image: "/pre2.png",
      products: [
        {
          name: "Scouring Agents",
          description:
            "Remove oils, waxes, and impurities from raw fabrics with precision.",
          benefits: ["High efficiency", "Eco-friendly", "Cost-effective"],
        },
        {
          name: "Bleaching Solutions",
          description:
            "Achieve bright, clean fabrics ready for dyeing and printing.",
          benefits: [
            "Uniform whiteness",
            "Fiber protection",
            "Consistent results",
          ],
        },
        {
          name: "Desizing Compounds",
          description:
            "Efficiently remove sizing agents from woven and knitted fabrics.",
          benefits: [
            "Complete removal",
            "Gentle on fibers",
            "Quick processing",
          ],
        },
      ],
    },
    {
      id: "dyeing",
      name: "Dyeing Solutions",
      description:
        "Achieve vibrant, consistent colors with advanced formulations",
      color: "from-teal-500 to-teal-600",
      image: "/dye1.png",
      products: [
        {
          name: "Reactive Dyes",
          description:
            "Bright, permanent colors for cotton and cellulose fibers.",
          benefits: ["Excellent fastness", "Wide color range", "High yield"],
        },
        {
          name: "Acid Dyes",
          description:
            "Superior color development for protein fibers and synthetics.",
          benefits: ["Vibrant shades", "Quick absorption", "Level dyeing"],
        },
        {
          name: "Disperse Dyes",
          description:
            "Specialized solutions for polyester and synthetic fabrics.",
          benefits: [
            "Deep colors",
            "High temperature stability",
            "Uniform coverage",
          ],
        },
      ],
    },
    {
      id: "finishing",
      name: "Finishing Chemicals",
      description: "Enhance fabric properties and protective treatments",
      color: "from-orange-500 to-orange-600",
      image: "/fin1.png",
      products: [
        {
          name: "Softening Agents",
          description: "Improve fabric hand feel and comfort properties.",
          benefits: ["Enhanced softness", "Improved drape", "Durability"],
        },
        {
          name: "Water Repellents",
          description: "Provide water and stain resistance to textiles.",
          benefits: ["Long-lasting protection", "Breathability", "Easy care"],
        },
        {
          name: "Flame Retardants",
          description: "Meet safety standards with advanced flame protection.",
          benefits: [
            "Compliance certified",
            "Durable finish",
            "Minimal impact",
          ],
        },
      ],
    },
    {
      id: "specialty",
      name: "Specialty Chemicals",
      description: "Custom solutions for unique textile applications",
      color: "from-slate-600 to-slate-700",
      image: "/spec1.png",
      products: [
        {
          name: "Anti-microbial Treatments",
          description: "Protect fabrics from bacterial growth and odors.",
          benefits: ["Long-lasting", "Safe for skin", "Odor control"],
        },
        {
          name: "UV Protection",
          description: "Shield fabrics from harmful ultraviolet radiation.",
          benefits: ["Color preservation", "Durability", "Health protection"],
        },
        {
          name: "Wrinkle Resistance",
          description: "Reduce wrinkles and improve fabric recovery.",
          benefits: [
            "Easy maintenance",
            "Professional appearance",
            "Longevity",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28  bg-white text-gray-900">
        {/* Subtle background glow */}

        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 mt-10 text-center">
          <span className="inline-block text-sm font-medium text-primary/80 mb-3">
            Fine Chemicals · Textiles
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Performance-Driven Chemicals for a{" "}
            <span className="text-primary">Sustainable Future</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We craft innovative, eco-efficient solutions that empower textile
            manufacturers to achieve consistency, performance, and
            sustainability — without compromise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 hover:cursor-pointer px-8"
              onClick={() => {
                setExpandedCategory(productCategories?.[0]?.id ?? null);
                const el = document.getElementById("products");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Products
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-100 text-black hover:text-black px-8"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Optional image */}
          {/* <div className="mt-16 relative mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/hero-textile.jpg"
              alt="Textile production"
              className="w-full h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium opacity-90">
              Innovation in every thread.
            </p>
          </div> */}
        </div>
      </section>

      {/* Products Section */}
      <section
        className="py-16 md:py-24 bg-white relative overflow-hidden"
        id="products"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32 relative z-10">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
            >
              {/* Image side */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl md:mt-24">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[300px] md:h-[550px]  object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40  to-transparent" />

                  {/* Floating category label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-3">
                      <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                        Category
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/80">
                      {category.products.length} products available
                    </p>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {/* Section number and title */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {category.name}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {category.products.map((product, i) => (
                    <Card
                      key={i}
                      className="group p-6 border-2 border-border/50 hover:border-primary/40 bg-card hover:bg-card/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-sm">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-snug">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-border/50">
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <svg
                                className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Our Products Stand Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every product is engineered with precision and backed by decades
              of industry experience — built for performance, safety and
              reliability.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative p-8 rounded-3xl hover:rounded-t-none border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Our technical team can develop specialized formulations tailored to
            your unique requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-primary"
          >
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
