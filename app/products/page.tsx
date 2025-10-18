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

  const productCategories = [
    {
      id: "pre-treatment",
      name: "Pre-treatment Chemicals",
      description: "Prepare fabrics for optimal dyeing and finishing",
      color: "from-blue-500 to-blue-600",
      image: "/pre-treatment-chemicals.jpg",
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
      image: "/dyeing-solutions.jpg",
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
      image: "/finishing-chemicals.jpg",
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
      image: "/specialty-chemicals.jpg",
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
      <section className="bg-gradient-to-br from-slate-900 via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Heading + CTAs */}
            <div className="max-w-xl">
              <span className="inline-block bg-white/6 text-sm px-3 py-1 rounded-full mb-4">
                Fine Chemicals · Textiles
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Our Product Range Ensures Performance & Sustainability
              </h1>

              <p className="text-lg md:text-xl text-accent-foreground/80 mb-6">
                Comprehensive textile chemical solutions for every stage of
                production — from pre-treatment to finishing — engineered for
                efficiency, consistency and environmental responsibility.
              </p>

              <div className="flex gap-3 items-center">
                <Button
                  size="lg"
                  className="bg-accent-foreground hover:bg-accent-foreground/90 text-primary"
                  onClick={() => {
                    // open first category quickly and nudge user toward products
                    setExpandedCategory(productCategories?.[0]?.id ?? null);
                    window.scrollBy({ top: 520, behavior: "smooth" });
                  }}
                >
                  Explore Products
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/6 hover:bg-white/10 text-primary-foreground"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>

            {/* Right: Visual preview grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {productCategories.slice(0, 4).map((c, i) => (
                  <div
                    key={c.id}
                    className="relative h-40 rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                    style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }}
                    aria-hidden
                  >
                    <img
                      src={c.image || "/placeholder.svg"}
                      alt={c.name}
                      className="w-full h-full object-cover brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute left-4 bottom-4 text-white">
                      <h3 className="text-sm font-semibold">{c.name}</h3>
                      <p className="text-xs opacity-80">
                        {c.products.length} products
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category grid: show compact, uniform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.id}
                role="button"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )
                }
                className={`relative rounded-lg overflow-hidden group cursor-pointer h-56 transition-transform bg-card ${
                  expandedCategory === category.id
                    ? "scale-105 shadow-xl ring-2 ring-primary/30"
                    : "hover:scale-105"
                }`}
                aria-expanded={expandedCategory === category.id}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute left-4 bottom-4 text-white">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">
                    {category.products.length} products
                  </p>
                </div>

                <div className="absolute right-3 top-3 bg-white/10 p-2 rounded-md">
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Expanded panel: full-width detailed view for selected category */}
          {expandedCategory && (
            <div className="mt-8 border border-border rounded-lg overflow-hidden bg-muted/20 p-6 animate-fadeIn">
              {(() => {
                const selected = productCategories.find(
                  (c) => c.id === expandedCategory
                )!;
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Left column: image + summary + close */}
                    <div className="md:col-span-1">
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={selected.image || "/placeholder.svg"}
                          alt={selected.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {selected.name}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {selected.description}
                      </p>

                      <div className="mt-6">
                        <Button
                          size="sm"
                          onClick={() => setExpandedCategory(null)}
                          className="bg-white/6 hover:bg-white/10 text-primary-foreground"
                        >
                          Close
                        </Button>
                      </div>
                    </div>

                    {/* Right columns: sub-products */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selected.products.map((product, idx) => (
                        <Card
                          key={idx}
                          className="p-6 hover:shadow-lg transition-shadow"
                        >
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {product.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4">
                            {product.description}
                          </p>

                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-primary uppercase">
                              Key Benefits
                            </p>
                            <ul className="space-y-1">
                              {product.benefits.map((b, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </section>
      {/* Product Features */}
      <section className="relative py-16 md:py-24 bg-muted/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-7xl mx-auto h-full">
            <div className="w-full h-full bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-60 rounded-lg" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/5 text-accent-foreground mb-4">
              Why choose us
            </span> */}

            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Why Our Products Stand Out
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product is engineered with precision and backed by decades
              of industry experience — built for performance, safety and cost
              effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
                  "Dedicated experts available to help you implement solutions and optimise processes.",
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
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 group hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icon removed */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-primary font-medium opacity-90">
                    Learn more →
                  </div>
                </div>
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
