
function Background() {
  return (
    <div className="fixed z-[2] h-screen w-full">
      <div className="top-[5%] absolute w-full py-10 flex justify-center text-zinc-600 text-2xl font-semibold">
        Documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[20vw] leading-none tracking-tighter font-semibold text-zinc-900 ">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
