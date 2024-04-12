import AuthLogoSide from "@/components/shared/auth-logo-side"
import AuthForm from "@/components/shared/auth-form"


export const AuthPage = () => {
    return (
        <div className="flex w-full h-full bg-[#171B26]">
            <AuthLogoSide />
            <AuthForm />
        </div>
    )
}
