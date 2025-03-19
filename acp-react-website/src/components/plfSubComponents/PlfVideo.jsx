const PlfVideo = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-ivory-100 text-navy-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          PLF Sukkur Chapter 2 Highlights
        </h2>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute top-0 left-0 w-full h-full bg-navy-800/20 backdrop-blur-md rounded-lg shadow-lg border border-navy-700/30 animate-pulse-border">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
              title="PLF Sukkur Chapter 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlfVideo;