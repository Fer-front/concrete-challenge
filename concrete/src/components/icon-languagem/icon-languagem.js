import "./icon-languagem.scss";

export default function iconLang(props) {
  const size = props.size || "30";
  const type = props.type || "javascript";

  const _class = `icon-lang icon-lang--${type} icon-lang--${size}`;
  return <div className={_class}></div>;
}
