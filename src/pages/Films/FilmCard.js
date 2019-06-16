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
                <ModalHeader onClickClose={this.onClickShowDetails} title={item.title} />
                <ModalBody>
                    <p>Producer : {item.producer}</p>
                    <p>Director : {item.director}</p>
                    <p>Release Date : {item.release_date}</p>
                    <div>
                        Synopsis: <p className="u-margin0">{item.opening_crawl}</p>
                    </div>
                </ModalBody>
            </Modal>

        )
    }

    render() {
        const { index, item, filmDataLength } = this.props;
        const { isModalOpen } = this.state;

        return (
            <Fragment>
                <div
                    className={cls('u-borderRadius20 u-border1Greyscale', {
                        'u-marginVertical16': index !== 0,
                        'u-marginBottom0': index === filmDataLength - 1,
                    })}
                >
                    <div className="filmSection u-padding16">
                        <div className="titleSection"><h2 className="u-margin0">{item.title}</h2></div>
                        <div className="filmSectionContent">
                            <div className="u-marginVertical16">
                                <p className="u-margin0">Release Date : {item.release_date}</p>
                                <RoundedButton className="u-marginTop10" name="SHOW DETAILS" onClick={() => this.onClickShowDetails(item)} />
                            </div>
                            <p className="u-margin0">{item.opening_crawl}</p>
                        </div>
                    </div>
                </div>
                {isModalOpen && this.renderModal()}
            </Fragment>
        )
    }
}