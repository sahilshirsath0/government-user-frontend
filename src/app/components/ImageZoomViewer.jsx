'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomIn, ZoomOut, RotateCcw, Maximize, Minimize } from 'lucide-react';

const ImageZoomViewer = ({ imageUrl, title = "Image Document", defaultScale = 1.0 }) => {
  const [scale, setScale] = useState(defaultScale);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetZoom = () => {
    setScale(defaultScale);
    setPosition({ x: 0, y: 0 });
  };

  // Drag functionality
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (scale > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && scale > 1 && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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
  }, [zoomIn, zoomOut, resetZoom]);

  // Global mouse events for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, scale]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleImageError = () => {
    setError('प्रतिमा लोड करताना त्रुटी आली');
    setIsLoading(false);
  };

  // Don't render until we're on the client side
  if (!isClient) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-center h-96 bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-bakbak-one">प्रतिमा व्यूअर लोड होत आहे...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <h2 className="text-xl font-yatra-one font-bold text-center">{title}</h2>
      </div>

      {/* Controls */}
      <div className="bg-gray-50 p-1.5 xs:p-2 sm:p-3 md:p-4 border-b flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
        <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
          <button
            onClick={zoomOut}
            className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="छोटे करा"
          >
            <ZoomOut className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </button>
          
          <span className="px-1.5 xs:px-2 sm:px-3 py-1 xs:py-1.5 sm:py-2 bg-white border rounded-lg font-bakbak-one text-xs xs:text-xs sm:text-sm">
            {Math.round(scale * 100)}%
          </span>
          
          <button
            onClick={zoomIn}
            className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="मोठे करा"
          >
            <ZoomIn className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={resetZoom}
            className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="मूळ आकार"
          >
            <RotateCcw className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-white border hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="फुलस्क्रीन (F11 या Ctrl+F)"
          >
            {isFullscreen ? <Minimize className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Image Viewer */}
      <div className="image-viewer-container p-1 xs:p-1.5 sm:p-2 md:p-3 lg:p-3 bg-gray-100 min-h-[250px] xs:min-h-[260px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px] flex items-center justify-center overflow-hidden">
        <div 
          className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-full max-h-full border-2 border-gray-200 relative transition-all duration-300 hover:shadow-3xl hover:border-blue-300"
          style={{ 
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`, 
            transformOrigin: 'center',
            imageRendering: 'crisp-edges',
            imageRendering: '-webkit-optimize-contrast',
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {isLoading && (
            <div className="w-full h-[350px] flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-3"></div>
                <p className="text-gray-600 font-bakbak-one text-sm">प्रतिमा लोड होत आहे...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="w-full h-[350px] flex items-center justify-center bg-red-50">
              <div className="text-center text-red-600">
                <p className="font-bakbak-one text-sm">{error}</p>
              </div>
            </div>
          )}
          
          {!error && (
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
              priority
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-2 xs:p-3 border-t">
        <div className="text-center text-xs xs:text-sm text-gray-600">
          <div className="font-bakbak-one">
            <p className="mb-1">वापरा: + - बटणांनी आकार बदला, माउस ड्रॅग करून नकाशा हलवा, फुलस्क्रीन बटण</p>
            <p className="text-xs text-gray-500">
              किबोर्ड: + - (आकार), 0 (मूळ आकार), F11/Ctrl+F (फुलस्क्रीन) | माउस: ड्रॅग करून नकाशा हलवा
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageZoomViewer;
