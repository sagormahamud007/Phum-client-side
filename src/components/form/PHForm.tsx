import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TformConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any
}
type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode
} & TformConfig;

const PHForm = ({ onSubmit, children, defaultValues, resolver }: TFormProps) => {
    const formConfig: TformConfig = {};
    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }
    if (resolver) {
        formConfig['resolver'] = resolver;
    }
    const methods = useForm(formConfig);
    return (
        <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
        </FormProvider>
    );
};

export default PHForm;