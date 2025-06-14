import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


interface HeroTemplateProps {
  title: string
  subtitle?: string
  image: string
}

const HeroTemplate: React.FC<HeroTemplateProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-[300px]"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
      <h1 className={`${montserrat.className} font-bold text-white text-6xl uppercase relative z-10`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-white text-xl mt-2 relative z-10">{subtitle}</p>
      )}
    </div>
  )
}

export default HeroTemplate