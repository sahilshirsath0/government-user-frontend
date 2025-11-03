export default function HeroBanner() {
  return (
    <section className="relative  h-[23vh] xs:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[95vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-90vh object-cover object-center z-0"
      >
        <source src="https://res.cloudinary.com/dgdeluo6e/video/upload/v1761023807/Untitled_video_-_Made_with_Clipchamp_yokdti.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img
          src="./"
          alt="Aerial view of Gram Panchayat Yetgaon"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-2 xs:p-4 z-10">
        <p className="text-yellow-400 text-lg xs:text-2xl md:text-3xl font-bakbak-one font-bold mb-1 xs:mb-2">
          सहर्ष स्वागत
        </p>
        <h1 className="text-white text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-bakbak-one font-bold mb-2 xs:mb-4 leading-tight">
          ग्रामपंचायत सावरगाव घाट
        </h1>
        <p className="text-white text-sm xs:text-lg md:text-xl font-bakbak-one max-w-3xl mb-4 xs:mb-8 px-2">
          सुशासन, पारदर्शकता आणि सर्वांगीण विकासाकडे वाटचाल करणारे सावरगाव घाट
        </p>

        {/* Buttons */}
        
      </div>
    </section>
  );
}
