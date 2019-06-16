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
                    <p>Classification : {item.classification}</p>
                    <p>Designation : {item.designation}</p>
                    <p>Eye colors : {item.eye_colors}</p>
                    <p>Hair colors : {item.hair_colors}</p>
                    <p>Skin colors : {item.skin_colors}</p>
                    <p>Language : {item.language}</p>
                    <p>Average Height : {item.average_height}</p>
                    <p>Average Lifespan : {item.average_lifespan}</p>
                </ModalBody>
            </Modal>
        )
    }

    render() {
        const { item, index, speciesDataLength } = this.props;
        const { isModalOpen } = this.state;
        console.log(item)
        return (
            <Fragment>
                <div className={cls('u-borderRadius20 u-border1Greyscale u-padding16', {
                    'u-marginVertical16': index !== 0,
                    'u-marginBottom0': index === speciesDataLength - 1,
                })}>
                    <h2 className="u-margin0">{item.name}</h2>
                    <p>Classification : {item.classification}</p>
                    <p>Designation : {item.designation}</p>
                    <RoundedButton className="u-marginTop10" name="SHOW DETAILS" onClick={() => this.onClickShowDetails(item)} />
                </div>
                {isModalOpen && this.renderModal()}
            </Fragment>
        )
    }
}

export default StarshipsCard;
