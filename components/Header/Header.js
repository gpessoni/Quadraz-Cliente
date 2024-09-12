import { ButtonGroup } from "@components/Button";
import { Nav } from "@components/Nav";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
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
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="https://api.whatsapp.com/send?phone=5516991033446&text=Hello!%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20more%20information%20on%20how%20you%20can%20help%20my%20business%20thrive%20in%20the%20digital%20world.%20Can%20we%20chat?%22"
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
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
