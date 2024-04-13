import { TestCard } from "@/components/shared/test-card"
import { Button } from "../../components/ui/button"



export const EducationTest = () => {
    return <div className="flex gap-3">
        <div>
            <TestCard />
            <TestCard />
            <TestCard />
        </div>
        <Button size="lg" bg="purple" className='fixed top-[129px] right-[60px]'>Завершить</Button>
    </div>
}