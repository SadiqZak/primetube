import SidebarChild from "./SidebarChild/SidebarChild";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <SidebarChild path={"/"} icon={"home"} comp={"Home"} />
          <SidebarChild path={"/playlist"} icon={"playlist_play"} comp={"Playlist"} />
          <SidebarChild path={"/likedvideos"} icon={"thumb_up_alt_outlined"} comp={"Liked Videos"} />
          <SidebarChild path={"/watchlater"} icon={"watch_later_outlined"} comp={"Watch Later"} />
          <SidebarChild path={"/history"} icon={"history_outlined"} comp={"History"} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
