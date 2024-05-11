import { Link } from "@inertiajs/react";
import { Linke } from "@/types";

export default function Pagination({ links }: { links: Linke[] }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-black text-xs " +
                        (link.active ? "bg-yellow-500 " : " ") +
                        (!link.url
                            ? "!text-gray-300 cursor-not-allowed "
                            : "hover:bg-yellow-500")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
