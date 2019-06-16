import React, { Component, Fragment } from 'react';
import cls from 'classnames';
import Modal, { ModalHeader, ModalBody } from '../../components/Modal';
import RoundedButton from '../../components/Buttons/Rounded';

class StarshipsCard extends Component {
    state = {
        isModalOpen: false,
        selectedItem: null,
    }

    onClickShowDetails = (item) => {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen, selectedItem: item });
    }

    renderModal = () => {
        const { item } = this.props;
        return (
            <Modal>
                <ModalHeader onClickClose={this.onClickShowDetails} title={item.name} />
                <ModalBody>
                    <p>Model : {item.model}</p>
                    <p>Manufacturer : {item.manufacturer}</p>
                    <p>The class of this starships hyperdrive : {item.hyperdrive_rating}</p>
                    <p>Crew : {item.crew}</p>
                    <p>Passengers : {item.passengers}</p>
                    <p>Total this starship has been piloted : {item.pilots.length}</p>
                    <p>The Maximum number of Megalights this starship can travel in a standard hour : {item.MGLT}</p>
                    <p> The maximum number of kilograms that this starship can transport : {item.cargo_capacity}</p>
                    <p>The cost of this starship new, in galactic credits : {item.cost_in_credits}</p>
                </ModalBody>
            </Modal>
        )
    }

    render() {
        const { item, index, starshipsDataLength } = this.props;
        const { isModalOpen } = this.state;

        return (
            <Fragment>
                <div className={cls('u-borderRadius20 u-border1Greyscale u-padding16', {
                    'u-marginVertical16': index !== 0,
                    'u-marginBottom0': index === starshipsDataLength - 1,
                })}>
                    <h2 className="u-margin0">{item.name}</h2>
                    <p>Model : {item.model}</p>
                    <p>Crew : {item.crew}</p>
                    <p>The Maximum number of Megalights this starship can travel in a standard hour : {item.MGLT}</p>
                    <RoundedButton className="u-marginTop10" name="SHOW DETAILS" onClick={() => this.onClickShowDetails(item)} />
                </div>
                {isModalOpen && this.renderModal()}
            </Fragment>
        )
    }
}

export default StarshipsCard;
