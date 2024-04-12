import { useSelector } from "react-redux"
import {Link } from "react-router-dom"
import SideMenuItem from "./sidemenu-item"

function SideMenu({data }) {

    const {completedTasks } = useSelector((state => state.task))
	const markedIds = completedTasks.map(item => item.id);
	
	return (<aside className="flex flex-col w-[300px] h-[520px] pl-5 pr-2 py-5 bg-[#171B26] rounded-xl justify-start items-start gap-2 overflow-x-hidden overflow-y-scroll">
		{data?.map((i, key) => (
			<Link key={key} to={`/tasks/${i.id}`}>
				<SideMenuItem title={i.title} check={(markedIds.includes(i.id))} />
			</Link>
		))}
	</aside>)
}

export default SideMenu