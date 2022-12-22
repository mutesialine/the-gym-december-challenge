import Link from "next/link";
import { data } from "../data/Headerdata";
import icon1 from "/public/icons/logo.svg";
import icon2 from "/public/icons/logo2.svg";
import search from "/public/icons/search.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div className=" bg-darkblue w-full px-6 py-5  fixed z-[100]">
      <div className="flex justify-between items-center text-white max-w-8xl mx-auto ">
        <Link href="/">
          <div className="flex gap-4 ">
            <Image src={icon1} className="w-8 invert" alt="icon" />
            <div className="flex gap-2">
              <Image src={icon2} className="w-20 invert" alt="icon" />
              <div className="text-xs">
                <p>Techinical</p>
                <p>University</p>
                <p>Of Munich</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <div className=" flex gap-6">
            {data.map((element, index) => (
              <Link
                href={element.link}
                className="text-sm leading-4 font-bold border-b-4 border-transparent  hover:border-white"
                key={index}
              >
                {element.value}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 font-bold">
            <Link href="https://www.tum.de/" className="text-gray-600">
              DE
            </Link>
            <div className="h-7 w-0.5 bg-white"></div>
            <Link href="https://www.tum.de/en/">ENG</Link>
          </div>
          <Link href="https://www.tum.de/">
            <Image src={search} className="invert" alt="search" />
          </Link>
        </div>
      </div>
    </div>
  );
}
