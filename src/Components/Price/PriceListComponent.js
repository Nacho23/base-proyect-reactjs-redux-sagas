import React, { Component } from 'react';
import {
    Card, Table,
    CardBody, Collapse,
    Button, Row, Col,
    FormGroup, Label, Input,
    InputGroup, InputGroupAddon,
    Tooltip,
} from 'reactstrap';
import util from '../../Util/util';

export default class PriceListComponent extends Component {

    render() {
        return (
            <Card>
                <CardBody>
                    <Button color="success" className="btn-sm mr-1 mb-1 float-right" onClick={this.props.onOpenModal}><i className="fa fa-plus-circle"></i> Agregar</Button>
                    <Table>
                        <thead>
                            <th>ID</th>
                            <th>Código</th>
                            <th>Descripción</th>
                            <th>Proveedor</th>
                            <th>Precio unitario</th>
                            <th>Stock</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <td>1</td>
                            <td>7009662710</td>
                            <td>Bebida coca-cola 1L</td>
                            <td>Coca cola</td>
                            <td>{util.formatMoney(1250)}</td>
                            <td>Stock</td>
                            <td>
                                <Button color="danger" className="btn-sm"><i className="fa fa-close"></i></Button>
                            </td>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}