import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Lightbulb, Globe } from "lucide-react";

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
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10"
        style={{
          background:
            "radial-gradient(600px 400px at 10% 10%, rgba(99,102,241,0.12), transparent), radial-gradient(500px 350px at 90% 90%, rgba(16,10,129,0.08), transparent)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,white_0%,transparent_60%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                About Genaux
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              With over two decades of expertise in{" "}
              <span className="font-semibold text-primary">
                textile chemistry
              </span>
              , Genaux drives innovation and quality for manufacturers worldwide
              — crafting sustainable, high-performance chemical solutions that
              define modern textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2005, Genaux emerged from a simple vision: to create
                textile chemical solutions that combine scientific excellence
                with practical innovation. What started as a small research team
                has grown into a global leader serving hundreds of manufacturers
                across diverse textile sectors.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our journey has been defined by an unwavering commitment to
                quality, continuous innovation, and deep partnerships with our
                clients. We understand the unique challenges of textile
                manufacturing and have dedicated ourselves to solving them with
                precision and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Genaux stands as a trusted partner for manufacturers
                seeking to optimize production processes, enhance product
                quality, and achieve sustainable growth in an increasingly
                competitive market.
              </p>
            </div>

            <figure className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/apparel-industry.jpg"
                alt="Textile factory production line showing machinery and technicians"
                className="w-full h-full object-cover block"
                loading="lazy"
                width={1200}
                height={800}
              />
              <figcaption className="absolute bottom-3 left-3 bg-black/40 text-white text-sm rounded-md px-3 py-1">
                Textile operations — process & quality control
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every decision and product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl focus-within:shadow-outline rounded-lg"
                  role="article"
                  aria-labelledby={`value-title-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/12 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      className="w-6 h-6 text-primary"
                      aria-hidden="true"
                      focusable={false}
                    />
                  </div>
                  <h3
                    id={`value-title-${index}`}
                    className="text-lg font-semibold text-foreground mb-2"
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped Genaux into the industry leader it is
              today.
            </p>
          </div>

          <ol className="space-y-8">
            {milestones.map((milestone, index) => (
              <li
                key={index}
                className="flex gap-6 md:gap-12 items-start"
                aria-label={`${milestone.year} — ${milestone.title}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    <span className="sr-only">Step {index + 1}</span>
                    {index + 1}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="text-sm font-semibold text-primary mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <dt className="text-4xl md:text-5xl font-bold mb-2">500+</dt>
              <dd className="text-primary-foreground/90">Active Clients</dd>
            </div>
            <div>
              <dt className="text-4xl md:text-5xl font-bold mb-2">50+</dt>
              <dd className="text-primary-foreground/90">Countries Served</dd>
            </div>
            <div>
              <dt className="text-4xl md:text-5xl font-bold mb-2">20+</dt>
              <dd className="text-primary-foreground/90">Years Experience</dd>
            </div>
            <div>
              <dt className="text-4xl md:text-5xl font-bold mb-2">100%</dt>
              <dd className="text-primary-foreground/90">Quality Assured</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner With Genaux
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our expertise and tailored solutions can drive success
            for your textile manufacturing operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/95 focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <Link href="/products" aria-label="Explore Products">
                Explore Products
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            >
              <Link href="/contact" aria-label="Contact Us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
