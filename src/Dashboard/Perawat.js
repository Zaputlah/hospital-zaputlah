import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const Perawat = () => {
    return (
        <Container fluid>
            <h2>Nurse Dashboard</h2>
            <Row>
                <Col md="4">
                    <Card>
                        <CardHeader>Melihat Jadwal Tugas Perawat</CardHeader>
                        <CardBody>
                            {/* Jadwal Tugas Perawat */}
                            <ListGroup>
                                <ListGroupItem>Jadwal Tugas 1</ListGroupItem>
                                <ListGroupItem>Jadwal Tugas 2</ListGroupItem>
                                <ListGroupItem>Jadwal Tugas 3</ListGroupItem>
                                {/* ... */}
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardHeader>Rekam Medis</CardHeader>
                        <CardBody>
                            {/* Rekam Medis Pasien Terkait */}
                            {/* ... */}
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardHeader>Pengingat Pasien</CardHeader>
                        <CardBody>
                            {/* Kirim Pengingat Kepada Pasien */}
                            {/* ... */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Perawat;
