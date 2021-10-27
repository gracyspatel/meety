import "./Button.scss";

type buttonType = "primary" | "outlined" | "unstyled";

interface buttonProp {
  label: string;
  type: buttonType;
  loading?: boolean;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: buttonProp) => {
  const { label, type, loading, onClickFunction } = props;

  const getLoader = () => {
    return (
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>
    );
  };

  return (
    <button
      disabled={loading}
      className={[type, "btn"].join(" ")}
      onClick={onClickFunction}
    >
      {props.loading ? getLoader() : label}
    </button>
  );
};

export default Button;
