import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOption } from "../../../constants/global";
import { zodResolver } from '@hookform/resolvers/zod'
import { academicSemesterSchema } from "../../../sehemas/academicManagement.schema";

const nameOptions = [
    {
        value: "01",
        label: "Autumn"
    },
    {
        value: "02",
        label: "Summer"
    },
    {
        value: "03",
        label: "Fall"
    },
]

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}))

const CreateAcademicSemester = () => {
    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        const name = nameOptions[Number(data?.name) - 1]?.label
        const semesterData = {
            name,
            value: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        console.log(semesterData);
    }


    return (
        <Flex justify="center" align="middle">
            <Col span={6}>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect label="Name" name="name" options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOption} />
                    <PHSelect label="End Month" name="endMonth" options={monthOption} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;