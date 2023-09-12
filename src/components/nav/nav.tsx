import { LogoText, NavContainer, NavContent, NavLink } from './nav.style'

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <div className="flex flex-row">
          <NavLink>About</NavLink>
          <NavLink>Leagues</NavLink>
          <NavLink>Offline</NavLink>
        </div>

        <LogoText>Courtside Empire</LogoText>

        <div className="flex flex-row">
          <NavLink>Leaderboards</NavLink>
          <NavLink>Sign Up</NavLink>
          <NavLink>Log In</NavLink>
        </div>
      </NavContent>
    </NavContainer>
  )
}

export default Nav
