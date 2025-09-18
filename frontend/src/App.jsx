import React from 'react';
import { Row, Col, Spin, Modal, Form, Input, Button, Typography, Space, Divider, ConfigProvider } from 'antd';
import UserCard from './UserCard.jsx';
import { UseAppContext } from './context/AppContext.jsx';
import './App.css';

const App = () => {
    const { users, loading, editingUser, modalOpen, setModalOpen, updateUser } = UseAppContext();
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            const updatedUser = { ...editingUser, ...values };
            updateUser(updatedUser);
            form.resetFields();
        });
    };

    const handleCancel = () => {
        setModalOpen(false);
        form.resetFields();
    };

    React.useEffect(() => {
        if (editingUser) {
            form.setFieldsValue(editingUser);
        }
    }, [editingUser, form]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1e3a8a',
                    fontFamily: 'Inter, sans-serif',
                    colorSuccess: '#10b981',
                    colorError: '#ef4444',
                    borderRadius: 8,
                },
            }}
        >
            <div className="app-container">
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Typography.Title level={1} style={{ textAlign: 'center' }}>
                        User Profiles
                    </Typography.Title>
                    <Divider />
                    <Row gutter={[32, 32]} justify="center" align="top">
                        {users.map(user => (
                    <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
                        <UserCard user={user} />
                    </Col>
                ))}
            </Row>
                </Space>
                <Modal
                    title={<Typography.Title level={4}>Edit User</Typography.Title>}
                    open={modalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Save"
                    cancelText="Cancel"
                >
                    <Form form={form} layout="vertical">
                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
                            <Input placeholder="Enter name" />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter valid email' }]}>
                            <Input placeholder="Enter email" />
                        </Form.Item>
                        <Form.Item name="phone" label="Phone">
                            <Input placeholder="Enter phone" />
                        </Form.Item>
                        <Form.Item name="website" label="Website">
                            <Input placeholder="Enter website" />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </ConfigProvider>
    );
};

export default App;
