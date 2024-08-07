export default function Home() {
  return(
    <>
    <div className="flex justify-center">

    <h1 className="text-3xl p-5">Upload Images</h1>
    </div>
    <form action="" className="m-auto border outline-dashed outline-gray-300 w-[98%] h-[60vh] p-2">
      <div className="w-full h-full ">
        <label htmlFor="file" className="cursor-pointer">Upload a pic</label>
      <input type="file" name="" id="file" className="cursor-pointer" placeholder="upload pic"/>
      </div>
    </form>
    <div className="flex flex-col items-center gap-3 mt-7">
      <h1 className="text-3xl">Uploaded Image</h1>
      <div className="w-[90%] border p-4 h-[50vh] grid grid-cols-3 w-full gap-2 overflow-scroll overflow-x-hidden">
        <div className=" h-[30vh]">H</div>
        <div className="h-[30vh]">e</div>
        <div className="h-[30vh]">l</div>
        <div className="h-[30vh]">l</div>
      </div>
    </div>
    <div className="h-28"></div>
    </>
  )
}