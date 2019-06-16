import React, { Component, Fragment } from 'react';
import cls from 'classnames';
import RoundedButton from '../../components/Buttons/Rounded';
import Modal, { ModalHeader, ModalBody } from '../../components/Modal';

export default class extends Component {
    state = {
        isModalOpen: false,
        selectedItem: null,
    }

    onClickShowDetails = (item) => {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen, selectedItem: item });
        console.log(isModalOpen, item)
    }

    renderModal = () => {
        const { item } = this.props;
        return (
            <Modal>
                <ModalHeader onClickClose={this.onClickShowDetails} title={item.name} />
                <ModalBody>
                    <p>The climate of this planet : {item.climate}</p>
                    <p>Terrain : {item.terrain}</p>
                    <p>Population : {item.population}</p>
                    <p>Diameter : {item.diameter}</p>
                    <p>Gravity : {item.gravity}</p>
                    <p>Surface water : {item.surface_water}</p>
                    <p>Orbital period : {item.orbital_period}</p>
                    <p>Rotation period : {item.rotation_period}</p>
                </ModalBody>
            </Modal>

        )
    }

    render() {
        const { index, item, planetsDataLength } = this.props;
        const { isModalOpen } = this.state;

        return (
            <Fragment>
                <div
                    className={cls('u-borderRadius20 u-border1Greyscale', {
                        'u-marginVertical16': index !== 0,
                        'u-marginBottom0': index === planetsDataLength - 1,
                    })}
                >
                    <div className="filmSection u-padding16">
                        <div className="titleSection"><h2 className="u-margin0">{item.name}</h2></div>
                        <div className="filmSectionContent">
                            <div className="u-marginVertical16">
                                <p className="u-margin0">Terrain : {item.terrain}</p>
                                <p className="u-margin0">Population : {item.population}</p>
                                <RoundedButton className="u-marginTop10" name="SHOW DETAILS" onClick={() => this.onClickShowDetails(item)} />
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && this.renderModal()}
            </Fragment>
        )
    }
}