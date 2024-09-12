import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Juliana Rodrigues",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Agora que usei o Quadraz, posso afirmar que a experiência foi fantástica! A reserva de quadras é extremamente fácil e rápida, e a plataforma oferece uma interface intuitiva. Adorei a forma como posso filtrar por localização e disponibilidade. Sem dúvida, é a melhor maneira de organizar minhas partidas esportivas!",
        rating: 5
    },
    {
        id: uuid(),
        title: "Rafael Lima",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "O Quadraz superou minhas expectativas! A simplicidade e eficiência na marcação de partidas são notáveis. A plataforma é intuitiva e a confirmação de reservas é quase instantânea. Recomendo a todos os entusiastas do esporte que buscam uma solução prática e eficaz para suas reservas.",
        rating: 4
    },
    {
        id: uuid(),
        title: "Isabela Almeida",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "A experiência com o Quadraz foi excelente. A plataforma é rápida, fácil de usar e permite que eu encontre e reserve quadras com apenas alguns cliques. A possibilidade de visualizar a disponibilidade em tempo real é um grande diferencial. Estou muito satisfeita com a funcionalidade e a eficiência do serviço.",
        rating: 5
    },
    {
        id: uuid(),
        title: "Fernando Oliveira",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "O Quadraz realmente faz a diferença quando se trata de reservar quadras esportivas. A interface é limpa e o processo de reserva é simples e direto. A plataforma oferece uma experiência sem fricções, e a comunicação sobre reservas e confirmações é rápida. Estou impressionado com a qualidade do serviço e a inovação que o Quadraz trouxe.",
        rating: 5
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <div className="flex mt-2">
                        {[...Array(5)].map((_, index) => (
                            <Icon
                                key={index}
                                icon="solar:star-bold"
                                className={`h-6 mr-1 ${
                                    index < item.rating
                                        ? "text-secondary-500"
                                        : "text-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
