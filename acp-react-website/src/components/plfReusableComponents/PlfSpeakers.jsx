import { motion } from "framer-motion";

const PlfSpeaker = ({ speakers, title = "Speakers" }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-navy-800 text-ivory-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-full overflow-hidden shadow-lg w-64 h-64 mx-auto"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-serif font-bold text-ivory-100">
                  {speaker.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlfSpeaker;