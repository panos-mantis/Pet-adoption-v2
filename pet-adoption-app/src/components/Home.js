import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPets } from "../api";
import { FaAngleUp } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  const [randomPets, setSelectedPets] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const fetchRandomPets = async () => {
      try {
        const response = await getAllPets();
        const allPets = response.pets;
        const maxIndex = allPets.length;
        const randomIndices = getRandomIndices(maxIndex, 3);
        const selectedPets = randomIndices.map((index) => allPets[index]);
        setSelectedPets(selectedPets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomPets();

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const getRandomIndices = (max, count) => {
    const indices = Array.from({ length: max }, (_, i) => i);
    const shuffledIndices = indices.sort(() => 0.5 - Math.random());
    return shuffledIndices.slice(0, count);
  };

 

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Random Pets</h2>
      <div className="card-deck">
        {randomPets.map((pet) => (
          <div className="card" key={pet._id}>
            <img src={pet.image} className="card-img-top" alt={pet.name} />
            <div className="card-body">
              <h5 className="card-title">{pet.name}</h5>
              <p className="card-text">{pet.description}</p>
              <Link to={`/petDetails/${pet._id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mission-section">
        <h2 className="mt-4">Mission</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          suscipit, dui sit amet blandit pellentesque, justo neque tincidunt
          augue, et luctus est metus at dui. Sed in est at justo elementum
          eleifend. Ut varius mi at tortor consequat, at lobortis mauris
          dignissim. Integer suscipit nulla a leo venenatis eleifend. Aliquam
          eget turpis eget lectus placerat lacinia. Ut auctor tincidunt dui,
          eget faucibus ligula dignissim in.
        </p>
        <p>
          Proin venenatis magna et diam placerat finibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla tristique tincidunt neque, eget rutrum est faucibus sit amet.
          Fusce id malesuada felis, non finibus massa. Fusce at fringilla leo.
          Curabitur et commodo neque. Curabitur vulputate purus sed diam
          dapibus, non tempor nulla egestas. Vivamus a nunc a nisl interdum
          consequat. Aenean sed metus ut est vulputate iaculis.
        </p>
      </div>
      {showTopBtn && (
        <button className="top-to-btm" onClick={handleScrollToTop}>
          <FaAngleUp className="icon-position icon-style" />
        </button>
      )}
    </div>
  );
}

export default Home;
