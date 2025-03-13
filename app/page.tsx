
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto">
        <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4">
          <div className="text-5xl md:text-7xl lg:text-8xl">
            I'm Koby 👋, a <p className="text-green-500">Frontend</p> Developer
          </div>
        </div>
        <div className="w-full h-full justify-center items-center flex flex-col text-center gap-4">
          <div className="text-6xl">
            I'm Koby 👋, a <p className="text-green-500">Frontend</p> Developer
          </div>
        </div>
      </div>
    </div>
  );
}
