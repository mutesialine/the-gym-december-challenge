import Image from "next/image";
export default function Newscard({img,title, subtitle,date, paragraph,minutes}){
  return(
    <div>
      <Image src={img} alt="picture" />
       <div className="space-y-3"> 
        <h2 className=" font-bold text text-bs">{subtitle}</h2>
        <h1 className=" font-bold text text-xl">{title}</h1>
        <p className="text-sm">{paragraph}</p>
        <div className="flex justify-between">
          <p>{date}</p>
          <p>{minutes}</p>
        </div>
      </div>
    </div>
      
  );
}