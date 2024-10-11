import { ButtonGroup } from "@components/Button";
import { Nav } from "@components/Nav";
import { SectionContainer } from "@components/Section";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/quadraz.svg"
                                alt="logo"
                                // className="h-6 w-auto"
                                height="50"
                                width="180"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <div
                        onClick={() => {
                            window.location.href = "/courts";
                        }}
                    >
                        <ButtonGroup className="hidden md:block">
                            <a
                                role="button"
                                className="btn btn--secondary lemonsqueezy-button ml-4"
                                style={{
                                    backgroundColor: "#00c800",
                                    color: "white",
                                    fontWeight: "bold"
                                }}
                            >
                                Ver Quadras
                            </a>
                        </ButtonGroup>
                    </div>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
