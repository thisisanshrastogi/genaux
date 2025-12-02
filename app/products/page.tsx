"use client";

"use client";

import React, { useRef, useState, useEffect, Suspense } from "react"; // Added useEffect and Suspense
import { useSearchParams } from "next/navigation"; // Import this
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

// 1. Create a Wrapper Component
// (Next.js requires components using useSearchParams to be wrapped in Suspense boundary)
export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("pre-treatment");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const searchParams = useSearchParams();
  // 1. Create a reference to the top of the product section
  const topRef = useRef<HTMLDivElement>(null);

  // 2. Custom handler to switch category AND scroll up
  const handleCategoryChange = (id: React.SetStateAction<string>) => {
    setActiveCategory(id);

    // Check if we are currently scrolled below the top of the section
    // If so, scroll back up to the top of the product area
    if (topRef.current) {
      // We subtract 100px (approx) to account for any sticky headers you might have
      const yOffset = -50;
      const element = topRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggle = (k: string) => setExpanded((s) => ({ ...s, [k]: !s[k] }));

  const categories = [
    {
      id: "pre-treatment",
      title: "Pre-Treatment Chemicals",
      subtitle:
        "Desizing, scouring and bleaching solutions that prepare substrates for uniform dyeing and printing.",
      image: "/pre2.png",
      groups: [
        {
          name: "Wetting Agent",
          items: [
            {
              name: "Genwet LFWA",
              ionicNature: "Anionic",
              chemistry: "Sulphoxylate fatty alcohol",
              desc: "Low foam wetting agent. Highly effective in strong alkali bath. Stable in oxidative, reductive and high temperature conditions.",
              properties: [
                "Low foam",
                "Effective in strong alkali",
                "Stable under oxidative/reductive/high temp",
              ],
              pack: "25 kg / 200 L",
              ph: "7–9",
              density: "≈1.02 g/cm³",
              solubility: "Water soluble",
              application: "Wetting prior to scouring/bleaching",
            },
            {
              name: "Genwet LFWA Conc",
              ionicNature: "Non Ionic",
              chemistry: "Ethoxylated fatty alcohol",
              desc: "Concentrated low-foam wetting agent. High performance and cost-effective, low foaming suitable for high-pressure machines.",
              properties: [
                "Concentrated",
                "Low foaming (suitable for high-pressure machinery)",
                "Good emulsification for oils/waxes",
              ],
              pack: "25 kg",
              ph: "7–9",
              density: "≈1.05 g/cm³",
              solubility: "Water soluble",
              application: "High-pressure wetting",
            },
            {
              name: "Genwet IWA",
              ionicNature: "Non Ionic",
              chemistry: "Ethoxylated fatty alcohol",
              desc: "Instant wetting agent — effective detergent for scouring and kier boiling of cotton textiles; enhances scouring.",
              properties: [
                "Instant wetting",
                "Enhances scouring",
                "Good detergent action",
              ],
              pack: "25 kg",
              ph: "7–9",
              solubility: "Water soluble",
              application: "Scouring and kier boiling",
            },
          ],
        },

        {
          name: "Anti Creasing Agent",
          items: [
            {
              name: "Genlube ACA",
              ionicNature: "Anionic",
              chemistry: "Phosphate ester",
              desc: "Special emulsifier & anti-crease agent that prevents spots and creases on finished fabrics.",
              properties: [
                "Prevents spot stains & creases",
                "Wide range applicability",
              ],
              pack: "25 kg",
              application: "Finishing / pre-treatment",
            },
            {
              name: "Genlube ALB",
              ionicNature: "Non Ionic",
              chemistry: "Polyacrylamide derivative",
              desc: "Anti-crease lubricant to reduce friction in pre-treatment and dyebath.",
              properties: ["Reduces friction"],
              pack: "25 kg",
              application: "Pre-treatment & dyebath lubrication",
            },
          ],
        },

        {
          name: "Sequestring Agent",
          items: [
            {
              name: "Genquest DMI",
              ionicNature: "Anionic",
              chemistry: "Phosphonate derivative",
              desc: "Metal ion chelating agent — prevents tendering of cellulose by chelating heavy metal ions; stabilises peroxide in exhaust applications.",
              properties: ["Chelates heavy metals", "Peroxide stabiliser"],
              pack: "25 kg",
              application: "Peroxide baths / exhaust applications",
            },
            {
              name: "Genquest DBC",
              ionicNature: "Anionic",
              chemistry: "Polyacrylic acid derivative",
              desc: "Protective colloidal agent — efficiently removes grease, oil and graphite stains from polyester; stable at high alkali concentrations.",
              properties: ["Good stain removal", "Stable in alkali"],
              pack: "25 kg",
              application: "De-oiling / stain removal on polyester",
            },
          ],
        },

        {
          name: "Stabilizing Agent",
          items: [
            {
              name: "Genstab SSCA",
              ionicNature: "Anionic",
              chemistry: "Mixture of inorganic magnesium salts",
              desc: "Stabilizing cum chelating agent — silicate-free; homogeneous peroxide release, prevents chromatism during bleaching.",
              properties: [
                "Silicate free",
                "Homogeneous peroxide release",
                "Prevents chromatism",
              ],
              pack: "25 kg",
              application: "Bleaching stabiliser",
            },
          ],
        },

        {
          name: "Deoiling Agent",
          items: [
            {
              name: "Generyl XNI",
              ionicNature: "Non Ionic",
              chemistry: "Fatty alcohol polyoxyethylene ether",
              desc: "Scouring & stain removing agent — removes grease, oil and graphite; stable in high alkali concentrations.",
              properties: ["Excellent stain removal", "Alkali-stable"],
              pack: "25 kg",
              application: "De-oiling and scouring",
            },
            {
              name: "Generyl LSD",
              ionicNature: "Non Ionic",
              chemistry: "Aliphatic ester mixture",
              desc: "Solvent with surfactant — specialty solvent-based stain remover; excellent cleansing for blends containing Lycra.",
              properties: [
                "Solvent-based stain removal",
                "Good for Lycra blends",
              ],
              pack: "25 kg",
              application: "Stain removal on blended fabrics",
            },
          ],
        },
      ],
    },

    {
      id: "dye-printing",
      title: "Dyeing & Printing Auxiliaries",
      subtitle:
        "Dispersing agents, levelling agents and thickeners for vibrant, long-lasting color effects.",
      image: "/dye1.png",
      groups: [
        {
          name: "Core Alkali Neutralizer",
          items: [
            {
              name: "Genex CAN",
              ionicNature: "Non Ionic",
              chemistry: "Mixture of organic acids",
              desc: "Acid pH controller with core alkali neutralizer — acts as buffer and maintains pH during bio-polishing.",
              properties: [
                "Buffers pH",
                "Maintains consistent pH during bio-polish",
              ],
              pack: "25 kg",
              application: "Bio-polishing / pH control",
            },
          ],
        },

        {
          name: "Cotton Levelling Agent",
          items: [
            {
              name: "Gendye RL",
              ionicNature: "Anionic",
              chemistry: "Sulfated surfactant mixture",
              desc: "Dispersion base reactive levelling agent — good chelating, dispersing and solubilization; improves dyeing levelness.",
              properties: [
                "Chelating",
                "Dispersing",
                "Prevents top-to-bottom shade variation",
              ],
              pack: "25 kg",
              application: "Reactive dye levelling on cotton",
            },
            {
              name: "Gendye RL-B",
              ionicNature: "Anionic",
              chemistry: "Mixtures of polyacrylic acid",
              desc: "Buffering dispersion base levelling agent — chelates metal ions and improves solubility of certain dyes.",
              properties: ["Buffering", "Chelates metal ions"],
              pack: "25 kg",
              application: "Reactive dyeing buffers",
            },
          ],
        },

        {
          name: "Polyester Dispersing Agent",
          items: [
            {
              name: "Gensyn CWS",
              ionicNature: "Anionic",
              chemistry: "Sodium naphthaleneformaldehyde",
              desc: "Dispersing powder suitable for large or hard-to-disperse dyestuffs; excellent dispersion property.",
              properties: ["Good dispersion", "Prevents agglomeration"],
              pack: "25 kg",
              application: "Polyester dye dispersing",
            },
            {
              name: "Gensyn DAN",
              ionicNature: "Anionic",
              chemistry: "Naphthalene sulphonate condensate",
              desc: "Sulphonated dispersing agent — maintains dispersing efficiency at high temperatures; good for polyester oligomers.",
              properties: ["Thermally stable dispersion", "Good for oligomers"],
              pack: "25 kg",
              application: "Polyester dye baths",
            },
          ],
        },

        {
          name: "Polyester Levelling Agent",
          items: [
            {
              name: "Gensyn LEV",
              ionicNature: "Non Ionic",
              chemistry: "Castor oil derivative",
              desc: "Retarding base polyester levelling agent — excellent re-levelling of faulty dyeings; improves dye penetration.",
              properties: ["Retarding action", "Improves penetration"],
              pack: "25 kg",
              application: "Polyester leveling",
            },
            {
              name: "Gensyn MLEV",
              ionicNature: "Anionic",
              chemistry: "Polyethylene glycol fatty ester",
              desc: "Migration base polyester levelling agent — improves 'right-first-time' dyeing and productivity; enables shorter cycle times.",
              properties: ["Migration action", "Improves productivity"],
              pack: "25 kg",
              application: "Polyester levelling (migration type)",
            },
          ],
        },

        {
          name: "Reactive Washing Agent",
          items: [
            {
              name: "Genwash AD",
              ionicNature: "Anionic",
              chemistry: "Polyacrylic acid sodium salt",
              desc: "Effective reactive soaping agent — hard water resistant, chelating, dispersing and soaping capability; disperses hydrolysed dyestuffs.",
              properties: ["Hard water resistant", "Chelating and dispersing"],
              pack: "25 kg",
              application: "Reactive dye washing",
            },
            {
              name: "Genwash AWO",
              ionicNature: "Anionic",
              chemistry: "Polyacrylic acid sodium salt",
              desc: "Neutralisation and washing off agent — combines dye bath neutraliser and washing off agent; powerful dispersant for unfixed/hydrolysed dyes.",
              properties: [
                "Neutralisation + washing off",
                "Powerful dispersant",
              ],
              pack: "25 kg",
              application: "Washing off after reactive dyeing",
            },
            {
              name: "Genwash MAGIC",
              ionicNature: "Anionic",
              chemistry: "Special detergent",
              desc: "Decolouring agent for soaping treatment — decomposes unfixed hydrolysed dye, improving wet color fastness.",
              properties: ["Decolouring", "Improves wet fastness"],
              pack: "25 kg",
              application: "Decolouring during soaping",
            },
          ],
        },

        {
          name: "Fixing Agent",
          items: [
            {
              name: "Genfix FF",
              ionicNature: "Cationic",
              chemistry: "Quaternary amine polymer",
              desc: "Formaldehyde-free fixing agent suitable for reactive dyes; improves colorfastness to washing & water with minimal shade change.",
              properties: ["Formaldehyde-free", "Improves wash fastness"],
              pack: "25 kg",
              application: "Fixing reactive dyes",
            },
            {
              name: "Genfix FF Conc.",
              ionicNature: "Cationic",
              chemistry: "Quaternary amine polymer (concentrated)",
              desc: "Concentrated fixing agent — improves wet and wash fastness properties without affecting light fastness.",
              properties: ["Concentrated", "Improves wet/wash fastness"],
              pack: "25 kg",
              application: "High strength fixing",
            },
          ],
        },
      ],
    },

    {
      id: "post-treatment",
      title: "Post Treatment Chemicals",
      subtitle:
        "Washing-off and fixing agents to enhance color fastness and handle after dyeing or printing.",
      image: "/fin1.png",
      groups: [
        {
          name: "Reducing Agent",
          items: [
            {
              name: "Genoxe RCP",
              ionicNature: "Non Ionic",
              chemistry: "Sodium formaldehyde sulphoxylate",
              desc: "Acidic reducing agent — improves color fastness of microfiber; can be used in the same dyebath after dyeing.",
              properties: [
                "Improves color fastness",
                "Can be used post-dyeing",
              ],
              pack: "25 kg",
              application: "Acidic reduction clearing",
            },
            {
              name: "Genoxe RCL",
              ionicNature: "Non Ionic",
              chemistry: "Glucose-based polymer",
              desc: "Liquid hydro replacement — replaces hydros in alkaline reduction clearing; does not emit bad odour during application or storage.",
              properties: ["Hydro replacement", "Low odour"],
              pack: "25 kg",
              application: "Reduction clearing",
            },
          ],
        },
      ],
    },

    {
      id: "finishing",
      title: "Finishing Chemicals",
      subtitle:
        "Softeners, anti-static agents, wrinkle resistance and moisture management finishes — consumer-ready improvements.",
      image: "/fin1.png",
      groups: [
        {
          name: "Silicone Softeners",
          items: [
            {
              name: "Gensil SLOK",
              ionicNature: "Cationic",
              chemistry: "Hydrophobic organo-modified siloxane",
              desc: "Block silicone with body & surface feel — excellent shear stability; doesn't impact shade; ideal for cotton & cotton-lycra.",
              properties: ["Shear stable", "Maintains shade", "Good hand"],
              pack: "25 kg",
              application: "Softening for cotton/lycra blends",
            },
            {
              name: "Gensil PEACH",
              ionicNature: "Cationic",
              chemistry: "Hydrophobic organo-modified siloxane",
              desc: "Block silicone with softness and limpness — minimal effect on shade; mainly for polyester substrates.",
              properties: ["Softness", "Minimal shading effect"],
              pack: "25 kg",
              application: "Polyester softening",
            },
            {
              name: "Gensil LIGHT",
              ionicNature: "Cationic",
              chemistry: "Hydrophilic organo-modified siloxane",
              desc: "Block silicone with instant hydrophilicity — excellent softness, low chlorine fade; suitable for towels & active wear.",
              properties: ["Hydrophilic", "Softness", "Chlorine resistant"],
              pack: "25 kg",
              application: "Towels and activewear",
            },
            {
              name: "Gnesil STAB",
              ionicNature: "Cationic",
              chemistry: "Hydrophobic organo-modified siloxane",
              desc: "Block silicone with bounce effect — excellent bulkiness in polyester.",
              properties: ["Bulkiness", "Bounce effect"],
              pack: "25 kg",
              application: "Bulk finish for polyester",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    // Check if URL has ?category=xyz
    const categoryParam = searchParams.get("category");

    if (categoryParam) {
      // Update state
      setActiveCategory(categoryParam);

      // Optional: Scroll to the product section automatically
      if (topRef.current) {
        setTimeout(() => {
          const yOffset = -5;
          const element = topRef.current;
          if (element) {
            const y =
              element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100); // Small delay to ensure render
      }
    }
  }, [searchParams]);

  return (
    <div className="w-full bg-slate-50/50 text-foreground relative selection:bg-primary/20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* HERO */}
      <section className="relative py-28 bg-white text-gray-900 min-h-dvh mt-10">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-medium text-primary/80 mb-3">
            Fine Chemicals · Textiles
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Comprehensive Chemical Solutions for the{" "}
            <span className="text-primary">Textile Industry</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Innovative, eco-efficient formulations that deliver consistency,
            performance and sustainability.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-white px-8"
              onClick={() => {
                setActiveCategory(categories[0].id);
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Products
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 hover:bg-muted hover:text-black"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      {/* new Products */}
      <section id="products" ref={topRef} className="py-12 lg:py-20 min-h-dvh ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* --- Sidebar Navigation (Desktop) --- */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4 px-2">
                  Product Lines
                </h4>
                <nav className="space-y-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleCategoryChange(c.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-between group ${
                        activeCategory === c.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {c.title}
                      {activeCategory === c.id && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4 bg-accent-foreground/10 rounded-xl border border-muted/80">
                <h5 className="font-medium text-sm mb-2">
                  Need Custom Formulations?
                </h5>
                <p className="text-xs text-muted-foreground mb-3">
                  We specialize in tailoring chemical solutions to your specific
                  machinery.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-background border-primary/30 hover:bg-muted/10 hover:text-black"
                  asChild
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* --- Mobile Navigation (Sticky Top) --- */}
          <div className="lg:hidden col-span-1 sticky top-[60px] z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 border-b -mx-4 px-4 overflow-x-auto no-scrollbar">
            <div className="flex space-x-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === c.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* --- Main Content Area --- */}
          <main className="lg:col-span-9 xl:col-span-10 space-y-10 mb-28">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                  activeCategory === cat.id ? "block" : "hidden"
                }`}
              >
                {/* Category Hero Header */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm border group">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-gray-200 mt-2 text-sm md:text-base line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Product Groups List */}
                <div className="grid gap-4">
                  {cat.groups.map((g, gi) => {
                    const key = `${cat.id}-${gi}`;
                    const isExpanded = expanded[key];

                    return (
                      <Card
                        key={key}
                        className={`overflow-hidden p-0 transition-all duration-300 border-muted/30 group ${
                          isExpanded
                            ? "ring-1 ring-primary/20 shadow-md"
                            : "shadow-sm hover:shadow-md hover:border-primary/30 group"
                        }`}
                      >
                        {/* Group Header (Clickable) */}
                        <div
                          onClick={() => toggle(key)}
                          className="p-5 flex  items-center justify-between cursor-pointer select-none bg-card  transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${
                                isExpanded
                                  ? "bg-primary text-white shadow-lg shadow-primary/30 "
                                  : "bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
                              }`}
                            >
                              <FlaskConical className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-foreground">
                                {g.name}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {isExpanded
                                  ? "Showing all available formulations"
                                  : `${
                                      g.items.length
                                    } variants available • ${g.items
                                      .slice(0, 3)
                                      .map((i) => i.name)
                                      .join(", ")}${
                                      g.items.length > 3 ? "..." : ""
                                    }`}
                              </p>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 text-muted-foreground"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        </div>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div className="px-6 pb-6 pt-2 bg-gradient-to-b from-transparent to-slate-50/50 animate-in slide-in-from-top-2 duration-300">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                              {g.items.map((it, ii) => (
                                <div
                                  key={ii}
                                  className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                                >
                                  <div>
                                    <header className="mb-4">
                                      <h4 className="font-bold text-base text-slate-900 group-hover:text-primary transition-colors">
                                        {it.name}
                                      </h4>
                                    </header>

                                    {/* Technical Badges - Modernized */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                      {it.ionicNature && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-medium bg-accent-foreground/10 text-primary border border-primary/50">
                                          {it.ionicNature}
                                        </span>
                                      )}
                                      {it.chemistry && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-medium bg-accent-foreground/10 text-primary border border-primary/50">
                                          {it.chemistry}
                                        </span>
                                      )}
                                    </div>

                                    {/* Properties - Bullet points */}
                                    {it.properties &&
                                      it.properties.length > 0 && (
                                        <ul className="space-y-2 mb-4">
                                          {it.properties
                                            .slice(0, 3)
                                            .map((p, idx) => (
                                              <li
                                                key={idx}
                                                className="flex items-start gap-2.5 text-xs text-slate-500"
                                              >
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.6)]" />
                                                <span className="leading-relaxed font-medium">
                                                  {p}
                                                </span>
                                              </li>
                                            ))}
                                        </ul>
                                      )}
                                  </div>

                                  {/* Action Footer */}
                                  {/* <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-mono text-slate-400">
                                      25kg / 200L
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                      <ArrowRight className="w-3 h-3" />
                                    </div>
                                  </div> */}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </div>
  );
}
