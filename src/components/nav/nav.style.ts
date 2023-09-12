import tw from 'tailwind-styled-components'

export const NavContainer = tw.nav`
  flex
  w-screen
  justify-center
  bg-jet
  p-8
`
export const LogoText = tw.h1`
  px-4
  text-2xl
  font-extrabold
  uppercase
  tracking-widest
  text-white
`
export const NavContent = tw.div`
  flex
  max-w-screen-xl
  items-center
  justify-between
`

export const NavLink = tw.div`
  cursor-pointer
  px-4
  font-semibold
  text-white
  underline
  decoration-red/80
  transition
  duration-300
  hover:text-red/80
  hover:decoration-white
`
