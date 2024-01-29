import React, { useState } from 'react';
import StarRatingFilter from '../components/StarRatingFilter';

const Search = () => {
    const [selectedStars, setSelectedStars] = useState<string[]>([]);

    const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const startRating = event.target.value;

        setSelectedStars((prevStars) => event.target.checked
            ? [...prevStars, startRating]
            : prevStars.filter((star) => star !== startRating)
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
                        Filter by:
                    </h3>
                    <StarRatingFilter selectedStar={selectedStars} onChange={handleStarsChange} />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <select
                        className="p-2 border rounded-md"
                    >
                        <option value="">Sort By</option>
                        <option value="starRating">Star Rating</option>
                        <option value="pricePerNightAsc">Price Per Night (low to high)</option>
                        <option value="pricePerNightDesc">Price Per Night (high to low)</option>

                    </select>
                </div>
            </div>
        </div>
    );
};

export default Search;