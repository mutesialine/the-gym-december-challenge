export default function Number(){
  return (
    <div className="max-w-primary mx-auto px-3   w-full  hidden xl:block">
      <h1 className="text-darkblue font-bold text-4xl pb-10">TUM in number</h1>
      <div className="xl:flex gap-4">
        <div className="bg-lightblue text-white w-3/5 space-y-5 px-8 py-4">
          <h1 className="text-9xl font-bold">50,000</h1>
          <p className="text-4xl">students</p>
        </div>
        <div className="space-y-4">
          <div className="bg-darkyellow flex items-center gap-40 px-4">
            <h1 className="text-bigg font-bold">176</h1>
            <p className="text-xbase font-semibold">
              ERC Grants for cutting <span>edgeresearch</span>
            </p>
          </div>
          <div className="flex items-center justify-between bg-rose px-4 ">
            <h1 className="text-bigg font-bold">178</h1>
            <p className="text-xbase font-semibold">Nobel laureates</p>
          </div>
        </div>
      </div>
    </div>
  );
}