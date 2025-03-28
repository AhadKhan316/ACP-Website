import React from "react";
import AucDelegateCard from "../aucReusableComponents/aucDelegatesCard";

// Delegate data
const delegates = [
  {
    name: "Dr. Ahmed Khan",
    title: "Urdu Literature Expert",
    image: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Renowned scholar with over 20 years of research in Urdu poetry.",
  },
  {
    name: "Prof. Sara Malik",
    title: "Linguistics Scholar",
    image: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Expert in Urdu linguistics and its evolution in modern times.",
  },
  {
    name: "Mr. Zain Iqbal",
    title: "Poet & Writer",
    image: "../src/assets/auc-assets/auc-card.jpeg",
    bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
];

const AucCard = () => {
  return <AucDelegateCard delegates={delegates} title="Delegates" />;
};

export default AucCard;