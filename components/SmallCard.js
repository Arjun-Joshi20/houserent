 function SmallCard({img, location, distance}) {
     return (
         <div className="flex items-center m-2 mt-5 rounded-xl space-x-4 cursor-pointer hover:bg-purple-100 ease-out hover:scale-105 transition transform duration-500" >
             <div className="relative h-16 w-16 " >
                <img className="rounded-lg" src={img}></img>
             </div>
             <div>
                 <h1>{location}</h1>
                 <h1>{distance}</h1>
             </div>
         </div>
     )
 }
 
 export default SmallCard
 