import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link'

const ProjectCard = ({ title, description, link, icon }) => {
  const IconComponent = icon;
  return (
    <div className="w-full hover:bg-[#247c5c] hover:text-white rounded-xl px-4 border-2 sm:h-full h-32 lg:w-full sm:max-w-1/4 border-[#247c5c]">
      <div className="md:pt-4 py-4">
        <Link href={link} className="flex items-center">
        <IconComponent className="mr-2" size={16} />
          {title}
        </Link>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
