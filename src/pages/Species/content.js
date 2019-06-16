import React from 'react';
import SpeciesCard from './SpeciesCard';

export default ({
    speciesData,
}) => {
    const sortedData = speciesData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 0;
        return null;
    });

    return (
        <div className="starshipsContent">
            {sortedData.map((item, index) => (
                <SpeciesCard
                    key={item.name}
                    index={index}
                    item={item}
                    speciesDataLength={sortedData.length}
                />
            ))}
        </div>
    );
}