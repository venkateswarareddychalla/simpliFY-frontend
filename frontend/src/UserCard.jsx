import React from 'react';
import { Card, Button, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined } from '@ant-design/icons';
import { UseAppContext } from './context/AppContext.jsx';

const { Meta } = Card;

const UserCard = ({ user }) => {
    const { setEditingUser, setModalOpen, deleteUser } = UseAppContext();

    // Updated avatar URL to use Dicebear API 9.x with seed parameter
    const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.username)}&options[mood][]=happy`;

    const handleEdit = () => {
        setEditingUser(user);
        setModalOpen(true);
    };

    const handleDelete = () => {
        deleteUser(user.id);
    };

    return (
        <Card
            className="user-card"
            style={{ width: '100%', maxWidth: 300 }}
            cover={<Avatar size={100} src={avatarUrl} className="user-avatar" style={{ margin: '16px auto', display: 'block' }} />}
            actions={[
                <Button icon={<HeartOutlined />} className="action-btn" />,
                <Button icon={<EditOutlined />} onClick={handleEdit} className="action-btn" />,
                <Button icon={<DeleteOutlined />} onClick={handleDelete} danger className="action-btn" />
            ]}
        >
            <Meta
                className="card-meta"
                title={<span className="card-meta-title">{user.name}</span>}
                description={
                    <div className="card-meta-description">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                        <p><strong>Company:</strong> {user.company.name}</p>
                        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                    </div>
                }
            />
        </Card>
    );
};

export default UserCard;
