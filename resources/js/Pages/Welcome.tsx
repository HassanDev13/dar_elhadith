import React from "react";
import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { NavMenu } from "@/Components/NavMenu";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-100">
                <header className="container mx-auto py-4">
                    <nav className="flex items-center  justify-between">
                        <div className="flex space-x-4">
                            <NavMenu auth={auth} />
                            <Link
                                href="/link1"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                الحضانة{" "}
                            </Link>
                            <Link
                                href="/link2"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                المكتــبة{" "}
                            </Link>
                            <Link
                                href="/link3"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                المدرسة القرآنية{" "}
                            </Link>
                            <Link
                                href="/link4"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                المصلى{" "}
                            </Link>
                            <Link
                                href="/link5"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                التاريــخ{" "}
                            </Link>
                            <Link
                                href="/link6"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                تواصل معنا{" "}
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="/another-link"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Another Link
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}
