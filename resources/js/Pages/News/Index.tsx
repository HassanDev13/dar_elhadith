import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ news, auth }: PageProps<{}>) {
    const deleteNews = (newsItem: any) => {
        if (!window.confirm("Are you sure you want to delete the news?")) {
            return;
        }
        router.delete(route("news.destroy", newsItem.id));
    };

    console.log(news);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        News
                    </h2>
                    <Link
                        href={route("news.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="News" />

            <div className="border-t-2 ">
                <table className="w-full ">
                    <thead className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <tr className="">
                            <th>id</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>CREATE DATE</th>
                            <th>CREATED BY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {news.data.map((newsItem) => (
                            <tr
                                key={newsItem.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td>{newsItem.id}</td>
                                <td>
                                    <img
                                        src={newsItem.image_path}
                                        className="w-24"
                                    />
                                </td>
                                <td>
                                    <Link
                                        href={route("news.show", newsItem.id)}
                                    >
                                        {newsItem.title !== null
                                            ? newsItem.title
                                            : "No Title"}
                                    </Link>
                                </td>
                                <td className="text-nowrap">
                                    {newsItem.created_at}
                                </td>
                                <td>{newsItem.createdBy.name}</td>
                                <td className="text-nowrap">
                                    <Link
                                        href={route("news.edit", newsItem.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={(e) => deleteNews(newsItem)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
