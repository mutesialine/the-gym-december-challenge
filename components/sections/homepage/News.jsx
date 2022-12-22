import csm from "/public/images/csm.webp";
import campus from "/public/images/campus.webp";
import research from "/public/images/research.webp"
import laura from "/public/images/laura.webp"
import Newscard from "../../ui/Newscard";
import Image from "next/image";
export default function News() {
  console.log(csm, "yuuuuu");
  return (
    <div className="max-w-primary mx-auto px-6 mt-12 ">
      <div className="flex justify-between">
        <div className="  space-y-6">
          <h1 className="text-big font-bold">News from TUM</h1>
          <p className=" text-xl">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <button className="font bold py-4 px-5 bg-lightblue text-white text-lg">
            See All
          </button>
        </div>
        <div className="flex w-1/2 gap-6">
          <Newscard
            img={csm}
            subtitle="WirtschaftsWoche rankings"
            title="Germany's strongest university in business sciences"
            paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/9/2020"
            minutes="Reading time 2min"
          />
          <Newscard
            img={campus}
            subtitle="Robotics and AI in elderly care"
            title="Bavarian government funding for research into geriatronics"
            paragraph="
TUM in rankings
WirtschaftsWoche rankings

Germany's strongest university in business sciences
TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            date="12/9/2020"
            minutes="Reading time 2min"
          />
        </div>
      </div>
      <div className="w-1/2 flex gap-6 ml-96 mt-12">
        <Newscard
          img={research}
          subtitle="Germany´s top research award"
          title="Leibniz Prize for Biomathematician Fabian Theis"
          paragraph="Mathematician, physicist and information scientist Prof. Fabian Theis has won the 2023 Gottfried Wilhelm Leibniz Prize. The.."
          date="12/08/2022"
          minutes="Reading time 2min"
        />
        <Newscard
          img={laura}
          subtitle="Search for dark matter"
          title="Antihelium nuclei as messengers from the depths of the galaxy"
          paragraph="How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,..."
          date="12/9/2020"
          minutes="Reading time 2min"
        />
      </div>
    </div>
  );
}
