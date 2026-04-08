"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ArticleDetailHeaderProps {
  category: string;
  headline: string;
  summary: string;
  byline: string;
  date: string;
  imageUrl: string;
  caption?: string;
  credit?: string;
}

const renderByline = (text: string) => {
  if (!text) return null;
  return text.split('*').map((part, i) => {
    if (i % 2 === 1) {
      return <span key={i} className="text-[#0e7c9f] hover:underline cursor-pointer">{part.toUpperCase()}</span>;
    }
    return <span key={i}>{part.toUpperCase()}</span>;
  });
};

export default function ArticleDetailHeader({
  category,
  headline,
  summary,
  byline,
  date,
  imageUrl,
  caption = "Ashley Fairleigh escaped one Austin shooting. The trauma revisited her after the one at Buford's.",
  credit = "Kaylee Greenlee for The Austin Current"
}: ArticleDetailHeaderProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = encodeURIComponent(headline);
    const encodedUrl = encodeURIComponent(url);

    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`;
        break;
     
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    setIsShareOpen(false);
  };

  return (
    <header className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-5 bg-white">
      <div className="text-[#0e7c9f] text-[12px] font-black uppercase tracking-wider mb-3 font-sans hover:underline cursor-pointer">
        {category}
      </div>

      <h1 className="text-[34px] sm:text-[42px] font-bold font-pt-serif leading-none text-black mb-6">
        {headline}
      </h1>

      <div className="border-l-[3px] border-[#FFCC00] pl-4 mb-7">
        <p className="text-[17px] text-[#333] font-pt-serif leading-[1.3]">
          {summary}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-2 pb-3">
        <div className="text-[11px] font-sans font-medium uppercase tracking-wide text-gray-500 mb-4 sm:mb-0">
          <div className="mb-1 leading-tight">
            BY {renderByline(byline)}
          </div>
          <div className="leading-tight">
            {date.toUpperCase()}
          </div>
        </div>
        <div className="flex items-center space-x-5 text-[12px] font-bold font-sans uppercase tracking-[0.05em] text-black pb-1 relative" ref={shareRef}>
          <button 
            onClick={() => setIsShareOpen(!isShareOpen)}
            className="hover:text-gray-600 cursor-pointer transition-colors"
          >
            SHARE
          </button>
          
          {isShareOpen && (
            <div className="absolute right-0 top-full mt-[10px] w-48 bg-white border border-gray-200 shadow-md z-50">
              <div className="absolute -top-[6px] right-3 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
              
              <div className="relative z-10 bg-white flex flex-col pt-1">
                <button onClick={() => handleShare('whatsapp')} className="flex cursor-pointer items-center px-4 py-[10px] hover:bg-gray-50 text-[15px] font-bold text-[#2a2a2a] tracking-normal normal-case text-left border-b border-gray-200 border-dotted transition-colors">
                  <svg className="w-[18px] h-[18px] mr-3 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </button>
                <button onClick={() => handleShare('linkedin')} className="flex cursor-pointer items-center px-4 py-[10px] hover:bg-gray-50 text-[15px] font-bold text-[#2a2a2a] tracking-normal normal-case text-left border-b border-gray-200 border-dotted transition-colors">
                  <svg className="w-[18px] h-[18px] mr-3 fill-[#0A66C2]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </button>
                <button onClick={() => handleShare('facebook')} className="flex cursor-pointer items-center px-4 py-[10px] hover:bg-gray-50 text-[15px] font-bold text-[#2a2a2a] tracking-normal normal-case text-left border-b border-gray-200 border-dotted transition-colors">
                  <svg className="w-[18px] h-[18px] mr-3 fill-[#1877F2]" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </button>
                <button onClick={() => handleShare('twitter')} className="flex cursor-pointer items-center px-4 py-[10px] hover:bg-gray-50 text-[15px] font-bold text-[#2a2a2a] tracking-normal normal-case text-left transition-colors">
                  <svg className="w-[18px] h-[18px] mr-3 fill-black" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-3 w-full">
        <Image
          src={imageUrl}
          alt={headline}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </header>
  );
}
