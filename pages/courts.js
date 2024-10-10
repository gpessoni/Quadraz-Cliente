import { Header } from "@components/Header";
import { HeaderLogo } from "@components/Header/HeaderLogo";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const courts = [
    {
        id: "1",
        name: "Quadra Central",
        hasLight: true,
        hasRoof: false,
        width: 30,
        height: 50,
        hasGrandstand: false,
        grandstandCapacity: 0,
        floor: "Concreto",
        sportCenter: "Centro Esportivo ABC",
        sports: ["Futebol", "Vôlei"],
        images: [
            "https://polyesportiva.com.br/storage/app/uploads/oIcdo6p4IA4seTkyH4TM4AGrNF2xaKcyzGLzEAXf.jpeg"
        ]
    },
    {
        id: "2",
        name: "Arena Esportiva",
        hasLight: true,
        hasRoof: true,
        width: 40,
        height: 60,
        hasGrandstand: true,
        grandstandCapacity: 500,
        floor: "Madeira",
        sportCenter: "Centro Esportivo XYZ",
        sports: ["Basquete", "Tênis"],
        images: [
            "https://altipisos.com.br/wp-content/uploads/2022/05/quadra-esportiva-1-1.jpeg"
        ]
    },
    {
        id: "3",
        name: "Arena Esportiva",
        hasLight: true,
        hasRoof: true,
        width: 40,
        height: 60,
        hasGrandstand: true,
        grandstandCapacity: 500,
        floor: "Madeira",
        sportCenter: "Centro Esportivo XYZ",
        sports: ["Basquete", "Tênis"],
        images: [
            "https://altipisos.com.br/wp-content/uploads/2022/05/quadra-esportiva-1-1.jpeg"
        ]
    }
];

const CourtList = () => {
    const [selectedCourt, setSelectedCourt] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name");
    const [sportFilter, setSportFilter] = useState(""); // Estado para o filtro de esportes
    const [filteredCourts, setFilteredCourts] = useState(courts);

    const handleSelectCourt = (court) => {
        setSelectedCourt(court);
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        filterCourts(term, sportFilter);
    };

    const handleSportFilter = (e) => {
        const selectedSport = e.target.value;
        setSportFilter(selectedSport);

        filterCourts(searchTerm, selectedSport);
    };

    // Função para filtrar as quadras
    const filterCourts = (searchTerm, sport) => {
        const filtered = courts.filter((court) => {
            const matchesSearch =
                court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                court.sportCenter
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const matchesSport = sport ? court.sports.includes(sport) : true;
            return matchesSearch && matchesSport;
        });
        setFilteredCourts(filtered);
    };

    // Função para ordenar as quadras
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sorted = [...filteredCourts].sort((a, b) => {
            if (option === "name") {
                return a.name.localeCompare(b.name);
            } else if (option === "size") {
                return a.width * a.height - b.width * b.height;
            } else if (option === "capacity") {
                return b.grandstandCapacity - a.grandstandCapacity;
            }
            return 0;
        });
        setFilteredCourts(sorted);
    };

    return (
        <>
            <HeaderLogo />
            <div className="container mx-auto px-4">
                <h1
                    className="text-4xl text-center font-bold mb-8"
                    style={{
                        marginTop: "150px"
                    }}
                ></h1>

                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Pesquisar por nome ou centro esportivo"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>

                    <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <select
                            value={sportFilter}
                            onChange={handleSportFilter}
                            className="w-full pl-3 pr-6 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Selecionar Esporte</option>
                            <option value="Futebol">Futebol</option>
                            <option value="Vôlei">Vôlei</option>
                            <option value="Basquete">Basquete</option>
                            <option value="Tênis">Tênis</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/3">
                        <select
                            value={sortOption}
                            onChange={handleSort}
                            className="w-full pl-3 pr-6 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        >
                            <option value="name">Ordenar por Nome</option>
                            <option value="size">Ordenar por Tamanho</option>
                            <option value="capacity">
                                Ordenar por Capacidade
                            </option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourts.map((court) => (
                        <div
                            key={court.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={court.images[0]}
                                alt={court.name}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">
                                    {court.name}
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {court.sportCenter} - Piso: {court.floor}
                                </p>
                                <ul className="mb-4 text-gray-700">
                                    <li>
                                        <strong>Esportes:</strong>{" "}
                                        {court.sports.join(", ")}
                                    </li>
                                    <li>
                                        <strong>Dimensões:</strong>{" "}
                                        {court.width}m x {court.height}m
                                    </li>
                                    <li>
                                        <strong>Luz:</strong>{" "}
                                        {court.hasLight ? "Sim" : "Não"}
                                    </li>
                                    <li>
                                        <strong>Cobertura:</strong>{" "}
                                        {court.hasRoof ? "Sim" : "Não"}
                                    </li>

                                    <li>
                                        <strong>
                                            Capacidade da Arquibancada:
                                        </strong>{" "}
                                        {court.grandstandCapacity}
                                    </li>
                                </ul>
                                <button
                                    onClick={() => handleSelectCourt(court)}
                                    className="w-full text-white bg-[#2e2d37] py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCourt && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-2xl font-bold">
                                    {selectedCourt.name}
                                </h2>
                                <button
                                    onClick={() => setSelectedCourt(null)}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>
                            <div className="p-4">
                                <img
                                    src={selectedCourt.images[0]}
                                    alt={selectedCourt.name}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <p className="mb-2">
                                    <strong>Centro Esportivo:</strong>{" "}
                                    {selectedCourt.sportCenter}
                                </p>
                                <p className="mb-2">
                                    <strong>Dimensões:</strong>{" "}
                                    {selectedCourt.width}m x{" "}
                                    {selectedCourt.height}m
                                </p>
                                <p className="mb-2">
                                    <strong>Piso:</strong> {selectedCourt.floor}
                                </p>
                                <p className="mb-2">
                                    <strong>Luz:</strong>{" "}
                                    {selectedCourt.hasLight ? "Sim" : "Não"}
                                </p>
                                <p className="mb-2">
                                    <strong>Cobertura:</strong>{" "}
                                    {selectedCourt.hasRoof ? "Sim" : "Não"}
                                </p>
                                <p className="mb-2">
                                    <strong>Capacidade da Arquibancada:</strong>{" "}
                                    {selectedCourt.grandstandCapacity}
                                </p>
                                <p>
                                    <strong>Esportes:</strong>{" "}
                                    {selectedCourt.sports.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CourtList;
