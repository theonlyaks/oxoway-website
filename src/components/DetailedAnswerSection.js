
import Image from 'next/image';

export default function DetailedAnswerSection() {
  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">Our features</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Detailed answer reports and marking</h3>
            <p className="text-white">
              Receive comprehensive feedback with our detailed answer reports and precise marking system. 
              Identify your strengths, work on your weaknesses, and elevate your UPSC preparation to the next level.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src="/detail2.png"
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