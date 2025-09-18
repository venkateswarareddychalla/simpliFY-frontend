import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingUser, setEditingUser] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        setModalOpen(false);
        setEditingUser(null);
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const value = {
        users,
        loading,
        editingUser,
        modalOpen,
        setEditingUser,
        setModalOpen,
        updateUser,
        deleteUser
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const UseAppContext = () => useContext(AppContext);

export default AppContext;
