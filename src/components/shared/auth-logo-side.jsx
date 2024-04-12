function AuthLogoSide() {
    return (
        <div className="min-h-screen hidden sm:flex bg-[#0D111D] w-2/4  p-12 flex flex-col items-start justify-between">
            <img className="flex w-23 h-6" src="./src/assets/infotecsLogo.svg"></img>
            <div className="flex flex-col gap-2">
                <div className="text-white">«Интернет — это как лес. Если вы не знаете, как ориентироваться в нем, то можете заблудиться или стать жертвой хищников.»</div>
                <div className="text-zinc-500 text-base font-semibold">Клиффорд Столл</div>
            </div>
        </div>
    )
}

export default AuthLogoSide 