import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { News, PageProps, QueryParams } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { route } from "../../../../vendor/tightenco/ziggy/src/js";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Index({
    news,
    auth,
    success,
    queryParams,
}: PageProps<{ success: string; queryParams: QueryParams }>) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name: keyof QueryParams, value: any) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("news.index"), queryParams as any);
    };

    const onKeyPress = (name: keyof QueryParams, e: any) => {
        if (e.key !== "Enter") return;

        const inputValue = (e.target as HTMLInputElement).value;
        searchFieldChanged(name, inputValue);
    };

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
                        className="bg-green-800 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="News" />

            <div className="border-t-2 ">
                {success && (
                    <div className="bg-emerald-500 py-2 text-center px-4 text-white rounded mb-4 animate-fadeout animate-accordion">
                        {success}
                    </div>
                )}
                <div className=" text-nowrap flex justify-center space-x-4 p-4 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <th className="flex justify-between bg-white">
                        <MagnifyingGlassIcon className="h-6  w-7 text-gray-500 " />
                        <TextInput
                            className=" text-nowrap"
                            defaultValue={queryParams.title}
                            placeholder="News Title"
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                                searchFieldChanged("title", e.target.value)
                            }
                            onKeyPress={(e) => onKeyPress("title", e)}
                        />
                    </th>
                </div>

                <table className="w-screen  ">
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
                    <tbody className="text-center">
                        {news.data.map((newsItem) => (
                            <tr
                                key={newsItem.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-amber-200 transition-all duration-300"
                            >
                                <td>{newsItem.id}</td>
                                <td>
                                    <img
                                        src={newsItem.image_path}
                                        className="w-10 h-10 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="hover:underline">
                                    <Link
                                        href={route("news.show", newsItem.id)}
                                    >
                                        {newsItem.title}
                                    </Link>
                                </td>
                                <td className="text-nowrap">
                                    {newsItem.created_at}
                                </td>
                                <td>{newsItem.createdBy.name}</td>
                                <td className="text-nowrap">
                                    <Link
                                        href={route("news.edit", newsItem.id)}
                                        className="font-medium text-green-600 dark:text-blue-500 hover:underline mx-1"
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
            <Pagination links={news.meta.links} />
        </AuthenticatedLayout>
    );
}
