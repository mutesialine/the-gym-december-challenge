import Button from "../../ui/Button";
export default function  Support(){
  return (
    <div className=" max-w-primary px-6 space-y-6 mx-auto bg-lightpink  text-center mt-24 py-12">
      <h1  className="font-bold text-3xl">Giving</h1>
      <p className="">
        Support research, innovation and teaching at one of the best technical
        universities in Europe. Show social responsibility and help nurture
        talent.
      </p>
      <Button styles={"bg-lightblue text-white mx-6 mb-8  text-base"} >SUPPORT US</Button>
    </div>
  );
}