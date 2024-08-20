import { NavLink } from "react-router-dom";
import { FlexBox } from "./styles/authNav";

type AuthNavProps = {
  title: string;
  linkNeeded: string;
  linkText: string;
};

// fixme: renaming needed
export const AuthNav = (props: AuthNavProps) => {
  const { title, linkNeeded, linkText } = props;

  return (
    <FlexBox>
      <div>{title}</div>
      <NavLink to={linkNeeded}>{linkText}</NavLink>
    </FlexBox>
  );
};
