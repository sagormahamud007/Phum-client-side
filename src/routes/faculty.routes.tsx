import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyOfferedCourse from "../pages/faculty/FacultyOfferedCourse";

export const facultyPaths = [
    {
        name: 'Faculty',
        path: 'faculty',
        element: <FacultyDashboard />
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <FacultyOfferedCourse />
    },
]

