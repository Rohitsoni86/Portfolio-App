import Image from 'next/image';
import React from 'react';

interface SkillCardProps {
  imageSrc: string;
  title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="hero-skill flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white">
      <div className="relative w-14 h-14 sm:w-20 sm:h-20">
        <Image
          alt={title}
          loading="lazy"
          width="46"
          height="46"
          className="w-full h-full object-contain dark:block"
          src={imageSrc}
          style={{ color: 'transparent' }}
        />
      </div>
      <p className="mt-3 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center">
        {title}
      </p>
    </div>
  );
};

export default SkillCard;
