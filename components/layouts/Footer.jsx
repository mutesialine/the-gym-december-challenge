import Image from "next/image";
import Link from "next/link";
import icon2 from "/public/icons/logo2.svg"
import left from "/public/icons/leftt.svg"
import Tag from "../ui/Tag";
import facebook from "/public/icons/facebook.svg"
import youtube from "/public/icons/youtube.svg";
import instagram from "/public/icons/instagram.svg";
import twitter from "/public/icons/twitter.svg";
import rss from "/public/icons/rss.svg";
import excellent from "/public/icons/excellence.svg"
export default function footer(){
  return (
    <>
      <div className="bg-bluu w-full text-white pt-16 mt-12 pb-12  ">
        <div className="max-w-primary mx-auto px-6 text-base">
          <div className=" flex justify-between gap-20">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Image src={icon2} className="w-20 invert" alt="icon" />
                <div className="text-xs">
                  <p>Techinical</p>
                  <p>University</p>
                  <p>Of Munich</p>
                </div>
              </div>
              <div>
                <p>
                  Phone:
                  <Link href="# hover:underline" className="hover:underline">
                    +49 (0)89-289-01
                  </Link>
                </p>
                <p>
                  Fax:
                  <Link href="#" className="hover:underline">
                    +49 (0)89-289-22000
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold">Lets Shape the future</p>
              <Link href="#" className="cursor-pointer hover:underline">
                Support Us
              </Link>
            </div>
            <div className=" space-y-4">
              <p className="font-bold">Latest news</p>
              <div className="flex items-center gap-2">
                <Image src={left} alt="arrow left" />
                <Link href="" className="cursor-pointer hover:underline">
                  Understanding the potentials of quantum technologies for
                  industry
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={left} alt="arrow left" />
                <Link href="" className="cursor-pointer hover:underline">
                  4.7 million euros in funding and 14 positions planned for the
                  TUM Geriatronics campus
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={left} alt="arrow left" />
                <Link href="" className="cursor-pointer hover:underline">
                  Germany's strongest university in business sciences
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex pt-12 gap-6">
              <p className="font-bold text-base">
                schools and<span>departments:</span>{" "}
              </p>
              <div className=" flex flex-wrap items-center gap-4">
                <Tag title=" Departments:Computation, Information and Technology" />
                <Tag title="Engineering and Design " />
                <Tag title="Natural Sciences" />
                <Tag title="Life Sciences " />
                <Tag title="Management" />
                <Tag title="Social Sciences and Technology" />
                <Tag title="Medicine " />
                <Tag title="Sport and Health Sciences" />
              </div>
            </div>
            <div className="flex pt-12 gap-6">
              <p className="font-bold text-base">Quicklinks:</p>
              <div className=" flex flex-wrap items-center gap-4">
                <Tag title=" Departments:Computation, Information and Technology" />
                <Tag title="Engineering and Design " />
                <Tag title="Natural Sciences" />
                <Tag title="Life Sciences " />
                <Tag title="Management" />
                <Tag title="Social Sciences and Technology" />
                <Tag title="Medicine " />
                <Tag title="Sport and Health Sciences" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkblue w-full text-white pt-12 pb-12">
        <div className=" max-w-primary mx-auto px-6">
          <div className=" flex justify-between pb-8">
            <div className=" text-semibold font-base  flex gap-3">
              <Link href="#" className="hover:underline">
                Jobs
              </Link>
              <Link href="#" className="hover:underline">
                Feedback
              </Link>
              <Link href="#" className="hover:underline">
                Accessibility
              </Link>
              <Link href="#" className="hover:underline">
                PrivacyPolicy
              </Link>
              <Link href="#" className="hover:underline">
                Legacy notice
              </Link>
            </div>
            <div className="flex gap-3">
              <Link href="#">
                <Image src={facebook} alt="icons" />
              </Link>
              <Link href="#">
                <Image src={youtube} alt="icons" />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="icons" />
              </Link>
              <Link href="#">
                <Image src={twitter} alt="icons" />
              </Link>
              <Link href="#">
                <Image src={rss} alt="icons" />
              </Link>
            </div>
          </div>
          <div className="flex gap-6">
            <Image src={excellent} alt="log"/>
            <div className="  space-y-4 pt-4">
              <div>
                <Link href="#" className="hover:underline">
                  <p>TUM Partners of Excellence</p>
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:underline">
                  <p>
                    Airbus · Altana · Audi · Bayerischer Bauindustrieverband ·
                    BMW · Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik
                    Industries · Google · Herrenknecht · HUAWEI · Infineon ·
                    Linde · MAN · Nestlé · Rohde & Schwarz · RWE · SAP · SGL
                    Carbon · Siemens · TRUMPF · TÜV-Süd · Vereinigung der
                    Bayerischen Wirtschaft · Volkswagen · Wacker Chemie
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}