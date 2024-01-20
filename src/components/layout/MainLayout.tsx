import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/feature/auth/authSlice";
const { Header, Content } = Layout;
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { createElement } from "react";

// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
//     },
//     {
//         key: "User Management",
//         label: "User Management",
//         children: [
//             {
//                 key: "Create Admin",
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
//             },
//             {
//                 key: "Create Faculty",
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//             },
//             {
//                 key: "Create Student",
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>
//             },
//         ]
//     },

// ]

const MainLayout = () => {
    const dispatch = useAppDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar />
            <Layout>
                <Header>
                    <Button onClick={handleLogOut}>Logout</Button>
                </Header>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;