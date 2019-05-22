import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import EmployeeListComponent from '../../Components/Employee/EmployeeListComponent';
import EmployeeFormComponent from '../../Components/Employee/EmployeeFormComponent';

class EmployeeContainer extends Component {
    state = {
        modalCreateEmployee: false,
        titleModal: 'Agregar cliente',
    }
    toggleConfirm = () => {
        this.setState({ modalCreateEmployee: !this.state.modalCreateEmployee });
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modalCreateEmployee} className={'modal-success'} toggle={this.toggleConfirm}>
                    <ModalHeader toggle={this.toggleConfirm}>{this.state.titleModal}</ModalHeader>
                    <ModalBody>
                        <EmployeeFormComponent
                            onAccept={this.createEmployee}
                            onCancel={this.toggleConfirm}
                        />
                    </ModalBody>
                </Modal>
                <EmployeeListComponent
                    onOpenModal={this.toggleConfirm} />
            </div>
        )
    }
}

export default EmployeeContainer;