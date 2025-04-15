import HispanosphereMap from './HispanosphereMap';

const HomePage = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Heading (floating at top center) */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-80 text-center p-4">
        <h1 className="text-2xl font-bold">
          Out of Many... ONE Hispanosphere
        </h1>
      </div>

      {/* Map fills the screen */}
      <div className="w-full h-full">
        <HispanosphereMap />
      </div>

      {/* Sidebar floats to the right on larger screens */}
      <div className="hidden md:block absolute right-0 top-16 w-1/4 h-[calc(100%-4rem)] bg-gray-100 p-4 overflow-y-auto shadow-lg z-20">
        <h2 className="text-xl font-semibold mb-2">Did you know?</h2>
        <p>
          Fun facts, stats, and cultural highlights about the Hispanosphere could go here.
        </p>
      </div>
    </div>
  );
};

//export default HomePage;
