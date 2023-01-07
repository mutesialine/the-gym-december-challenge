import Image from "next/image";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import christian from "/public/images/Christian.webp";
export default function Ground() {
  return (
    <div className=" flex flex-col-reverse xl:flex-row max-w-primary mx-auto px-6 w-full  mb-24 z-10">
      <div className="xl:w-1/2  xl:my-20 bg-orange text-black flex flex-col relative z-20 xl:-mr-10 ">
        <Card
          title={`"Here I have met a lot of people who are breaking new ground"`}
          subtitle="Philip Häusser, alumnus"
        />
        <Button styles={"bg-lightblue text-white mx-6 mb-8  "}>
          READ ALUMIN STORY{" "}
        </Button>
      </div>
      <Image src={christian} className=" w-full h-full xl:w-49 xl:h-29 object-cover" alt="christian" />
    </div>
  );
}
