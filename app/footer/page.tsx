
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export function Footer(){
    return(
        <main className="bg-base-200 ft">

            <div>
               <div className="flex flex-col justify-center items-center">

                <div className="bg-white w-30 h-30 flex justify-center items-center rounded-full mb-5  shadow-2xl">
                     <FontAwesomeIcon icon={faHandshake} size="4x"/>
                </div>
                <h1 className="text-4xl font-bold text-center">Tell me about your next project</h1>
                <div className="flex gap-3 p-10">
                    <a href="mailto:arsenedombai@gmail.com?subject=Bienvenue&body=Votre message ici" className="btn bg-black text-white rounded-full w-30 p-6">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" beat/>
                        Email</a>
                    <button className="btn btn-ghost w-30 p-6" aria-label="WhatsApp">
                        <a href="https://wa.me/237656649122"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost bg-white w-30 p-6 border-2 border-black rounded-full"
                            aria-label="WhatsApp"
                        >
                        <FontAwesomeIcon icon={faWhatsapp}  size="xl" className="text-green-500"/>
                        WhatsApp
                        </a>
                    </button>
                </div>
                  <hr className="w-60 md:w-2xl lg:w-5xl text-gray-400"/>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <p className="text-sm">© 2025 All rights reserved</p>
                    <ul className="sm: hidden md:flex gap-3 text-sm">
                    <li><Link href={""} >Linkedin /</Link></li>
                    <li><Link href={""} >Facebook /</Link></li>
                    <li><Link href={""} >Instagram</Link></li>
                </ul>
                </div>
            </div>

        </main>
    )
}