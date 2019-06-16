import FilmsPage from '../pages/Films';
import StarshipsPage from '../pages/Starships';
import SpeciesPage from '../pages/Species';
import PlanetsPage from '../pages/Planets';

export default [
    {
        name: 'FILMS',
        path: '/films',
        exact: true,
        Component: FilmsPage,
    },
    {
        name: 'STARSHIPS',
        path: '/starships',
        exact: true,
        Component: StarshipsPage,
    },
    {
        name: 'SPECIES',
        path: '/species',
        exact: true,
        Component: SpeciesPage,
    },
    {
        name: 'PLANETS',
        path: '/planets',
        exact: true,
        Component: PlanetsPage,
    }
];
