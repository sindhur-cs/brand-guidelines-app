import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <NavLink to="/">
        <div>Logo</div>
      </NavLink>
        <ul className="flex list-none gap-6">
          <li>
            <NavLink to="/brand-guidelines">
              Brand Guidelines
            </NavLink>
          </li>
          <li>
            <NavLink to="/collections">
              Collections
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navbar