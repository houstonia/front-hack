function SideMenuItem({ title = "Заголовок", check = false, count = 0 }) {
    return (
        <div className=" px-4 py-3.5 cursor-pointer flex w-56 h-12 hover:bg-gray-800 rounded-lg justify-between items-center text-white">
            <div className="font-semibold leading-tight text-base font-['Raleway'] gap-1 leading-tight flex">
                {title}
                {check? <img className="w-5 h-5" src="/src/assets/icons/check.svg"></img>:null}
            </div>
            <div className="text-right text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight">000</div>
        </div>
    )
}

export default SideMenuItem