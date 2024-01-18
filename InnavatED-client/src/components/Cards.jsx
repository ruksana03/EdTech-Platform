/* eslint-disable react/prop-types */

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={item.image}
          alt="courses"
          className="hover:scale-105 transition-all duration-200 md:h-72"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions mt-3 flex justify-between items-center">
          <h5 className="font-semibold">$ {item.price}</h5>
          <button className=" px-3 py-2 btn-style rounded-2xl"> Details</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
