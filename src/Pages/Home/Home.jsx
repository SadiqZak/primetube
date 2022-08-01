import { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Chips from "../../Components/Chips/Chips";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { AuthContext } from "../../utils/auth-context";
import { CardContext } from "../../utils/card-context";

const Home = () => {
  const { getUserLikes, getWatchlater, getPlaylist } = useContext(CardContext);
  const { stateAuth } = useContext(AuthContext);
  const { token } = stateAuth;

  useEffect(() => {
    getUserLikes({ encodedToken: token });
    getWatchlater({ encodedToken: token });
    getPlaylist({ encodedToken: token });
  }, [token]);

  return (
    <>
      <div className="video-container flex">
        <Sidebar />
        <div className="color-primary wd-100">
          <Chips/>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
