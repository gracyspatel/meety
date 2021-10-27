import "./Button.scss";

type buttonType = "primary" | "outlined" | "unstyled";

interface buttonProp {
  label: string;
  type: buttonType;
  loading: boolean;
}

const Button = (props: buttonProp) => {
  const { label, type, loading } = props;

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
    <button disabled={loading} className={[type, "btn"].join(" ")}>
      {props.loading ? getLoader() : label}
    </button>
  );
};

export default Button;
