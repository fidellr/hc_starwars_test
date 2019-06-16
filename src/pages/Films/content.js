import React from 'react';
import FilmCard from './FilmCard';

export default ({ filmData }) => {
    const sortedData = filmData.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 0;
        return null;
    });

    return (
        <div className="filmContent">
            {sortedData.map((item, index) => (
                <FilmCard key={item.episode_id} index={index} item={item} filmDataLength={filmData.length} />
            ))}
        </div>
    );
}