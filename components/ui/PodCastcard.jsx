import Image from "next/image";
export default function PodCastcard({pic,title, subtitle}){
  return(

    <div>
      <Image src={pic}  classname=""alt="image podcast"/>
  <div className="space-y-4 hover:text-lightblue pt-6">
    <h1 className="text-2xl font-bold">${title}</h1>
    <p className="text-base">${subtitle}</p>
  </div>
    </div>
  );
}