import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table
} from 'reactstrap';

const Apoteker = () => {
    return (
        <Container fluid>
            <h2>Pharmacy Dashboard</h2>
            <Row>
                <Col md="6">
                    <Card>
                        <CardHeader>Mengelola Stok Obat</CardHeader>
                        <CardBody>
                            {/* Tabel Stok Obat */}
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Nama Obat</th>
                                        <th>Stok Tersedia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Obat A</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Obat B</td>
                                        <td>50</td>
                                    </tr>
                                    {/* ... */}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardHeader>Faktur dan Pembayaran</CardHeader>
                        <CardBody>
                            {/* Tabel Faktur dan Pembayaran */}
                            {/* ... */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Apoteker;
