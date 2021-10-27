import "./Button.scss";

type buttonType = "primary" | "outlined" | "unstyled";

interface buttonProp {
  label: string;
  type: buttonType;
}

const Button = (props: buttonProp) => {
  return (
    <button className={[props.type, "btn"].join(" ")}>{props.label}</button>
  );
};

export default Button;
