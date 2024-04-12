import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import { registerUser } from "../../api/auth-api.js"
import { Button } from "../ui/button.jsx"
import { Checkbox } from "../ui/checkbox.jsx"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Toaster } from "@/components/ui/sonner"
import { Input } from "../ui/input"
import { Label } from "../ui/label.jsx"
import { toast } from "sonner"
import X from "@/assets/icons/x.svg";
import WhiteCheck from "@/assets/icons/white-check.svg";

const formSchema = z.object({
    username: z.coerce.string().min(4, {
        message: "Как минимум 4 символа в никнейме",
    }),
    email: z.coerce.string().email({
        message: "Некорректный email"
    }),
    password: z.string().min(6, {
        message: "Как минимум 6 символов в пароле",
    }),
})

function RegForm() {
    const dp = useDispatch()
    const navigate=useNavigate()
    const { success, error,loading } = useSelector(
        (state) => state.auth
    )
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    })

    // useEffect(() => {
    //     if (success) {
    //         navigate('/auth')
    //         toast("Вы зарегистрированы", { icon: <img className="w-[22px] h-[22px" src={WhiteCheck} alt="Иконка" /> })
    //     }
    // }, [dp, success])

    // useEffect(() => {
    //     console.log(error)
    //     if (error) {
    //         toast("Неверный email или пароль", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
    //     }

    // }, [error, dp])
    function onSubmit(values) {
        // dp(registerUser(values))    
        navigate('/auth')
    }
    // ...
    return (
        <div className="w-full h-dvh relative flex-col justify-start items-start inline-flex sm:w-2/4">
            <div className="flex h-auto w-full justify-between p-7 sm:justify-end">
                <img className="flex w-23 h-6 sm:hidden" src="./src/assets/infotecsLogo.svg"></img>
                <Link to="/auth">
                    <Button className="bg-[#9A66F4] text-white" variant="ghost">Войти</Button>
                </Link>
            </div>
            <div className="flex h-full w-full flex-col justify-center items-center">
                <Label className="text-slate-900 text-white text-xl font-semibold leading-7">Регистрация</Label>
                <Label className="text-center text-zinc-500 text-base font-normal leading-normal">
                    Введите почту и пароль
                </Label>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 my-2">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Никнейм</FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#222631] text-white" placeholder="Введите никнейм" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Email</FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#222631] text-white" placeholder="Введите email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Пароль</FormLabel>
                                    <FormControl>
                                        <Input className="bg-[#222631] text-white" type="password" placeholder="Введите пароль" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={loading} className="bg-[#9A66F4] w-full" type="submit" size="lg">Войти</Button>
                    </form>
                </Form>
                <div className="flex w-1/2 items-center justify-between space-x-2">
                    <div className="flex flex-row gap-2 items-center">
                        <Checkbox className="bg-white" id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Запомнить меня
                        </label>
                    <Toaster color={error?"#F15048":""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegForm