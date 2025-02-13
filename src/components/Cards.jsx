import Card from "./Card";

function Cards() {
  return (
    <>
      <h1>All products <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.40173 13.9974C-0.0110546 13.533 0.0307807 12.8218 0.495166 12.409L6.29921 7.2499L0.49515 2.09073C0.03078 1.67794 -0.0110546 0.966867 0.40173 0.502482C0.814515 0.0380967 1.52559 -0.00372285 1.99 0.409047L8.74001 6.409C8.98015 6.6226 9.11756 6.9286 9.11756 7.2499C9.11756 7.5712 8.98015 7.8772 8.74001 8.09065L1.99 14.0907C1.52559 14.5035 0.814515 14.4618 0.40173 13.9974Z" fill="#1F2026" />
</svg></h1>
      <div className="cards">
        <Card />
      </div>
    </>
  );
}

export default Cards;
