
import { Link } from "react-router-dom";

export const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { to: "/market", label: "market" },
    { to: "/medya-merkezi", label: "Blog" },
    { to: "/bayilik", label: "Franchise" },
    { to: "/hakkimizda", label: "Hakkimizda" },
    { to: "/iletisim", label: "Contact" },
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
