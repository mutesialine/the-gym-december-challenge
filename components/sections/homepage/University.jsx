import Button from "../../ui/Button";
import PodCastcard from "../../ui/PodCastcard";
import podcast from "/public/images/podcast.jpg"
import lifelong from "/public/images/lfelong.jpg"
import man from "/public/images/podcast.jpg"
import discover from "/public/images/podcast.jpg"
import service from "/public/images/podcast.jpg"
import Image from "next/image";
export default function university(){
  return (
    <div className="max-w-primary mx-auto px-6 flex justify-between items-center gap-32 w-full">
      <div className="w-full space-y-5">
        <PodCastcard
          pic={podcast}
          title="We are TUM – the podcast of our university"
          subtitle="In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the hidden champions behind the scenes."
        />
        <Button styles={"text-lightblue border border-lightblue"}>
          All episodes
        </Button>
      </div>
      <div className="w-[650px] space-y-5 ">
        <PodCastcard
          pic={lifelong}
          title="Lifelong learning"
          subtitle="We offer continuing education opportunities accompanying you over your whole career."
        />
        <Button styles={"text-lightblue border border-lightblue"}>
          TUM Institute for LifeLong Learning
        </Button>
      </div>
    </div>
  );
}