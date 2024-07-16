import Image from 'next/image';

export default function PricePointSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-2">Our features</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Mind blowing Price point</h3>
            <p className="text-gray-600">
              Experience top-notch UPSC preparation at an unbeatable price of just 20 rupees per answer. 
              Quality guidance and affordability, all in one package.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src="/three.png"
                alt="Mind blowing price illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}