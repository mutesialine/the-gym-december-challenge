
export default function Hero(){
  return (
    <div className="w-full ">
      <video
        src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
        autoPlay
        muted
        loop
        className="object-cover w-full relative"
      />
      <div className="w-full text-white absolute top-40 left-0 right-0 max-w-primary px-6 mx-auto">
        <h1 className="text-5xl font-bold">
          TUM. The Entrepreneurial
          <br /> University
        </h1>
        <p className="text-xl">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
    </div>
  );

}