
import Image from "next/image";

export default function Work(){
    return(
        <main className="my-20">
            <h1 className="text-3xl md:text-3xl lg:text-4xl text-center font-bold" id="section-about2">Work</h1>
            <div className="flex gap-5 flex-wrap justify-center items-center py-8">

                
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/animcss.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App d&apos;aide téléphonique</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>

          
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/bootstrapsite.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App gestion de stocks</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>
                
            
         <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/d3.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App gestion des déchets</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>
                
            
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/flex.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App gestion d&apos;étudiant</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>
                
            
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/form.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App ressources humaines</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>
                
        
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-10">
    <Image
      src="/image/Menus.jpg"
      alt="Shoes"
      width={400}
     height={300}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">App traduction de langue</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Découvrez le projet</button>
    </div>
  </div>
</div>
            
            </div>
        </main>
    )
}