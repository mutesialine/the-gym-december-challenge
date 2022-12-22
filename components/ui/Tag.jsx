import Image from "next/image";
import Link from "next/link";
import anchor from "/public/icons/anchor.svg"
export default function Tag({title, tag}){
  return(
    <div className="flex gap-1 items-center font-semibold">
      <Link href="#" classname="text-base text-white hover:underline">{title}</Link>
      <Link href="#"><Image src={anchor} alt="a tag" className="w-4 h-4"/></Link>
    </div>
  );
}