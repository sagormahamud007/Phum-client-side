import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import { useCurrentToken } from "../../redux/feature/auth/authSlice"
import { Navigate } from "react-router-dom"

type TTokenProps = {
    children: ReactNode
}

const ProtectedRoute = ({ children }: TTokenProps) => {
    const { token } = useAppSelector(useCurrentToken);

    if (!token) {
        return <Navigate to={"/login"} replace={true} />
    }
    return children;
}

export default ProtectedRoute