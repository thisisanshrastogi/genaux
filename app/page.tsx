import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Beaker, Zap, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Beaker,
      title: "Advanced Chemistry",
      description:
        "Cutting-edge formulations designed for optimal textile performance and durability.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Engineered solutions that deliver superior results across all textile applications.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Rigorous testing and quality control ensure consistent excellence in every batch.",
    },
    {
      icon: TrendingUp,
      title: "Industry Leading",
      description:
        "Trusted by manufacturers worldwide for innovation and reliability.",
    },
  ];

  const productCategories = [
    {
      name: "Pre-treatment Chemicals",
      description:
        "Prepare fabrics for optimal dyeing and finishing with our specialized pre-treatment solutions.",
      color: "from-blue-500 to-blue-600",
      image: "/pre-treatment-chemicals.jpg",
    },
    {
      name: "Dyeing Solutions",
      description:
        "Achieve vibrant, consistent colors with our advanced dyeing chemical formulations.",
      color: "from-teal-500 to-teal-600",
      image: "/dyeing-solutions.jpg",
    },
    {
      name: "Finishing Chemicals",
      description:
        "Enhance fabric properties with our premium finishing and protective chemical treatments.",
      color: "from-orange-500 to-orange-600",
      image: "/finishing-chemicals.jpg",
    },
  ];

  const industries = [
    { name: "Apparel", image: "/apparel-industry.jpg" },
    { name: "Home Textiles", image: "/home-textiles-industry.jpg" },
    { name: "Technical Textiles", image: "/technical-textiles-industry.jpg" },
    { name: "Automotive", image: "/automotive-industry.jpg" },
    { name: "Industrial Fabrics", image: "/industrial-fabrics-industry.jpg" },
    { name: "Specialty Textiles", image: "/specialty-textiles-industry.jpg" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Soft glow accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-4rem] right-[-4rem] w-[28rem] h-[28rem] bg-accent/70 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-4rem] w-[28rem] h-[28rem] bg-accent/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                Tailored for Every Industry.
                <br className="hidden sm:block" />
                <span className="text-accent-foreground">
                  {" "}
                  Engineered for Performance.
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 text-balance">
                Premium textile chemical solutions that drive innovation,
                quality, and sustainability across global manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent-foreground hover:bg-accent-foreground/90 text-black shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            {/* Right Image — enhanced */}
            <div className="hidden md:block relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-transparent to-transparent rounded-2xl blur-2xl" />

              {/* Image with gradient overlay */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/textile-manufacturing-chemical-laboratory.jpg"
                  alt="Textile chemical manufacturing"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating caption or accent */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-sm px-4 py-2 rounded-full text-white border border-white/20">
                Advanced Textile Chemistry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Our Product Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive solutions for every stage of textile production.
              </p>
            </div>

            <div className="flex-shrink-0 text-center md:text-right">
              <Button
                asChild
                size="lg"
                className="bg-accent-foreground hover:bg-accent-foreground/95 text-black rounded-full px-6 py-3 shadow-lg"
              >
                <Link href="/products">Explore All Products</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const slug = category.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
              const src =
                category.image || `/products/${slug}.jpg` || "/placeholder.svg";

              return (
                <Card
                  key={index}
                  className="p-6 flex flex-col justify-between h-full bg-white/80 border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 rounded-xl"
                >
                  <div>
                    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-gradient-to-br from-muted/40 to-muted/10">
                      <img
                        src={src}
                        alt={category.name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        style={{ objectPosition: "center" }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Learn more
                    </span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground rounded-full px-3 py-1.5 shadow-sm hover:brightness-95"
                    >
                      <Link href="/products">Explore</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading manufacturers across diverse textile sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border border-border hover:border-primary transition-colors h-40"
              >
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <p className="font-medium text-white text-center text-sm px-2">
                    {industry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Why Choose Genaux?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine scientific excellence with industry expertise to
              deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 flex flex-col items-center text-center bg-white/80 border-0 shadow-lg hover:shadow-2xl transition-all rounded-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent flex items-center justify-center rounded-full mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-white drop-shadow" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Production?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Connect with our team to discover how Genaux solutions can optimize
            your textile manufacturing process.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-foreground hover:bg-accent-foreground/90 text-black"
          >
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
