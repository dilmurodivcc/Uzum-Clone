import imgLang from "../assets/lang.png";
import logo from "../../public/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="header__top">
          <div className="container">
            <nav>
              <div className="country">
                <small>
                  Country: <span>Toshkent</span>
                </small>
              </div>
            </nav>
            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
            <nav>
              <b>Savol-javoblar</b>
              <b>Buyurtmalarim</b>
              <div className="lang">
                <img className="imgLang" src={imgLang} alt="" />
                English
              </div>
            </nav>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <img src={logo} alt="" />
            <form>
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
              <button>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0726 11.2198C16.0726 13.9812 13.834 16.2198 11.0726 16.2198C8.31121 16.2198 6.07263 13.9812 6.07263 11.2198C6.07263 8.45843 8.31121 6.21985 11.0726 6.21985C13.834 6.21985 16.0726 8.45843 16.0726 11.2198ZM14.9124 16.4649C13.8366 17.2539 12.509 17.7198 11.0726 17.7198C7.48278 17.7198 4.57263 14.8097 4.57263 11.2198C4.57263 7.63 7.48278 4.71985 11.0726 4.71985C14.6625 4.71985 17.5726 7.63 17.5726 11.2198C17.5726 12.6562 17.1067 13.9838 16.3177 15.0596L20.2816 19.0234C20.6696 19.4115 20.6696 20.0407 20.2816 20.4288C19.8935 20.8168 19.2643 20.8168 18.8762 20.4288L14.9124 16.4649Z"
                    fill="#595B66"
                  />
                </svg>
              </button>
            </form>
            <nav>
              <select name="by_latter">
                <option value="A-Z">A to Z</option>
                <option value="Z-A">Z to A</option>
              </select>
              <select name="by_price">
                <option value="asc">Increase Prise</option>
                <option value="desc">Decrease Prise</option>
              </select>
              <select name="by_rating">
                <option value="asc">Ascending Rating</option>
                <option value="desc">Descending Rating</option>
              </select>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
