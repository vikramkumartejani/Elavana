import Image from "next/image"

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How it works ?
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Become the best version of yourself by accessing insights and
            experiences shared by those who've walked the path before you.
          </p>
        </div>

        {/* Cards with curved line */}
        <div className="relative">
          {/* Curved line background - placeholder for your image */}
          <div className="absolute top-[35%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 w-[1000px]">
            <Image
              src="/assets/how-it-works-curve-line.svg"
              alt="Curved connecting line"
              width={900}
              height={300}
              className="w-[900px] h-auto"
            />
          </div>

          {/* Cards container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1: Create Profile */}
            <div className="text-center">
              <div className="mb-2 flex justify-center h-[320px] w-[300px]">
                  <Image
                    src="/assets/create-profile.png"
                    alt="create-profile"
                    width={168}
                    height={163.76}
                    className="w-full h-full object-contain"
                  />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Create Profile
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set up your professional profile to showcase your expertise.
              </p>
            </div>

            {/* Card 2: Launch Offerings */}
            <div className="text-center">
                <div className="mb-2 flex justify-center h-[320px] w-[250px]">
                  <Image
                    src="/assets/launch-offerings.png"
                    alt="Launch Offerings"
                    width={196}
                    height={161.86}
                    className="w-full h-full object-contain"
                  />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Launch Offerings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Publish your services to start attracting potential clients.
              </p>
            </div>

            {/* Card 3: Grow & Engage Clients */}
            <div className="text-center">
                <div className="mb-2 flex justify-center h-[320px] w-[350px]">
                  <Image
                    src="/assets/grow-clients.png"
                    alt="Grow & Engage Clients"
                    width={161}
                    height={194}
                    className="w-full h-auto object-contain mt-auto"
                  />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Grow & Engage Clients
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build relationships and track your growth as your client base
                expands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
