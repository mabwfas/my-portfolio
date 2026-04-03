import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Partners.css";

gsap.registerPlugin(ScrollTrigger);

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const partners: Partner[] = [
  { name: "Shopify", logo: "/images/shopify_glyph.svg", url: "https://shopify.pxf.io/shreyanshsingh" },
  { name: "Recharge", logo: "/images/recharge-mark.svg", url: "https://partners.getrecharge.com/lavitastic-studio" },
  { name: "Appstle", logo: "/images/Appstle.jpeg", url: "https://subscription-admin.appstle.com/affiliates?fpr=akshay-vaghasiya25" },
];

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 900) return;

    const cards = gridRef.current?.querySelectorAll(".partner-card") ?? [];

    // Set initial hidden state via GSAP (not CSS) so mobile is unaffected
    gsap.set(titleRef.current, { autoAlpha: 0, y: 60 });
    gsap.set(cards, { autoAlpha: 0, y: 80 });

    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play pause resume reverse",
        },
      });

      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          toggleActions: "play pause resume reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-inner section-container">
        <h2 className="partners-title" ref={titleRef}>
          My <span>Affiliates</span>
        </h2>
        <div className="partners-grid" ref={gridRef}>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
              aria-label={partner.name}
            >
              <img src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
