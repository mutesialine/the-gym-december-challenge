import Image from "next/image";
import neubau  from "/public/images/neubau.webp";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

   export default function Research() {
  return (
    <div className=" xl:flex max-w-primary mx-auto px-6 w-full my-24 z-10">
      <Image src={neubau} className=" w-full h-full xl:w-49 xl:h-29 object-cover" alt="christian"/>
      <div className="xl:w-1/2  xl:my-20  bg-purplo text-black flex flex-col relative z-20 xl:-ml-10 ">
        <Card
          title={`"Schools and Research Centers"`}
          subtitle="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."
        />
        <Button styles={"bg-lightblue text-white mx-6 mb-8 "}>ORGANIZATION</Button>
      </div>
    </div>
  );
}
 
