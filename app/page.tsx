"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Beaker, Zap, Shield, TrendingUp } from "lucide-react";
import BlurText from "@/components/ui/blur-text";
import Silk from "@/components/ui/silk";
import { useEffect } from "react";
import LogoLoop from "@/components/ui/logoloop";

export default function Home() {
  const features = [
    {
      icon: Beaker,
      title: "Advanced Chemistry",
      image: "/enzyme.png",
      description:
        "Cutting-edge formulations designed for optimal textile performance and durability.",
    },
    {
      icon: Zap,
      title: "High Performance",
      image: "/performance.png",
      description:
        "Engineered solutions that deliver superior results across all textile applications.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      image: "/badge.png",
      description:
        "Rigorous testing and quality control ensure consistent excellence in every batch.",
    },
    {
      icon: TrendingUp,
      title: "Industry Leading",
      image: "/industry.png",
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
      image: "/pre2.png",
      link: "/products#pre-treatment",
    },
    {
      name: "Dyeing Solutions",
      description:
        "Achieve vibrant, consistent colors with our advanced dyeing chemical formulations.",
      color: "from-teal-500 to-teal-600",
      image: "/dye1.png",
      link: "/products#dyeing",
    },
    {
      name: "Finishing Chemicals",
      description:
        "Enhance fabric properties with our premium finishing and protective chemical treatments.",
      color: "from-orange-500 to-orange-600",
      image: "/fin2.png",
      link: "/products#finishing",
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
  const rollingImages = industries.map((industry) => ({
    node: <NodeComp name={industry.name} image={industry.image} />,
    title: industry.name,
    href: `/industries/${industry.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`,
  }));

  return (
    <div className="w-full bg-muted/20">
      {/* Hero Section */}
      <section className="relative bg-black text-primary-foreground py-20 md:py-28 overflow-hidden flex flex-col justify-center min-h-[100vh]">
        {/* Soft glow accents */}
        <div className="absolute inset-0 ">
          <Silk
            speed={5}
            scale={1}
            color="#2e3b51"
            noiseIntensity={1.5}
            rotation={0}
            // className="absolute inset-0 "
          />
        </div>

        <div className="relative z-10 mt-10 max-w-5xl flex justify-center  items-center flex-col gap-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            <BlurText
              text="Tailored for Every Industry. Engineered for Performance."
              delay={100}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={() => console.log("Animation complete!")}
              className="inline-block leading-relaxed"
            />
          </h1>
          <p className="text-lg md:text-xl text-accent-foreground mb-8 opacity-95 text-balance">
            Premium textile chemical solutions that drive innovation, quality,
            and sustainability across global manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent-foreground hover:bg-accent-foreground/90 text-black shadow-md hover:shadow-lg transition-all hover:scale-105"
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

        {/* <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-4rem] right-[-4rem] w-[28rem] h-[28rem] bg-accent/70 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-4rem] w-[28rem] h-[28rem] bg-accent/50 rounded-full blur-3xl" />
        </div> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}

            {/* Right Image — enhanced */}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center justify-center">
          <div className="flex flex-col  md:items-center md:justify-between  gap-6">
            <div className="text-center  ">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Product Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive solutions for every stage of textile production.
              </p>
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
                  className="p-6 flex flex-col justify-between h-full bg-white/80 border-0 hover:border hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-xl duration-300"
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
                      <Link href={category.link}>Explore</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="flex-shrink-0 text-center md:text-right group">
            <Button
              size="lg"
              className="bg-white/70 shadow-md border border-gray-300 text-black rounded-3xl hover:bg-muted/90 px-8"
            >
              <Link href={"/products"}>Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading manufacturers across diverse textile sectors.
            </p>
          </div>

          <div
            style={{
              height: "400px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={rollingImages}
              speed={60}
              direction="left"
              logoHeight={100}
              gap={40}
              pauseOnHover
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Why Choose <span className="text-primary">Genaux?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine scientific excellence with industry expertise to
              deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const Image = feature.image;
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl  text-white mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={Image}
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Subtle underline animation */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </div>
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

const NodeComp = ({ name, image }: { name: string; image: string }) => {
  return (
    <div
      className="relative group rounded-lg overflow-hidden border border-border transition-colors h-80"
      key={name}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Dark gradient overlay at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-black/50 to-black/50 transition-all group-hover:from-black/80"></div>

      {/* Text at the bottom */}
      <p className="absolute w-full bottom-3 left-1/2 -translate-x-1/2 text-center text-white  text-lg font-medium  px-3">
        {name}
      </p>
    </div>
  );
};
