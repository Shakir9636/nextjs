import Link from "next/link";

const DynamicRoute = () => {
    return(
        <main>
            <h1>Dynamic Route page</h1>
            <ul>
                <li>
                    <Link href="/dynamicRoute/shakir">shakir</Link>
                </li>
                <li>
                    <Link href="/dynamicRoute/hussain">hussain</Link>
                </li>
            </ul>
        </main>
    )
}

export default DynamicRoute;