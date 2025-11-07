"use client";
import { useTranslation } from '../hooks/useTranslation';

export default function HeroBanner() {
  const { t, language } = useTranslation();
  return (
    <>    <section className="relative h-[20vh] xs:h-[70vh] sm:h-[35vh] md:h-[40vh] lg:h-[60vh] xl:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
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
        <p className="text-yellow-400 mt-5 text-lg xs:text-2xl sm:text-4xl md:text-3xl font-bakbak-one font-bold mb-1 xs:mb-2">
          {t('welcome_head')}
        </p>
        <h1 className="text-white text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-bakbak-one font-bold mb-2 xs:mb-4 leading-tight">
          {t('welcomesubtitle')}
        </h1>
        <p className="text-white text-sm xs:text-lg sm:text-2xl md:text-xl font-bakbak-one max-w-3xl  xs:mb-8 px-2">
          {t('welomedescription')}
        </p>
        <h2 className="text-white text-2xl xs:text-4xl md:text-6xl lg:text-5xl font-bakbak-one font-bold mb-2 xs:mb-4 leading-tight">
          {t('welcomegov')}
        </h2>
        <div className="hidden  sm:container lg:block  lg:container px-4 mt-8 mx-auto max-w-full">
          <ul className="flex  justify-center space-x-6 flex-wrap">
            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-30 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-devendra-fadnavis.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री देवेंद्र फडणवीस"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री देवेंद्र फडणवीस</a>
                </h3>
                <p className="text-sm font-medium">मा.मुख्यमंत्री</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-30 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-eknath-shinde.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री एकनाथ शिंदे"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री एकनाथ शिंदे</a>
                </h3>
                <p className="text-sm font-medium">मा.उपमुख्यमंत्री</p>
              </div>
            </li>

            <li className=" text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-30 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className=" features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-ajit-pawar.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री अजित पवार"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री अजित पवार</a>
                </h3>
                <p className="text-sm font-medium">मा.उपमुख्यमंत्री</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-30 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr_jaykumar_gore.png"
                  width="115"
                  loading="lazy"
                  alt="श्री. जयकुमार गोरे"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री. जयकुमार गोरे</a>
                </h3>
                <p className="text-sm font-medium">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-30 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr_yogesh_kadam.jpeg"
                  width="115"
                  loading="lazy"
                  alt="श्री योगेश कदम"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री. योगेश कदम</a>
                </h3>
                <p className="text-sm font-medium">माननीय राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div className=" lg:hidden mt-5">
          <ul className="flex  justify-center  gap-3 flex-wrap">
            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-40 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-devendra-fadnavis.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री देवेंद्र फडणवीस"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री देवेंद्र फडणवीस</a>
                </h3>
                <p className="text-sm font-medium">मा.मुख्यमंत्री</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-40 sm:w-33 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-eknath-shinde.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री एकनाथ शिंदे"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री एकनाथ शिंदे</a>
                </h3>
                <p className="text-sm font-medium">मा.उपमुख्यमंत्री</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-40 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr-ajit-pawar.webp"
                  width="115"
                  loading="lazy"
                  alt="श्री अजित पवार"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री अजित पवार</a>
                </h3>
                <p className="text-sm font-medium">मा.उपमुख्यमंत्री</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-40 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr_jaykumar_gore.png"
                  width="115"
                  loading="lazy"
                  alt="श्री. जयकुमार गोरे"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री. जयकुमार गोरे</a>
                </h3>
                <p className="text-sm font-medium">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
            </li>

            <li className="features-style2__single text-center flex-shrink-0 mt-4 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 w-40 sm:w-40 md:w-48 lg:w-48 xl:w-48">
              <div className="features-style2__single-icon mx-auto mb-3">
                <img
                  src="https://admin.gpmiraj.com/img/mr_yogesh_kadam.jpeg"
                  width="115"
                  loading="lazy"
                  alt="श्री योगेश कदम"
                  className="mx-auto rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
              <div className="features-style2__single-content text-black">
                <h3 className="text-lg font-semibold tracking-wide mb-1 hover:text-blue-600 transition-colors duration-300">
                  <a href="#">श्री. योगेश कदम</a>
                </h3>
                <p className="text-sm font-medium">माननीय राज्यमंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
            </li>
          </ul>
        </div>
    </>
    

  );
}
