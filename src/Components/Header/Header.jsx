import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header_right">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
