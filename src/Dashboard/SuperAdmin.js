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

const SuperAdmin = () => {
    const [activeTab, setActiveTab] = React.useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <Container fluid>
            <h2>Super Admin Dashboard</h2>
            <Row>
                <Col md="4">
                    <Card>
                        <CardHeader>Mengelola Pengguna</CardHeader>
                        <CardBody>
                            {/* Pengguna List */}
                            <p>Daftar Pengguna:</p>
                            {/* ... */}
                            {/* Tambah, Edit, dan Hapus Pengguna */}
                            {/* ... */}
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Card>
                        <CardHeader>Pengaturan Sistem</CardHeader>
                        <CardBody>
                            {/* Tab Menu Pengaturan */}
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => toggleTab('1')}
                                    >
                                        Konfigurasi Umum
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => toggleTab('2')}
                                    >
                                        Izin Akses
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => toggleTab('3')}
                                    >
                                        Pengaturan Keamanan
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* Konten Tab Pengaturan */}
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    {/* Konfigurasi Umum */}
                                    {/* ... */}
                                </TabPane>
                                <TabPane tabId="2">
                                    {/* Izin Akses */}
                                    {/* ... */}
                                </TabPane>
                                <TabPane tabId="3">
                                    {/* Pengaturan Keamanan */}
                                    {/* ... */}
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>Laporan Analisis</CardHeader>
                        <CardBody>
                            {/* Laporan Kinerja Rumah Sakit */}
                            {/* ... */}
                            {/* Statistik */}
                            {/* ... */}
                            {/* Analisis Data */}
                            {/* ... */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SuperAdmin;
