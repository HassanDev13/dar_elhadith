import React from "react";
import { Link } from "@inertiajs/react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

export function NavMenu({ auth }: { auth: any }) {
    const [showMenu, setShowMenu] = React.useState(true);

    return (
        <div className="bg-green-900 rounded-md">
            <NavigationMenu className="bg-green-900 text-slate-100 rounded-md p-2">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <button>{auth.user ? "Welcome" : "Guest"}</button>
                    </NavigationMenuTrigger>
                    {showMenu && (
                        <NavigationMenuContent className="border rounded-l shadow-md bg-green-900 ">
                            <div className=" rounded-lg ">
                                <NavigationMenuList className="">
                                    {auth.user ? (
                                        <>
                                            <NavigationMenuItem>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={route(
                                                            "dashboard"
                                                        )}
                                                        className=""
                                                    >
                                                        Dashboard
                                                    </Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={route("register")}
                                                        className=""
                                                    >
                                                        Register
                                                    </Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        </>
                                    ) : (
                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={route("register")}
                                                    className=""
                                                >
                                                    Login
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )}
                                </NavigationMenuList>
                            </div>
                        </NavigationMenuContent>
                    )}
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    );
}
