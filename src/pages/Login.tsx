import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setLogin } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verfyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


const Login = () => {
    const navigate = useNavigate()

    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()

    const OnSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging in")
        try {
            const userInfo = {
                id: data.userId,
                password: data.password
            }
            const res = await login(userInfo).unwrap()
            const user = verifyToken(res.data.accessToken) as TUser
            dispatch(setLogin({ user: user, token: res.data.accessToken }))
            toast.error('logged in', { id: toastId, duration: 2000 })
            navigate(`/${user.role}/dashboard`)
        } catch (error) {
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }
    }

    return (
        <Row justify='center' align="middle" style={{ height: '100vh' }}>
            <PHForm onSubmit={OnSubmit}>
                <PHInput type="text" name="userId" label="ID:" />
                <PHInput type="text" name="password" label="Password" />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
        </Row >
    );
};

export default Login;