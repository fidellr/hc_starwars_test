import React from 'react';
import PlanetsCard from './PlanetsCard';

export default ({
    planetsData,
}) => {
    const sortedData = planetsData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 0;
        return null;
    });

    return (
        sortedData.map((item, index) => (
            <PlanetsCard key={item.name} index={index} item={item} planetsDataLength={sortedData.length} />
        ))
    );
}