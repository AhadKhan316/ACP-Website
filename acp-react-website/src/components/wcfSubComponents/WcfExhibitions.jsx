import React from "react";
import ExhibitionGrid from "../wcfReusableComponents/WcfLandingPageExhibitionCard"; 

// Exhibition Data
const exhibitions = [
  {
    title: "Sindh Artists Exhibition",
    image: "../src/assets/wcf-assets/Wcf-Exhibition.jpeg",
  },
  {
    title: "Art Exhibition Masters' & Contemporary Art",
    image: "../src/assets/venues/Audi1/1.jpg",
  },
  {
    title: "Candy Forest",
    image: "../src/assets/wcf-assets/Wcf_Art_Exhibition.jpeg",
  },
  {
    title: "Candy Forest",
    image: "../src/assets/venues/Audi1/1.jpg",
  },
  {
    title: "Candy Forest",
    image: "../src/assets/venues/Audi1/1.jpg",
  },
  {
    title: "Candy Forest",
    image: "../src/assets/venues/Audi1/1.jpg",
  },
];

function WcfExhibitions() {
  return (
    <ExhibitionGrid
      exhibitions={exhibitions}
      title="Exhibitions"
      gridCols={{ base: 1, sm: 2, lg: 3 }}
      offsetRows={true}
      imageAspectRatio="1/1" // For square images (1600x1600)
      maxImageHeight="560px" // Cap the height to avoid overly large images
      useHexClip={true} // Enable hexagonal clip path (optional)
    />
  );
}

export default WcfExhibitions;