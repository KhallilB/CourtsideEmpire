import { LogoText, NavContainer, NavContent } from './nav.style'

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <div className="flex flex-row">
          <p className="px-4">About</p>
          <p className="px-4">Leagues</p>
          <p className="px-4">Offline</p>
        </div>

        <LogoText>Courtside Empire</LogoText>

        <div className="flex flex-row">
          <p className="px-4">Leaderboards</p>
          <p className="px-4">Sign Up</p>
          <p className="px-4">Log In</p>
        </div>
      </NavContent>
    </NavContainer>
  )
}

export default Nav
