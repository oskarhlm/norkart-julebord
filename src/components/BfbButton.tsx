import { Button, ButtonProps, ButtonTypeMap, styled } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type OwnProps = {
  secondary?: boolean;
};

type Props = ButtonProps & OwnProps;

export const BfbButton = styled(Button)<Props>(({ theme, secondary }) => ({
  backgroundColor: secondary
    ? theme.palette.primary.light
    : theme.palette.primary.dark,
  color: secondary ? theme.palette.primary.dark : theme.palette.primary.light,
  outline: secondary ? `1px solid ${theme.palette.primary.dark}` : undefined,
  paddingInline: "1.5vw",
})) as OverridableComponent<ButtonTypeMap<OwnProps>>;
