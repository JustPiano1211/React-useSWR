import { NavLink } from "react-router-dom";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "grey",
            padding: "30px",
            fontSize: 50,
          })}
        >
          HomePage
        </NavLink>
        <NavLink
          to="/page1"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "grey",
            padding: "30px",
            fontSize: 50,
          })}
        >
          page1
        </NavLink>
        <NavLink
          to="/page2"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "grey",
            padding: "30px",
            fontSize: 50,
          })}
        >
          page2
        </NavLink>
      </div>
      <div>{children}</div>
    </>
  );
};
