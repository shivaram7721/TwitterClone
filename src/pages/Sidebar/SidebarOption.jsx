import "./SidebarOption.css";

// eslint-disable-next-line react/prop-types
function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2 className="text">{text}</h2>
    </div>
  );
}

export default SidebarOption;