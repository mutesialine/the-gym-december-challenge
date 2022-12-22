import Image from "next/image";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import christian from "/public/images/Christian.webp";
export default function Ground() {
  return (
    <div className=" flex max-w-primary mx-auto px-6 w-full my-40 z-10">
      <div className="w-1/2  my-20 bg-orange text-black flex flex-col relative z-20 -mr-10 ">
        <Card
          title={`"Here I have met a lot of people who are breaking new ground"`}
          subtitle="Philip Häusser, alumnus"
        />
        <Button styles={"bg-lightblue text-white mx-6 my-3 "}>
          READ ALUMIN STORY{" "}
        </Button>
      </div>
      <Image src={christian} className="w-49 h-29" alt="christian" />
    </div>
  );
}
