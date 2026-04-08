import React from 'react';

export const Logo = ({ className = "h-20 w-auto" }: { className?: string }) => (
  <img 
    src="https://res.cloudinary.com/dsiwumpo7/image/upload/v1775461735/vidhya_setu_dhgiyb.jpg" 
    alt="VidyaSetu" 
    className={className}
    referrerPolicy="no-referrer"
    onError={(e) => {
      // Fallback if the URL is not accessible yet
      const target = e.target as HTMLImageElement;
      target.src = "https://picsum.photos/seed/vidyasetu-logo/200/100";
    }}
  />
);
