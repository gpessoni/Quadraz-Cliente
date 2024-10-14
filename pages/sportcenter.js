import { Header } from "@components/Header";
import { HeaderLogo } from "@components/Header/HeaderPages";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const SportCenterList = () => {
    const [selectedCenter, setSelectedCenter] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sportCenters, setSportCenters] = useState([]);
    const [filteredCenters, setFilteredCenters] = useState([]);

    const fetchSportCenters = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/sports-center/list"
            );
            if (!response.ok) {
                throw new Error("Erro ao buscar centros esportivos");
            }
            const data = await response.json();
            setSportCenters(data);
            setFilteredCenters(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSportCenters(); // Chama a função para buscar os dados quando o componente é montado
    }, []);

    const handleSelectCenter = (center) => {
        setSelectedCenter(center);
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterCenters(term);
    };

    // Função para filtrar os centros esportivos
    const filterCenters = (searchTerm) => {
        const filtered = sportCenters.filter((center) =>
            center.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCenters(filtered);
    };

    const getImageSrc = (logo) => {
        return logo?.startsWith("data:image/")
            ? logo
            : `data:image/jpeg;base64,${logo}`;
    };

    return (
        <>
            <HeaderLogo />
            <div className="container mx-auto px-4">
                <h1
                    className="text-4xl text-center font-bold mb-8"
                    style={{ marginTop: "150px" }}
                >
                    Centros Esportivos
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Pesquisar por nome"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCenters.map((center) => (
                        <div
                            key={center.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={getImageSrc(center.logo)} // Usa a função para obter o src da imagem
                                alt={center.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">
                                    {center.name}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {center.description}
                                </p>
                                <button
                                    onClick={() => handleSelectCenter(center)}
                                    className="w-full text-white bg-[#2e2d37] py-2 rounded transition-all duration-200 ease-in-out hover:shadow-lg transform hover:scale-105"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCenter && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-2xl font-bold">
                                    {selectedCenter.name}
                                </h2>
                                <button
                                    onClick={() => setSelectedCenter(null)}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>
                            <div className="p-4">
                                <img
                                    src={getImageSrc(selectedCenter.logo)} // Usa a função para obter o src da imagem
                                    alt={selectedCenter.name}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <p className="mb-2">
                                    <strong>Descrição:</strong>{" "}
                                    {selectedCenter.description}
                                </p>
                                <p className="mb-2">
                                    <strong>Endereço:</strong>{" "}
                                    {selectedCenter.address},{" "}
                                    {selectedCenter.number} -{" "}
                                    {selectedCenter.neighborhood}
                                </p>
                                <p className="mb-2">
                                    <strong>Cidade:</strong>{" "}
                                    {selectedCenter.city}
                                </p>
                                <p className="mb-2">
                                    <strong>Estado:</strong>{" "}
                                    {selectedCenter.state}
                                </p>
                                <p className="mb-2">
                                    <strong>País:</strong>{" "}
                                    {selectedCenter.country}
                                </p>
                                <p className="mb-2">
                                    <strong>Email:</strong>{" "}
                                    {selectedCenter.email}
                                </p>
                                <p className="mb-2">
                                    <strong>Telefone:</strong>{" "}
                                    {selectedCenter.phone}
                                </p>
                                <p className="mb-2">
                                    <strong>WiFi:</strong>{" "}
                                    {selectedCenter.hasWifi ? "Sim" : "Não"}
                                </p>
                                <p className="mb-2">
                                    <strong>
                                        Capacidade de Estacionamento:
                                    </strong>{" "}
                                    {selectedCenter.parkingCapacity}
                                </p>
                                <p>
                                    <strong>Parquinho:</strong>{" "}
                                    {selectedCenter.hasPlayground
                                        ? "Sim"
                                        : "Não"}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SportCenterList;
