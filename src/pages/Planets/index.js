import React, { Component, Fragment } from 'react';
import { fetchPlanets } from '../../utils/services/planets.js';
import PlanetsContent from './content.js';
import SearchInput from '../../components/Input/Search/index.js';
import EmptyState from '../../components/Card/EmptyState.js';
import CircularProgress from '../../components/Svg/CircularProgress/index.js';

class PlanetsPage extends Component {
    state = {
        planetsData: null,
        searchRes: null,
        value: '',
    }

    async componentDidMount() {
        const { data } = await fetchPlanets();
        this.setState({ planetsData: data });
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
        const { planetsData, searchRes, value } = this.state;

        return (
            planetsData ? (
                <Fragment>
                    <SearchInput className="u-width50Percent u-marginBottom16 u-height30 u-paddingHorizontal10" keyToSearch="name" data={planetsData.results} onChange={this.onSearchChange} placeholder="Find planets by name..." />
                    {value.length > 0 && !searchRes && <EmptyState />}
                    <PlanetsContent planetsData={!searchRes ? planetsData.results : searchRes} />
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

export default PlanetsPage;
