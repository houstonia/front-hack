import { CourseCard } from "@/components/shared/course-card"
import { SearchInput } from "@/components/shared/search-input"
import { CourseFilter } from "@/components/shared/course-filter"
import { useSelector } from "react-redux"
import { removeType, setType, clearTypes } from "@/redux/features/course-types/courseTypesSlices"


const levelVars = ['С нуля', 'С опытом']
export const Catalog = () => {
    const type = useSelector((state) => state.courseType.type);
    return <div>
        <div className="flex">
            {/* <SearchInput placeholder="Название курса" />
            <CourseFilter name="Сложность" vars={levelVars} data={type} remove={removeType} set={setType} clear={clearTypes} />
            <CourseFilter name="Тип курса" />
            <CourseFilter name="Стоимость" /> */}
        </div>
    </div>
}
