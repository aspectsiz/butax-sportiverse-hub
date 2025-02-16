
import { Link } from "react-router-dom";

export const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { to: "/shop", label: "market" },
    { to: "/blog", label: "Blog" },
    { to: "/franchise", label: "Franchise" },
    { to: "/hakkimizda", label: "Hakkimizda" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
          onClick={onClick}
        >
          {label}
        </Link>
      ))}
    </>
  );
};
