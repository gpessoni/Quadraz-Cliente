import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Importa os estilos do Swiper
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Importa ícones do react-icons
import { HeaderLogo } from "@components/Header/HeaderPages";

let courtData = [
    {
        id: "1",
        name: "Quadra de Futebol Society",
        sportCenter: "Centro Esportivo ABC",
        floor: "Grama Sintética",
        width: 20,
        height: 40,
        hasLight: true,
        hasRoof: false,
        hasGrandstand: true,
        grandstandCapacity: 50,
        sports: ["Futebol", "Futsal"],
        images: [
            "https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-poliesportiva-piso-modular-externo-m2-2921.jpg",
            "https://polyesportiva.com.br/storage/app/uploads/MXmwJDnujWMpRTzRpWFlltvftyEuEpFp1QWPm0XM.jpeg",
            "https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-poliesportiva-piso-modular-externo-m2-2921.jpg",
            "https://static.sportit.com.br/public/sportit/imagens/produtos/quadra-poliesportiva-piso-modular-externo-m2-2921.jpg"
        ],
        contact: {
            name: "Carlos Silva",
            phone: "(11) 99999-9999",
            email: "carlos@example.com"
        },
        description:
            "Uma excelente quadra para prática de futebol e futsal, com iluminação adequada e capacidade para 50 pessoas na arquibancada."
    }
];

let sportCenterData = {
    id: "1",
    name: "Centro Esportivo ABC",
    description: "Um centro esportivo completo com diversas instalações.",
    address: "Rua A, 123",
    number: "123",
    neighborhood: "Centro",
    city: "Cidade A",
    state: "SP",
    country: "Brasil",
    email: "contato@centroabc.com.br",
    phone: "1234-5678",
    hasWifi: true,
    wifiPassword: "wifi123",
    hasParking: true,
    parkingCapacity: 50,
    hasPlayground: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: "https://c4.wallpaperflare.com/wallpaper/65/1014/335/soccer-sao-paulo-fc-emblem-logo-hd-wallpaper-preview.jpg"
};

const CourtDetailsPage = () => {
    const {
        name,
        sportCenter,
        floor,
        width,
        height,
        hasLight,
        hasRoof,
        hasGrandstand,
        grandstandCapacity,
        sports,
        images,
        contact,
        description
    } = courtData[0];

    return (
        <>
            <HeaderLogo />
            <div
                style={{ marginTop: "150px" }}
                className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row bg-white rounded-lg shadow-lg"
            >
                <div className="md:w-2/3 mb-4">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <h2 className="text-2xl text-gray-600 mb-2">
                        {sportCenter}
                    </h2>
                    <Swiper
                        spaceBetween={10}
                        pagination={true}
                        className="mySwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="text-gray-700 mb-4 mt-4">{description}</p>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">
                            Informações da Quadra:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>
                                <strong>Piso:</strong> {floor}
                            </li>
                            <li>
                                <strong>Dimensões:</strong> {width}m x {height}m
                            </li>
                            <li>
                                <strong>Iluminação:</strong>{" "}
                                {hasLight ? "Sim" : "Não"}
                            </li>
                            <li>
                                <strong>Cobertura:</strong>{" "}
                                {hasRoof ? "Sim" : "Não"}
                            </li>
                            <li>
                                <strong>Arquibancada:</strong>{" "}
                                {hasGrandstand
                                    ? `Sim (${grandstandCapacity} lugares)`
                                    : "Não"}
                            </li>
                            <li>
                                <strong>Esportes disponíveis:</strong>{" "}
                                {sports.join(", ")}
                            </li>
                        </ul>
                    </div>
                    <hr /> <hr />
                    <div className="mt-6 p-4 bg-white-200 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">
                            Sobre o Centro Esportivo:
                        </h3>
                        <img
                            src={sportCenterData.image}
                            alt={sportCenterData.name}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                        />
                        <p>
                            <strong>Nome:</strong> {sportCenterData.name}
                        </p>
                        <p>
                            <strong>Descrição:</strong>{" "}
                            {sportCenterData.description}
                        </p>
                        <p>
                            <strong>Endereço:</strong> {sportCenterData.address}
                            , {sportCenterData.number},{" "}
                            {sportCenterData.neighborhood},{" "}
                            {sportCenterData.city} - {sportCenterData.state},{" "}
                            {sportCenterData.country}
                        </p>
                        <p>
                            <strong>Telefone:</strong> {sportCenterData.phone}
                        </p>
                        <p>
                            <strong>Email:</strong> {sportCenterData.email}
                        </p>
                        {sportCenterData.hasWifi && (
                            <p>
                                <strong>Wi-Fi:</strong> Sim (Senha:{" "}
                                {sportCenterData.wifiPassword})
                            </p>
                        )}
                        {sportCenterData.hasParking && (
                            <p>
                                <strong>Estacionamento:</strong> Sim
                                (Capacidade: {sportCenterData.parkingCapacity}{" "}
                                veículos)
                            </p>
                        )}
                        {sportCenterData.hasPlayground && (
                            <p>
                                <strong>Playground:</strong> Sim
                            </p>
                        )}
                    </div>
                </div>

                <div
                    style={{
                        maxHeight: "200px",
                        overflowY: "auto",
                        marginLeft: "30px"
                    }}
                    className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-lg font-semibold mb-2">Contato:</h3>
                    <div className="flex items-center mb-2">
                        <FaPhone className="text-gray-600 mr-2" />
                        <p>
                            <strong>Telefone:</strong> {contact.phone}
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaEnvelope className="text-gray-600 mr-2" />
                        <p>
                            <strong>Email:</strong> {contact.email}
                        </p>
                    </div>
                    <p>
                        <strong>Nome:</strong> {contact.name}
                    </p>
                </div>
            </div>
        </>
    );
};

export default CourtDetailsPage;
