import PropTypes from "prop-types";
const Cards = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map((q) => {
          return <li key={q.id}>{q.title}</li>;
        })}
      </ul>
    </div>
  );
};

Cards.propTypes = {
  products: PropTypes.array,
};

export default Cards;
