import { TestCard } from "@/components/shared/test-card"
import { Button } from "../../components/ui/button"



export const EducationTest = () => {
    return <div className="flex">
        <div>
            <TestCard />
            <TestCard />
            <TestCard />
        </div>
        <Button size="lg" bg="purple">Завершить</Button>
    </div>
}