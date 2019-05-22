import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import PriceFormComponent from '../../Components/Price/PriceFormComponent';

class PriceFormContainer extends Component {
    state = {
    }
    render() {
        return (
            <div>
                <PriceFormComponent
                    onAccept={this.createPrice}
                    onCancel={this.toggleConfirm}
                />
            </div>
        )
    }
}

export default PriceFormContainer;