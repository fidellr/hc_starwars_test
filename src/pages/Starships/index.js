import React, { Component, Fragment } from 'react';
import { fetchStarships } from '../../utils/services/starships.js';
import StarshipsContent from './content.js';
import SearchInput from '../../components/Input/Search/index.js';
import EmptyState from '../../components/Card/EmptyState.js';
import CircularProgress from '../../components/Svg/CircularProgress/index.js';

class StarshipsPage extends Component {
    state = {
        starshipsData: null,
        searchRes: null,
        value: '',
    }

    async componentDidMount() {
        const { data } = await fetchStarships();
        this.setState({ starshipsData: data });
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
        const { starshipsData, searchRes, value } = this.state;

        return (
            starshipsData ? (
                <Fragment>
                    <SearchInput className="u-width50Percent u-marginBottom16 u-height30 u-paddingHorizontal10" keyToSearch="name" data={starshipsData.results} onChange={this.onSearchChange} placeholder="Find starships by name..." />
                    {value.length > 0 && !searchRes && <EmptyState />}
                    <StarshipsContent starshipsData={!searchRes ? starshipsData.results : searchRes} />
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

export default StarshipsPage;
