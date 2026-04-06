"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsletterBox({ imageUrl, link }: { imageUrl: string, link?: string }) {
  const adContent = (
    <div className="w-full max-w-[1150px] relative bg-gray-50 flex justify-center group cursor-pointer hover:opacity-95 transition-opacity">
      <Image 
        src={imageUrl} 
        alt="Advertisement"
        width={1400}
        height={400}
        className="w-full object-contain"
      />
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-4 pb-12 flex flex-col items-center">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
          {adContent}
        </Link>
      ) : (
        adContent
      )}
    </section>
  );
}
