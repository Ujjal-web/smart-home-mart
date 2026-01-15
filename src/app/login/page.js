import LoginForm from "./ui/LoginForm";

export default function LoginPage({ searchParams }) {
    const next = searchParams?.next || "/items";
    return <LoginForm nextPath={next} />;
}