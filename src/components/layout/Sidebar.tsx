import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
}

const Sidebar = () => {
    const role = 'student';
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;

        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "4rem" }} className="demo-logo-vertical">
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;