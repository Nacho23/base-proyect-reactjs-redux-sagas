import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import PriceListComponent from '../../Components/Price/PriceListComponent';

class PriceContainer extends Component {
    state = {
    }
    openForm = () => {
        console.log('new page');
    }
    render() {
        return (
            <div>
                <PriceListComponent
                    onOpenForm={this.openForm} />
            </div>
        )
    }
}

export default PriceContainer;