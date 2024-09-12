import { SectionContainer } from "@components/Section";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-8 flex flex-col items-center">
                    {" "}
                    <div className="footer-links mb-2 flex justify-center gap-8">
                        {" "}
                        <div className="footer--logo">
                            <Link href="/">
                                <Image
                                    src="/quadraz.svg"
                                    alt="logo"
                                    className="w-32 h-auto"
                                    height="50"
                                    width="200"
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-2 text-center">
                    <p className="my-0">
                        © {year} Quadraz. Todos os direitos reservados
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
