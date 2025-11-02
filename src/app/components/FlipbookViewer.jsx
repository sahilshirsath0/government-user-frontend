'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Maximize, Minimize } from 'lucide-react';

// Import react-pdf CSS styles
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// ESM import works in this client component; avoids Turbopack require resolution issues
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker using local file shipped in /public
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const FlipbookViewer = ({ pdfUrl, title = "PDF Document", defaultScale = 1.4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(defaultScale);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError('PDF लोड करताना त्रुटी आली');
    setIsLoading(false);
    console.error('PDF load error:', error);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetZoom = () => {
    setScale(defaultScale);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevPage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextPage();
          break;
        case '+':
        case '=':
          event.preventDefault();
          zoomIn();
          break;
        case '-':
          event.preventDefault();
          zoomOut();
          break;
        case '0':
          event.preventDefault();
          resetZoom();
          break;
        case 'F11':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'f':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            toggleFullscreen();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, totalPages, scale, prevPage, nextPage, zoomIn, zoomOut, resetZoom]);

  // Don't render PDF components until we're on the client side
  if (!isClient || !Document || !Page) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-center h-96 bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-bakbak-one">PDF व्यूअर लोड होत आहे...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <h2 className="text-xl font-yatra-one font-bold">{title}</h2>
        <p className="text-blue-100 font-bakbak-one text-sm">
          पान {currentPage} / {totalPages}
        </p>
      </div>

      {/* Controls */}
      <div className="bg-gray-50 p-2 sm:p-3 md:p-4 border-b flex flex-wrap items-center justify-between gap-2 sm:gap-3 md:gap-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="मागील पान"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <span className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border rounded-lg font-bakbak-one text-xs sm:text-sm">
            {currentPage} / {totalPages}
          </span>
          
          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="पुढील पान"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={zoomOut}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 transition-colors"
            title="छोटे करा"
          >
            <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <span className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border rounded-lg font-bakbak-one text-xs sm:text-sm">
            {Math.round(scale * 100)}%
          </span>
          
          <button
            onClick={zoomIn}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 transition-colors"
            title="मोठे करा"
          >
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={resetZoom}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 transition-colors"
            title="मूळ आकार"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 transition-colors"
            title="फुलस्क्रीन (F11 या Ctrl+F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="pdf-viewer-container p-2 sm:p-3 md:p-4 lg:p-4 bg-gray-100 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-full max-h-full border-2 border-gray-200"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'center',
            imageRendering: 'crisp-edges',
            imageRendering: '-webkit-optimize-contrast',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="w-[600px] h-[800px] flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-bakbak-one">PDF लोड होत आहे...</p>
                </div>
              </div>
            }
            error={
              <div className="w-[600px] h-[800px] flex items-center justify-center bg-red-50">
                <div className="text-center text-red-600">
                  <p className="font-bakbak-one">PDF लोड करताना त्रुटी आली</p>
                </div>
              </div>
            }
          >
            <Page
              pageNumber={currentPage}
              width={Math.min(800, window.innerWidth - 100)}
              height={Math.min(1000, window.innerHeight - 300)}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              loading={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              }
              onLoadSuccess={() => {
                // Page loaded successfully
              }}
              onLoadError={(error) => {
                console.error('Page load error:', error);
              }}
              devicePixelRatio={Math.max(window.devicePixelRatio || 1, 2)}
              renderMode="canvas"
            />
          </Document>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-600">
          <div className="font-bakbak-one">
            <p className="mb-1">वापरा: बाण्या बटणांनी पाने बदला, + - बटणांनी आकार बदला, फुलस्क्रीन बटण</p>
            <p className="text-xs text-gray-500">
              किबोर्ड: ← → (पाने), + - (आकार), 0 (मूळ आकार), F11/Ctrl+F (फुलस्क्रीन)
            </p>
          </div>
            <a 
              href={pdfUrl} 
              download
              className="text-blue-600 hover:text-blue-800 font-bakbak-one underline whitespace-nowrap"
            >
              PDF डाउनलोड करा
            </a>
        </div>
      </div>
    </div>
  );
};

export default FlipbookViewer;