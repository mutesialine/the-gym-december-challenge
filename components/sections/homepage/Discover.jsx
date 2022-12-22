
import Image from "next/image";
import Button from "../../ui/Button";
export default function Discover(){
  return (
    <div className="my-12 max-w-primary px-6 mx-auto">
      <p className="text-base font-bold text-darkblue pb-0.5">Customized page</p>
      <h1 className="text-4xl text-darkblue font-bold">Discover what TUM has to offer</h1>
      <div className="pt-12 flex items-center   gap-12">
        <div className="relative box-border border border-gray-300 mx-2 mb-2 -mr-24 -top-10 z-20 bg-white ">
          <p className="cardstyles text-black">for :</p>
          <ul className=" flex flex-col  text-base font-bold w-19">
            <li className="bg-gray-200 mx-5 text-black cardstyles">
              Prosective students
            </li>
            <li className="cardstyles">Founder</li>
            <li className="cardstyles">Employes</li>
            <li className="cardstyles">Show All</li>
          </ul>
        </div>
        <div className=" bg-yellow w-[688px] h-27 py-27.5   px-32.25 -z-10 ">
          <div className=" flex bg-[url('/images/Heddergott.webp')] bg-center aspect-[249/140] w-full h-full bg-no-repeat bg-cover ">
            <div className="ratio-Up"></div>
            <div className="ratio-down"></div>
            <div className="ratio-Up"></div>
            <div className="ratio-down"></div>
            <div className="ratio-Up"></div>
            <div className="ratio-down"></div>
            <div className="ratio-Up"></div>
            <div className="ratio-down"></div>
            <div className="ratio-Up"></div>
            <div className="ratio-down"></div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-darkblue text-large font-bold">
            Prosective students
          </h1>
          <p className="text-xl leading-8">
            Learn to bring ideas to life, discover new possibilities, work in
            teams and build networks.
          </p>
          <Button styles={"text-lightblue border border-lightblue"}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}