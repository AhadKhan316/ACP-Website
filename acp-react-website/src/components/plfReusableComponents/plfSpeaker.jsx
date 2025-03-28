import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-green-800 hover:text-green-900 transition duration-300`}
      style={{ ...style, display: "block", right: "15px" }}
      onClick={onClick}
    >
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
      </svg>
    </div>  
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-green-800 hover:text-green-900 transition duration-300`}
      style={{ ...style, display: "block", left: "15px", zIndex: 1 }}
      onClick={onClick}
    >
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
      </svg>
    </div>
  );
};

const PlfSpeakerCard = ({ speakers, title = "Speakers" }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Slide every 3 seconds (3000ms)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fallbackImage = "https://placehold.co/150x150";

  return (
    <section className="py-12 sm:px-6 md:px-8 bg-green-900 text-white relative overflow-hidden">
      <div className="mx-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-white"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative bg-white rounded-lg overflow-hidden shadow-md p-3 mx-auto max-w-sm group"
                >
                  {/* Image Container */}
                  <div className="relative w-70 h-70 sm:w-78 sm:h-78 mx-auto mb-6 bg-green-50 rounded-md overflow-hidden">
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent opacity-50" />
                    <img
                      src={speaker.image || fallbackImage}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = fallbackImage)}
                    />
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border-2 border-green-400/30 rounded-md m-2 group-hover:border-green-400/50 transition-colors duration-300" />
                  </div>

                  {/* Speaker Info */}
                  <div className="relative text-center text-green-900">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-sm sm:text-base text-green-700">
                      {speaker.role || "Speaker"}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {speaker.bio || "Expert in their field"}
                    </p>
                  </div>

                  {/* Subtle Accent */}
                  <motion.div
                    className="absolute bottom-2 right-2 w-3 h-3 bg-green-800 rounded-full"
                  // animate={{ opacity: [0.5, 1, 0.5] }}
                  // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PlfSpeakerCard;