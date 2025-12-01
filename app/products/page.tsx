"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("pre-treatment");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

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
      image: "/post1.png",
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

  return (
    <div className="w-full bg-white text-foreground">
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
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 min-h-dvh">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-2 border-r pr-6 hidden lg:block">
            <div className="sticky top-20 space-y-3">
              <div className="px-3 py-4 rounded-lg">
                <h4 className="text-lg font-semibold">Categories</h4>
              </div>

              <nav className="space-y-1">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition text-sm ${
                      activeCategory === c.id
                        ? "bg-primary/10 font-semibold"
                        : "bg-transparent hover:bg-primary/4"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </nav>

              <div className="mt-4 px-3">
                <Button size="sm" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-10 space-y-8">
            {categories.map((cat) => (
              <section
                key={cat.id}
                className={`${activeCategory === cat.id ? "block" : "hidden"}`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold">{cat.title}</h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      {cat.subtitle}
                    </p>

                    <div className="mt-6 space-y-4">
                      {cat.groups.map((g, gi) => {
                        const key = `${cat.id}-${gi}`;
                        const condensed = cat.id === "dye-printing";

                        return (
                          <Card key={key} className="p-4 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <div className="text-base font-semibold">
                                  {g.name}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {g.items.length} SKUs
                                </div>
                              </div>

                              <Button
                                size="sm"
                                variant="default"
                                className=""
                                onClick={() => toggle(key)}
                                aria-expanded={!!expanded[key]}
                              >
                                {expanded[key] ? "Hide items" : "View items"}
                              </Button>
                            </div>

                            {!expanded[key] && (
                              <div className="mt-3 text-xs text-muted-foreground">
                                {g.items
                                  .slice(0, 3)
                                  .map((it) => it.name)
                                  .join(" · ")}
                                {g.items.length > 3 && (
                                  <span> · +{g.items.length - 3} more</span>
                                )}
                              </div>
                            )}

                            {expanded[key] && (
                              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                {g.items.map((it, ii) => (
                                  <article
                                    key={ii}
                                    className="rounded-lg border bg-surface p-4 flex flex-col gap-3 h-full transition hover:shadow-sm"
                                  >
                                    <header>
                                      <h3 className="font-semibold text-sm leading-tight">
                                        {it.name}
                                      </h3>

                                      {(it.ionicNature || it.chemistry) && (
                                        <div className="text-[11px] text-muted-foreground mt-1">
                                          {it.ionicNature
                                            ? `${it.ionicNature}`
                                            : ""}
                                          {it.ionicNature && it.chemistry
                                            ? " • "
                                            : ""}
                                          {it.chemistry
                                            ? `${it.chemistry}`
                                            : ""}
                                        </div>
                                      )}

                                      {/* {it.desc && (
                                        <p className="text-xs text-muted-foreground mt-2">
                                          {it.desc}
                                        </p>
                                      )} */}
                                    </header>

                                    {/* <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                      <div>
                                        <dt className="text-muted-foreground">
                                          Pack
                                        </dt>
                                        <dd>{it.pack ?? "25kg / 200L"}</dd>
                                      </div>

                                      <div>
                                        <dt className="text-muted-foreground">
                                          pH
                                        </dt>
                                        <dd>{it.ph ?? "—"}</dd>
                                      </div>

                                      <div>
                                        <dt className="text-muted-foreground">
                                          Density
                                        </dt>
                                        <dd>{it.density ?? "—"}</dd>
                                      </div>

                                      <div>
                                        <dt className="text-muted-foreground">
                                          Solubility
                                        </dt>
                                        <dd>{it.solubility ?? "—"}</dd>
                                      </div>

                                      <div className="col-span-2">
                                        <dt className="text-muted-foreground">
                                          Application
                                        </dt>
                                        <dd className="text-xs">
                                          {it.application ?? "—"}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-muted-foreground">
                                          MSDS
                                        </dt>
                                        <dd>
                                          {it.msdsUrl ? (
                                            <a
                                              href={it.msdsUrl}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="underline text-xs"
                                            >
                                              Download
                                            </a>
                                          ) : (
                                            "—"
                                          )}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-muted-foreground">
                                          Notes
                                        </dt>
                                        <dd>{it.notes ?? "—"}</dd>
                                      </div>
                                    </dl> */}

                                    {it.properties &&
                                      it.properties.length > 0 && (
                                        <ul className="mt-2 text-xs list-disc pl-4 text-muted-foreground">
                                          {it.properties.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                          ))}
                                        </ul>
                                      )}
                                  </article>
                                ))}
                              </div>
                            )}

                            {condensed && !expanded[key] && (
                              <div className="mt-3 text-xs text-muted-foreground">
                                Click “View items” to see available SKUs.
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex gap-3">{/* future CTAs */}</div>
                  </div>

                  {/* Category banner / highlights */}
                  <aside className="w-full lg:w-96">
                    <div className="rounded-xl overflow-hidden shadow-md ">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-56 md:h-72 object-cover"
                      />
                      <div className="p-4 bg-white">
                        <div className="text-sm font-medium">Highlights</div>
                        <ul className="mt-2 text-sm space-y-1 text-muted-foreground">
                          <li>Application-focused formulations</li>
                          <li>Process-optimised performance</li>
                          <li>Eco-conscious options</li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            ))}
          </main>
        </div>
      </section>
    </div>
  );
}
