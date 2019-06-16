import React from 'react';
import StarshipsCard from './StarshipsCard';

export default ({
    starshipsData,
}) => {
    const sortedData = starshipsData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 0;
        return null;
    });

    return (
        <div className="starshipsContent">
            {sortedData.map((item, index) => (
                <StarshipsCard
                    key={item.name}
                    index={index}
                    item={item}
                    starshipsDataLength={sortedData.length}
                />
            ))}
        </div>
    );
}