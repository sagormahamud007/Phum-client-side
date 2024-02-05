import { useGetAllSemestersQuery } from "../../../redux/feature/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const { data } = useGetAllSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>this is academic component</h1>
        </div>
    );
};

export default AcademicSemester;