import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bookmark, ChevronRight, Home } from 'react-feather';

const SolutionSet = () => {
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [letterFilter, setLetterFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch country data');
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    const handleNavigation = (countryName) => {
        navigate(`/country/${countryName}`);
    //   navigate('/solutionSets')
    };

    const filteredCountries = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLetter = letterFilter ? country.name.common.startsWith(letterFilter) : true;
        return matchesSearch && matchesLetter;
    });

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="w-full bg-white shadow-lg flex items-center p-4">
                <div className="flex items-center gap-2">
                    <Home className="text-gray-700" size={20} />
                    <ChevronRight className="text-gray-700" size={20} />
                    <span className="text-sm text-gray-700">WHITEPAPERS</span>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row lg:justify-start items-center space-y-4 lg:space-y-0 p-6">
                <div className="lg:ml-12 flex items-center bg-white p-4 rounded-lg shadow-sm w-full lg:w-auto lg:flex-grow-0">
                    <span className="font-semibold mr-4">FILTER:</span>
                    <div className="flex flex-wrap gap-1">
                        {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
                            <button
                                key={letter}
                                className={`p-1 rounded-lg text-sm text-black ${letterFilter === letter ? 'font-bold underline' : ''}`}
                                onClick={() => setLetterFilter(letter)}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center border rounded-lg bg-white shadow-sm p-4 w-full lg:w-1/3 lg:ml-16">
                    <input
                        type="text"
                        placeholder="Search for a Solution Set..."
                        className="ml-10 outline-none w-full text-gray-700"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:place-items-center">
                    {filteredCountries.map((country) => (
                        <div
                            key={country.cca3}
                            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 border border-gray-200 bg-white overflow-hidden"
                        >
                            <div
                                className="flex gap-4 items-center p-4 cursor-pointer"
                                onClick={() => handleNavigation(country.name.common)}
                            >
                                <div className="w-1/2 p-1 border-4 border-teal-400 rounded-lg">
                                    <img
                                        src={country.flags.png}
                                        alt={`${country.name.common} flag`}
                                        className="w-full h-32 object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <h2
                                        className="text-lg font-bold cursor-pointer hover:underline"
                                        onClick={() => handleNavigation(country.name.common)}
                                    >
                                        {country.name.common}
                                    </h2>
                                    <p className="text-gray-700 flex items-center">
                                        {country.population.toLocaleString()} solutions
                                    </p>
                                    <Bookmark className="ml-2 text-gray-700" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionSet;

