import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setLogin } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verfyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
    const navigate = useNavigate()
    const { handleSubmit, register } = useForm()
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
        <form onSubmit={handleSubmit(OnSubmit)}>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <div>
                    <label htmlFor="userId"></label>
                    <input placeholder="User id"
                        style={{
                            padding: "4px 40px", border: "1px solid gray",
                            marginBottom: "20px"
                        }}
                        type="text"
                        {...register('userId')}
                        id="userId" />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="text" placeholder="Password"
                        style={{
                            padding: "4px 40px", border: "1px solid gray",
                            marginBottom: "20px"
                        }} {...register("password")} id="password" />
                </div>
                <Button htmlType="submit">Submit</Button>
            </div>
        </form>
    );
};

export default Login;