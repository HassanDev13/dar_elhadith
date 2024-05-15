import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { NavMenu } from "./MyComponents/NavMenu";

export default function Welcome({ auth, news }: PageProps<{ news: any[] }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <header className=" ">
                    <NavMenu auth={auth} />
                </header>
                Books Feature , go to dashboard
            </div>
        </>
    );
}
