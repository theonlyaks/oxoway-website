import Image from 'next/image';

export default function FeatureCardOne() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">Our features</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Daily news analysis</h3>
            <p className="text-gray-600">
              Stay updated with our concise and insightful daily news analysis, tailored
              specifically for UPSC aspirants. Enhance your current affairs knowledge and stay
              ahead in your preparation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src="/three.png"
                alt="Daily news analysis"
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