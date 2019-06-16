import React, { Component, Fragment } from 'react';
import { fetchFilms } from '../../utils/services/films';
import FilmsContent from './content';
import SearchInput from '../../components/Input/Search';
import EmptyState from '../../components/Card/EmptyState';
import CircularProgress from '../../components/Svg/CircularProgress';

class FilmsPage extends Component {
    state = {
        filmData: null,
        searchRes: null,
        value: '',
    }

    async componentDidMount() {
        const { data } = await fetchFilms();
        this.setState({ filmData: data });
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
        const { filmData, searchRes, value } = this.state;
        return (
            filmData ? (
                <Fragment>
                    <SearchInput className="u-width50Percent u-marginBottom16 u-height30 u-paddingHorizontal10" keyToSearch="title" data={filmData.results} onChange={this.onSearchChange} placeholder="Find films by title..." />
                    {value.length > 0 && !searchRes && <EmptyState />}
                    <FilmsContent onSearchChange={this.onSearchChange} filmData={!searchRes ? filmData.results : searchRes} />
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

export default FilmsPage;
