
import Image from "next/image"

export default function About_me(){
    return (
        <>
          <div className="about pt-5 pl-16 pr-16 pb-3" id="about">
            <h1 className="text-3xl md:text-3xl lg:text-4xl text-center font-bold" id="section-about2">About Me</h1>

            <div className="pt-10 pb-7 flex gap-10 md:gap-10 lg:gap-15 justify-center items-center flex-wrap">
               <div>
                <Image src="/image/profil2.JPG" width={320} height={300} alt="Photo de profil de l'auteur" className="rounded-md shadow-2xl"/>
               </div>
               <div className="flex-wrap text-justify md:text-xl">
                <p className="md:leading-8 lg:leading-10">
                I am <b>Arsène Essoumam</b>, a passionate Full-Stack Developer with 
                <br />over 5 years of experience in designing and building modern, 
                <br />high-performance, user-focused digital solutions.
               <br />Over the years, I have developed strong expertise in 
               <br />creating complete web applications, from interface design
               <br /> to backend development and final deployment.
               </p>
               </div>
            </div>
          </div>
        </>
    )
}