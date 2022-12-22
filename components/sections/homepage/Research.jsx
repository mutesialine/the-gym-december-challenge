import Image from "next/image";
import neubau  from "/public/images/neubau.webp";
import Card from "../../ui/card";
import Button from "../../ui/Button";

   export default function Research() {
  return (
    <div className=" flex max-w-primary mx-auto px-6 w-full my-40 z-10">
      <Image src={neubau} className="w-49 h-29" alt="christian"/>
      <div className="w-1/2  my-20 bg-purplo text-black flex flex-col relative z-20 -ml-10 ">
        <Card
          title={`"Schools and Research Centers"`}
          subtitle="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."
        />
        <Button styles={"bg-lightblue text-white mx-6 my-3 "}>ORGANIZATION</Button>
      </div>
    </div>
  );
}
 
