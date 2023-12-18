import { StyledNavLink } from "./styles"

const LinkFeatures = ({
  icon,
  route
}) => {
  return (
    <StyledNavLink to={route}>
      {icon}
    </StyledNavLink>
  )
}

export default LinkFeatures