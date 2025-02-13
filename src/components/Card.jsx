import { useEffect, useState } from "react";
import axios from "axios";
function Card() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  return (
    <>
      {product.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="img-bg">
              <img src={item.images[0]} alt="" />
            </div>{" "}
            <div className="content">
              <h3>
                {item.title}, {item.description}
              </h3>
              <p className="rating">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.61751 9.84409L10.2225 12.0199L9.26585 7.91909L12.4508 5.15992L8.25668 4.80408L6.61751 0.936584L4.97835 4.80408L0.78418 5.15992L3.96918 7.91909L3.01251 12.0199L6.61751 9.84409Z"
                    fill="#FFB54C"
                  />
                </svg>
                {item.rating} ({item.stock} orders)
              </p>
              <span className="for-month">
                {(item.price + (item.price * 0.1) / 12).toFixed(2)}USD/month
              </span>
              <div className="bottom">
                <div className="price">
                  <p className="discount">
                    {(item.price + item.price * 0.1).toFixed(2)}USD
                  </p>
                  <p className="current">{item.price}USD</p>
                </div>
                <button className="add">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61755 10.2699V8.2699H6.61755V12.7699C6.61755 13.046 6.39369 13.2699 6.11755 13.2699C5.84141 13.2699 5.61755 13.046 5.61755 12.7699V7.2699H8.61755C8.61755 4.86618 10.5698 3.2699 12.6176 3.2699C14.6751 3.2699 16.6176 4.97546 16.6176 7.2699H19.6176V19.7699C19.6176 20.5983 18.946 21.2699 18.1176 21.2699H13.1176C12.8415 21.2699 12.6176 21.046 12.6176 20.7699C12.6176 20.4938 12.8415 20.2699 13.1176 20.2699H18.1176C18.3937 20.2699 18.6176 20.046 18.6176 19.7699V8.2699H16.6176V10.2699H15.6176V8.2699H9.61755V10.2699H8.61755ZM12.6176 4.2699C11.0653 4.2699 9.61755 5.47362 9.61755 7.2699H15.6176C15.6176 5.56434 14.1601 4.2699 12.6176 4.2699Z"
                      fill="#1F2026"
                    />
                    <path
                      d="M8.11755 14.2699C8.39369 14.2699 8.61755 14.4938 8.61755 14.7699V17.2699H11.1176C11.3937 17.2699 11.6176 17.4938 11.6176 17.7699C11.6176 18.046 11.3937 18.2699 11.1176 18.2699H8.61755V20.7699C8.61755 21.046 8.39369 21.2699 8.11755 21.2699C7.84141 21.2699 7.61755 21.046 7.61755 20.7699V18.2699H5.11755C4.84141 18.2699 4.61755 18.046 4.61755 17.7699C4.61755 17.4938 4.84141 17.2699 5.11755 17.2699H7.61755V14.7699C7.61755 14.4938 7.84141 14.2699 8.11755 14.2699Z"
                      fill="#1F2026"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
