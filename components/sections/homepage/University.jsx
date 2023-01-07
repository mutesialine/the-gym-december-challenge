import Button from "../../ui/Button";
import PodCastcard from "../../ui/PodCastcard";
import podcast from "/public/images/podcast.webp"
import lifelong from "/public/images/lfelong.webp"
import man from "/public/images/man.webp"
import service from "/public/images/service.webp"
import discover from "/public/images/discover.webp"

export default function university(){
  return (
    <div className="max-w-primary mx-auto px-6 w-full ">
      <div className=" flex flex-col xl:grid grid-cols-3 place-content-between place-items-center gap-y-12 xl:gap-36 m-0">
        <div className=" col-span-2 col  space-y-5">
          <PodCastcard
            pic={podcast}
            title="We are TUM – the podcast of our university"
            subtitle="In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the hidden champions behind the scenes."
          />
          <Button styles={"text-lightblue border border-lightblue"}>
            All episodes
          </Button>
        </div>
        <div>
          <div className="space-y-5">
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
      </div>
      <div className=" flex flex-col xl:grid grid-cols-3 place-items-center w-full gap-y-12 xl:gap-36 pt-12">
        <div className="space-y-5 w-fit">
          <PodCastcard
            pic={man}
            title="Stay connected"
            subtitle="Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!"
          />
          <Button styles={"text-lightblue border border-lightblue"}>
            TUM Institute for LifeLong Learning
          </Button>
        </div>
        <div className="space-y-5 w-fit">
          <PodCastcard
            pic={service}
            title="TUMint Relocation Service"
            subtitle="All-inclusive onboarding package for international students assists with accommodation and much more."
          />
          <Button styles={"text-lightblue border border-lightblue"}>
            see our services
          </Button>
        </div>
        <div className="space-y-5 w-fit">
          <PodCastcard
            pic={discover}
            title="Discover the TUMshop"
            subtitle="Merchandising items, conference materials and other products in the corporate design can be found online and on site."
          />
          <Button styles={"text-lightblue border border-lightblue"}>
            Show online
          </Button>
        </div>
      </div>
    </div>
  );
}