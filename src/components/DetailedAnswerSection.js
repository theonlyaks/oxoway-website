import Image from 'next/image';

export default function DetailedAnswerSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-2">Our features</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Detailed answer reports and marking</h3>
            <p className="text-gray-300">
              Receive comprehensive feedback with our detailed answer reports and precise marking system. 
              Identify your strengths, work on your weaknesses, and elevate your UPSC preparation to the next level.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src="/two.png"
                alt="Detailed answer report on phone"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              {/* Mobile phone overlay */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div style={{ width: '200px', height: '400px', position: 'relative' }}>
                  <Image
                    src="/ga.png" // Replace with your actual mobile screen image
                    alt="Mobile screen with detailed answer report"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}