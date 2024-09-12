import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { HomeBanner } from "@components/Banner/HomeBanner";
import {
    Card,
    CardBody,
    CardGroup,
    CardHeader,
    CardImage
} from "@components/Card";
import { Columns } from "@components/Columns";
import { Content } from "@components/Content";
import { ContentImage } from "@components/ContentImage";
import { Layout } from "@components/Layout";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import SEO from "@components/SEO/SEO";
import { PageTitle } from "@components/Title";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Quadraz Online"
                description="Reserve sua quadra esportiva com facilidade!"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20">
                <HomeBanner />
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Benefícios</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Sua Quadra, Seu Jogo, Sem Complicações
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Com o Quadraz, reservar sua quadra esportiva
                                    nunca foi tão fácil. Encontre e reserve o
                                    espaço ideal para suas atividades esportivas
                                    em poucos cliques. Nossa plataforma oferece
                                    uma experiência intuitiva e descomplicada
                                    para que você possa se concentrar no jogo,
                                    não na reserva. Experimente a simplicidade e
                                    a eficiência na hora de agendar suas quadras
                                    e aproveite ao máximo seu tempo esportivo.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            className="feature-tabs"
                            id="reservartion"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>
                                    Descubra as Vantagens
                                </BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Facilitando a Reserva da Sua Quadra
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Com o Quadraz, você tem acesso a uma
                                    plataforma que facilita a reserva de quadras
                                    esportivas de forma rápida e eficiente.
                                    Navegue por diferentes opções, veja a
                                    disponibilidade em tempo real e faça sua
                                    reserva com facilidade. Nossa missão é
                                    tornar o processo de agendamento o mais
                                    simples possível, para que você possa passar
                                    mais tempo jogando e menos tempo
                                    organizando.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.svg"
                                            alt="Reserve com Facilidade"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Reserve com Facilidade
                                        </CardHeader>
                                        <p>
                                            Descubra a simplicidade de reservar
                                            quadras esportivas com o Quadraz.
                                            Nossa plataforma oferece uma
                                            interface intuitiva que permite
                                            encontrar e agendar o espaço
                                            perfeito para suas atividades em
                                            poucos passos. Economize tempo e
                                            aproveite cada momento do seu jogo
                                            com uma reserva sem complicações.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.svg"
                                            alt="Agende e Jogue"
                                            className="mb-20"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Agende e Jogue
                                        </CardHeader>
                                        <p>
                                            Com o Quadraz, você pode agendar sua
                                            quadra em poucos cliques e se
                                            concentrar no que realmente importa:
                                            jogar. Nossa plataforma facilita o
                                            processo de reserva, oferecendo uma
                                            experiência ágil e sem estresse.
                                            Agende, chegue e aproveite sua
                                            partida com total tranquilidade.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>
                                    O que dizem nossos usuários
                                </BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Feedback dos Jogadores
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
