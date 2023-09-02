import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';
import classnames from 'classnames';

const Dokter = () => {
    const [activeTab, setActiveTab] = React.useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <>
            ini dashboard Dokter
        </>
        // <Container fluid>
        //     <h2>Doctor Dashboard</h2>
        //     <Row>
        //         <Col md="4">
        //             <Card>
        //                 <CardHeader>Mengelola Jadwal Janji Temu Pasien</CardHeader>
        //                 <CardBody>
        //                     {/* Jadwal Janji Temu Pasien */}
        //                     <p>Jadwal Janji Temu Pasien:</p>
        //                     {/* ... */}
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //         <Col md="8">
        //             <Card>
        //                 <CardHeader>Rekam Medis</CardHeader>
        //                 <CardBody>
        //                     {/* Rekam Medis Pasien */}
        //                     {/* ... */}
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col md="6">
        //             <Card>
        //                 <CardHeader>Preskripsi</CardHeader>
        //                 <CardBody>
        //                     {/* Tulis dan Kelola Resep Obat */}
        //                     {/* ... */}
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //         <Col md="6">
        //             <Card>
        //                 <CardHeader>Laboratorium</CardHeader>
        //                 <CardBody>
        //                     {/* Lihat dan Kelola Hasil Tes Laboratorium */}
        //                     {/* ... */}
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default Dokter;
