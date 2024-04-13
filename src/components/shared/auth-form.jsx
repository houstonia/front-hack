import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import { userLogin } from "../../api/auth-api.js"
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
import { Input } from "../ui/input"
import { toast } from "sonner";
import X from "@/assets/icons/x.svg";
import { Label } from "../ui/label.jsx"
import {Toaster} from "../ui/sonner"

const formSchema = z.object({
    email: z.coerce.string().email({
        message: "Некорректный email"
    }),
    password: z.string().min(2, {
        message: "Как минимум 6 символов в пароле",
    }),
})

function AuthForm() {
    const dp = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('userToken');
    const { isAuthed, error,loading } = useSelector(
        (state) => state.auth
    )

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    useEffect(() => {
        if (token) {
            navigate('/tasks')
        }
    }, [dp, isAuthed])

    useEffect(() => {
        if (error) {
            console.log(error)
            toast("Неверный email или пароль", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
        }

    }, [error, dp])
    // 2. Define a submit handler.
    function onSubmit(values) {
        // navigate('/tasks')
        dp(userLogin(values))
    }
    // ...
    return (
        <div className="w-full h-dvh relative flex-col justify-start items-start inline-flex sm:w-2/4">
            <div className="flex h-auto w-full justify-between p-7 sm:justify-end">
                <img className="flex w-23 h-6 sm:hidden" src="./src/assets/infotecsLogo.svg"></img>
                <Link to="/register">
                    <Button className="bg-[#9A66F4] text-white" variant="ghost">Регистрация</Button>
                </Link>
            </div>
            <div className="flex h-full w-full flex-col justify-center items-center">
                <Label className="text-slate-900 text-white text-xl font-semibold leading-7">Авторизация</Label>
                <Label className="text-center text-zinc-500 text-base font-normal leading-normal">
                    Введите почту и пароль
                </Label>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 my-2">
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
                        <Toaster color="#F15048"/>
                    </div>
                    <button className="text-red-500">Забыли пароль?</button>
                </div>
            </div>
        </div>
    )
}

export default AuthForm