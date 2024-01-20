import StudentDashboard from "../pages/student/StudentDashboard";
import StudentOfferedCourse from "../pages/student/StudentOfferedCourse";

export const studentPaths = [
    {
        name: 'Student',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <StudentOfferedCourse />
    }
]

