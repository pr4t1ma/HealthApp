const items = [
  { label: "Home", href: "./" },
  { label: "About", href: "./about" },
  { label: "Contact", href: "./contact" },
];
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo">My health app</div>
      <div className="menu">
        <ul className="flex gap-10">
          {items.map((itme) => {
            return (
              <li>
                <a href={itme.href}>{itme.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Header;
