import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                <MotionBTTContainer
                    transition={{ delay: 0.2, duration: 0.5 }}
                ></MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        A revolução na reserva de quadras esportivas.
                    </PageTitle>
                </MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Descubra a Quadraz, sua nova plataforma para aluguel
                            de quadras esportivas. Nossa plataforma oferece uma
                            maneira simples e eficiente de encontrar e reservar
                            quadras para suas atividades esportivas favoritas.
                            Experimente agora a facilidade e a inovação no
                            agendamento online, com uma interface amigável e
                            funcionalidades que tornam a reserva mais rápida e
                            conveniente.
                        </p>
                    </Content>
                </MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div
                        className="page-banner--image"
                        style={{
                            marginTop: "50px"
                        }}
                    >
                        <Image
                            src="/quadraz-hero-banner.svg"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
