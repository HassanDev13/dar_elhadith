import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export function NavMenu({ auth }: { auth: any }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="flex justify-between p-4 ">
            <div className=" flex text-white  ">
                <div className="font-bold">
                    {" "}
                    {auth.user ? (
                        <div className="flex space-x-6 ">
                            <div className="bg-green-800 hover:bg-green-700 hover:text-white rounded-md p-2 transition-all duration-300">
                                <Link href={route("dashboard")} className="">
                                    لوحة القيادة
                                </Link>
                            </div>
                            <div className="bg-green-800 hover:bg-green-700 hover:text-white rounded-md p-2 transition-all duration-300">
                                <Link href={route("login")}>إنشاء مستخدم</Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link
                                href={route("login")}
                                className="bg-green-800 hover:bg-green-700 hover:text-white rounded-md p-2 transition-all duration-300"
                            >
                                تسجيل الدخول
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="">
                <Link
                    href="/link5"
                    className="hover:bg-green-700 hover:text-white rounded-md p-2 transition-all duration-300"
                >
                    التاريــخ{" "}
                </Link>
                <Link
                    href="/link2"
                    className="hover:bg-green-700 hover:text-white rounded-md p-2  transition-all duration-300"
                >
                    المكتــبة{" "}
                </Link>
                <Link
                    href="/link3"
                    className="hover:bg-green-700 hover:text-white rounded-md p-2 max-sm:hidden transition-all duration-300 max-md:hidden"
                >
                    المدرسة القرآنية{" "}
                </Link>
                <Link
                    href="/link4"
                    className="hover:bg-green-700 hover:text-white rounded-md p-2 max-sm:hidden transition-all duration-300"
                >
                    المصلى{" "}
                </Link>
                <Link
                    href="/link6"
                    className="hover:bg-green-700 hover:text-white rounded-md p-2 max-sm:hidden transition-all duration-300"
                >
                    الحضانة{" "}
                </Link>
            </div>
            <div>
                <Link
                    href="/"
                    className="flex text-green-900 font-bold font-serif text-fontFamily-serif-0"
                >
                    دار الحديث
                </Link>
            </div>
        </nav>
    );
}
