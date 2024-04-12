import AuthLogoSide from "@/components/shared/auth-logo-side"
import RegForm from "@/components/shared/reg-form"


export const RegPage=()=> {
    return (
        <div className="flex w-full h-full bg-[#171B26]">
            <AuthLogoSide/>
            <RegForm/>
        </div>
    )
}
