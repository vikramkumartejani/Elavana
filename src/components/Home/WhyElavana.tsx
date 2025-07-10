import { Card } from "@/components/ui/card";
import Image from "next/image";

type CardItem = {
  position: string;
  imgSrc: string;
  imgAlt: string;
  label: string[];
};

const cards: CardItem[] = [
  {
    position: "top-[18.5%] left-[9%]",
    imgSrc: "/assets/peoples.svg",
    imgAlt: "Clients icon",
    label: ["Get discovered by", "real clients"],
  },
  {
    position: "top-[18.5%] right-[9%]",
    imgSrc: "/assets/verified.svg",
    imgAlt: "Verified icon",
    label: ["Trusted, verified", "experts"],
  },
  {
    position: "top-1/2 left-0 -translate-y-1/2",
    imgSrc: "/assets/build-circle.svg",
    imgAlt: "Brand icon",
    label: ["Build your brand &", "credibility"],
  },
  {
    position: "top-1/2 right-0 -translate-y-1/2",
    imgSrc: "/assets/wallet-open.svg",
    imgAlt: "M‑Pesa icon",
    label: ["Book securely with", "M‑Pesa"],
  },
  {
    position: "bottom-[18.5%] left-[9%]",
    imgSrc: "/assets/tickets.svg",
    imgAlt: "Events icon",
    label: ["Host paid sessions,", "events, and more"],
  },
  {
    position: "bottom-[18.5%] right-[9%]",
    imgSrc: "/assets/clipboard-heart.svg",
    imgAlt: "Career icon",
    label: ["Grow your career,", "life, and wellness"],
  },
];

type ConnectorItem = {
  position: string;
  src: string;
  w: number;
  h: number;
};

const connectors: ConnectorItem[] = [
  {
    position: "top-[25%] left-[31%]",
    src: "/assets/connector-lines/top-left-line.svg",
    w: 118,
    h: 155,
  },
  {
    position: "top-[25%] right-[31%]",
    src: "/assets/connector-lines/top-right-line.svg",
    w: 118,
    h: 155,
  },
  {
    position: "top-1/2 left-[20%] -translate-y-1/2",
    src: "/assets/connector-lines/middle-left-line.svg",
    w: 215,
    h: 40,
  },
  {
    position: "top-1/2 right-[20%] -translate-y-1/2",
    src: "/assets/connector-lines/middle-right-line.svg",
    w: 215,
    h: 40,
  },
  {
    position: "bottom-[25%] left-[31%]",
    src: "/assets/connector-lines/bottom-left-line.svg",
    w: 172,
    h: 155,
  },
  {
    position: "bottom-[25%] right-[31%]",
    src: "/assets/connector-lines/bottom-right-line.svg",
    w: 172,
    h: 155,
  },
];

export function WhyElevana() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[972px] w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Why Elevana?
        </h2>

        {/* Mobile Layout: Vertical Stack */}
        <div className="sm:hidden space-y-6">
          {/* Central Logo Card - Full Width */}
          <Card
            className="w-full p-4 rounded-[20px] bg-white border-[#DCE6E9] flex items-center justify-center shadow-[#616C6F4D]"
            style={{ boxShadow: "0px 16px 25px -10px #616C6F4D" }}
          >
            <div className="flex items-center justify-center w-[60px]">
              <Image
                src="/assets/why-elevana-logo.svg"
                alt="Elevana Logo"
                width={97.05}
                height={106.83}
                className="object-contain w-full h-auto"
              />
            </div>
          </Card>

          {/* Feature Cards - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-6">
            {cards.map(({ imgSrc, imgAlt, label }, idx) => (
              <Card
                key={idx}
                className="w-full max-w-[300px] text-center p-4 rounded-[15px] bg-white z-20 gap-3 border-[#DCE6E9]"
                style={{ boxShadow: "0px 16px 25px -10px #616C6F26" }}
              >
                <Image
                  src={imgSrc || "/placeholder.svg"}
                  alt={imgAlt}
                  width={32}
                  height={32}
                  className="mx-auto w-8 h-8"
                />
                <p className="font-semibold text-gray-800 text-sm leading-tight">
                  {label[0]} <br /> {label[1]}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Layout: Circular with Connectors */}
        <div className="hidden sm:block relative h-[600px] md:h-[868px]">
          {/* Concentric Circles SVG */}
          <Image
            src="/assets/connector-lines/dashed-circles.svg"
            alt="Concentric circles"
            width={700}
            height={700}
            priority
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-[80%] md:w-[700px] h-auto"
          />

          {/* Central Logo Card */}
          <Card
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 md:p-[30px] rounded-[30px] md:rounded-[37px] bg-white border-[#DCE6E9] flex items-center justify-center z-10 shadow-[#616C6F4D]"
            style={{
              boxShadow:
                "0px 24px 40px -15px #616C6F4D md:0px 32px 50px -20px #616C6F4D",
            }}
          >
            <div className="flex items-center justify-center w-[70px] md:w-[97.05px]">
              <Image
                src="/assets/why-elevana-logo.svg"
                alt="Elevana Logo"
                width={97.05}
                height={106.83}
                className="object-contain w-full h-auto"
              />
            </div>
          </Card>

          {/* Connector Lines */}
          {connectors.map(({ position, src, w, h }, i) => (
            <div key={i} className={`absolute ${position} pointer-events-none`}>
              <Image
                src={src}
                alt="Connector line"
                width={w}
                height={h}
                className="object-contain w-[80%] md:w-full h-auto"
              />
            </div>
          ))}

          {/* Feature Cards */}
          {cards.map(({ position, imgSrc, imgAlt, label }, idx) => (
            <Card
              key={idx}
              className={`absolute ${position} w-[180px] md:w-[217px] text-center p-4 md:p-[20px] rounded-[20px] bg-white z-20 gap-3 md:gap-[14px] border-[#DCE6E9]`}
              style={{
                boxShadow:
                  "0px 24px 40px -15px #616C6F26 md:0px 32px 50px -20px #616C6F26",
              }}
            >
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={32}
                height={32}
                className="mx-auto w-8 md:w-[32px] h-8 md:h-[32px]"
              />
              <p className="font-semibold text-gray-800 text-sm md:text-sm leading-tight">
                {label[0]} <br /> {label[1]}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyElevana;
