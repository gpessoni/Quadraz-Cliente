import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";

const navigation = [
    { name: "Início", to: "/", href: "/" },
    { name: "Quadras", to: "/courts", href: "/courts" },
    { name: "Centros de Esportes", to: "/sportcenter", href: "/sportcenter" }
];

export const NavPages = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => setIsNavOpen(false);

    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isNavOpen}
                >
                    <span className="sr-only">Abrir menu principal</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>
                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="header-nav--menu-item"
                            >
                                <a
                                    href={item.href}
                                    className={`menu-item--link flex items-center ${
                                        router.pathname === item.href
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={closeNav}
                                >
                                    {item.name}
                                    {item.isArrow && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <Icon
                                                icon="material-symbols:arrow-outward"
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
