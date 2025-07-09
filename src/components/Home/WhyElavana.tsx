import React from "react";
import {
  Users,
  Shield,
  TrendingUp,
  Calendar,
  CreditCard,
  Heart,
} from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: string;
}

const Benefit: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  position,
}) => (
  <div
    className={`absolute ${position} bg-white rounded-lg shadow-lg p-6 max-w-48 text-center border border-gray-100`}
  >
    <div className="flex justify-center mb-3">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
      {title}
    </h3>
    <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
  </div>
);

const WhyElevana: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Get discovered by real clients",
      description: "Connect with genuine clients looking for your services",
      position: "top-0 left-16",
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: "Trusted, verified experts",
      description: "Join a network of verified professionals",
      position: "top-0 right-16",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-600" />,
      title: "Build your brand & credibility",
      description: "Establish your professional reputation",
      position: "left-0 top-1/2 -translate-y-1/2",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      title: "Book securely with M-Pesa",
      description: "Safe and convenient payment processing",
      position: "right-0 top-1/2 -translate-y-1/2",
    },
    {
      icon: <Calendar className="w-6 h-6 text-teal-500" />,
      title: "Host paid sessions, events, and more",
      description: "Monetize your expertise through various formats",
      position: "bottom-0 left-16",
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-400" />,
      title: "Grow your career, life, and wellness",
      description: "Personal and professional development",
      position: "bottom-0 right-16",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Why Elevana?
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 600"
            style={{ zIndex: 1 }}
          >
            <defs>
              <pattern
                id="dots"
                patternUnits="userSpaceOnUse"
                width="4"
                height="4"
              >
                <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
              </pattern>
            </defs>

            {/* Dotted lines connecting to center */}
            <path
              d="M 150 100 Q 300 200 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 650 100 Q 500 200 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 50 300 Q 200 300 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 750 300 Q 600 300 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 150 500 Q 300 400 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 650 500 Q 500 400 400 300"
              stroke="url(#dots)"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Center Logo */}
          <div
            className="relative bg-white rounded-full p-8 shadow-lg border-4 border-orange-100"
            style={{ zIndex: 2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-teal-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl font-bold">E</div>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="relative w-full h-96" style={{ zIndex: 3 }}>
            {benefits.map((benefit, index) => (
              <Benefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                position={benefit.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyElevana;
