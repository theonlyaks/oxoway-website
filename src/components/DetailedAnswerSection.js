import { useRef, useEffect } from 'react';

export default function DetailedAnswerSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
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
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[9/16] max-w-[280px] mx-auto relative">
              {/* Background image behind the phone */}
              {/* <div 
                className="absolute inset-0 rounded-[2rem] overflow-hidden"
                style={{
                  backgroundImage: 'url(/one.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div> */}
              {/* Phone frame */}
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-[2rem] overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/mvp.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}