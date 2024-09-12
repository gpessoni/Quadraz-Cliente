import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Encontre Quadras perfeitas para sua atividade",
        content:
            "O Quadraz oferece filtros avançados para tornar sua busca pela quadra perfeita mais eficiente. Com nossa plataforma, você pode filtrar por localização, tipo de esporte, disponibilidade e muito mais. Encontre exatamente o que você precisa em poucos cliques e reserve sua quadra de forma rápida e fácil. Experimente a flexibilidade e a precisão dos filtros do Quadraz e transforme sua experiência esportiva!",
        align: "right",
        image: "/features1.svg"
    },
    {
        id: uuid(),
        title: "Conquiste Novos Jogadores",
        content:
            "Empresários e gestores de quadras, o Quadraz é a plataforma ideal para ampliar seu alcance e atrair novos jogadores. Cadastre suas quadras e aumente sua visibilidade no mercado esportivo. Nossa plataforma simplifica o processo de reserva e proporciona uma experiência única tanto para você quanto para seus clientes. Junte-se ao Quadraz e transforme a forma como você gerencia e promove seu espaço esportivo!",
        align: "left",
        image: "/features2.svg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={360}
                            height={360}
                            objectFit="cover"
                            alt={item.title}
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
