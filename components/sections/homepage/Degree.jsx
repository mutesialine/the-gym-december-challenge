import Image from "next/image";
import Link from "next/link";
export default function Degree(){
  return (
    <div className="max-w-primary px-6 mx-auto mb-12 ">
      <input
        className="w-full bg-gray-200 py-6 px-4 border-b-2 border-lightblue  text-black text-2xl font-bold"
        type="text"
        Placeholder="Select degree program or enter"
      />
     <Link  href="#">
      <div>
         <p className="text-lightblue font-bold right-0 pt-6 flex justify-end ">Degree program</p>
        {/* <Image src={left-arrow} alt="arrow"/> */}
        </div>
     </Link>
    </div>
  );
}