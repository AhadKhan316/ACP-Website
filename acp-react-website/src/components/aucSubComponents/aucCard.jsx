import React from "react";
import AucDelegateCard from "../aucReusableComponents/aucDelegatesCard";

// Delegate data
const delegates = [
  {
    name: "Adnan Siddiqui",
    // title: "Urdu Literature Expert",
    image: "../src/assets/auc-assets/auc-delegate-card1.jpeg",
    // bio: "Renowned scholar with over 20 years of research in Urdu poetry.",
  },
  {
    name: "Iftikhar Arif",
    // title: "Linguistics Scholar",
    image: "../src/assets/auc-assets/auc-delegate-card2.jpeg",
    // bio: "Expert in Urdu linguistics and its evolution in modern times.",
  },
  {
    name: "Humayun Saeed",
    // title: "Poet & Writer",
    image: "../src/assets/auc-assets/auc-delegate-card3.jpeg",
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
  {
    name: "Sohail Waraich",
    // title: "Poet & Writer",
    image: "../src/assets/auc-assets/auc-delegate-card4.jpeg",
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
  {
    name: "Hameeda Shaheen",
    // title: "Poet & Writer",
    image: "../src/assets/auc-assets/auc-delegate-card5.jpeg",
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
];

const AucCard = () => {
  return <AucDelegateCard delegates={delegates} title="Delegates" />;
};

export default AucCard;