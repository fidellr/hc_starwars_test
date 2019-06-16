import React, { Component, Fragment } from 'react';
import { fetchSpecies } from '../../utils/services/species';
import SpeciesContent from './content';
import SearchInput from '../../components/Input/Search';
import EmptyState from '../../components/Card/EmptyState';
import CircularProgress from '../../components/Svg/CircularProgress';

class SpeciesPage extends Component {
    state = {
        speciesData: null,
        searchRes: null,
        value: '',
    }

    async componentDidMount() {
        const { data } = await fetchSpecies();
        this.setState({ speciesData: data });

    }

    onSearchChange = (value, searchRes) => {
        this.setState({ value });

        if (!searchRes || searchRes.length < 1 || value.length < 1) {
            this.setState({ searchRes: null });
            return;
        }

        this.setState({ searchRes });
    }

    render() {
        const { speciesData, searchRes, value } = this.state;

        return (
            speciesData ? (
                <Fragment>
                    <SearchInput className="u-width50Percent u-marginBottom16 u-height30 u-paddingHorizontal10" keyToSearch="name" data={speciesData.results} onChange={this.onSearchChange} placeholder="Find species by name..." />
                    {value.length > 0 && !searchRes && <EmptyState />}
                    <SpeciesContent speciesData={!searchRes ? speciesData.results : searchRes} />
                </Fragment>
            ) : (
                    <div className="u-textAlignCenter">
                        <p>Please wait...</p>
                        <CircularProgress />
                    </div>
                )
        )
    }
}

export default SpeciesPage;
