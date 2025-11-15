import Image from 'next/image';
import Marquee from "react-fast-marquee";

export default function Header2() {
  return (
    <main className="py-10 flex justify-between items-center transition-colors duration-500">
  
  <Marquee speed={60}>
      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
        alt="Next.js icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        alt="CSS3 icon"
        width={60}
        height={60}
        className='mx-20'
      /> 

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        alt="PHP icon"
        width={60}
        height={60}
        className='mx-20'
      /> 

       <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
        alt="javascript icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
        alt="Next.js icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
        alt="React icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
        alt="typescript icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
        alt="tailwindcss icon"
        width={60}
        height={60}
        className='mx-20'
      />

      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
        alt="github icon"
        width={60}
        height={60}
        className='mx-20'
      />
  </Marquee>
    </main>
  );
}