import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BOOKS_CATEGORY_CLASS_MAP, BOOKS_CATEGORY_TEXT_MAP } from "@/constants";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "../../Components/Pagination";
import { QueryParams } from "../../types/index.d";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Index({
    books,
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

        router.get(route("books.index"), queryParams as any);
    };

    const onKeyPress = (name: keyof QueryParams, e: any) => {
        if (e.key !== "Enter") return;

        const inputValue = (e.target as HTMLInputElement).value;
        searchFieldChanged(name, inputValue);
    };

    const sortChanged = (title: any) => {
        if (title === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = title;
            queryParams.sort_direction = "asc";
        }
        router.get(route("books.index"), queryParams as any);
    };

    const deleteBook = (booksItem: any) => {
        if (
            !window.confirm(
                "Are you sure you want to delete " + booksItem.title
            )
        ) {
            return;
        }
        router.delete(route("books.destroy", booksItem.id));
    };

    console.log(books);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Books
                    </h2>
                    <Link
                        href={route("books.create")}
                        className="bg-green-800 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="Books" />
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
                            className=" text-nowrap "
                            defaultValue={queryParams.title}
                            placeholder="Book Title"
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                                searchFieldChanged("title", e.target.value)
                            }
                            onKeyPress={(e) => onKeyPress("title", e)}
                        />
                    </th>
                    <th className="">
                        <SelectInput
                            className="text-nowrap "
                            defaultValue={queryParams.category}
                            onChange={(e) =>
                                searchFieldChanged("category", e.target.value)
                            }
                        >
                            <option value="">Select Category</option>
                            <option value="literature">literature</option>
                            <option value="HumanDevelopment">
                                Human Development{" "}
                            </option>
                            <option value="HadithAndItsSciences">
                                Hadith and its sciences
                            </option>
                            <option value="JurisprudencePrinciplesObjectives">
                                Jurisprudence,principles objectives
                            </option>
                            <option value="TheQuranAndItsSciences">
                                The Quran and its sciences
                            </option>
                            <option value="theLanguage">the language</option>
                            <option value="AlgeriaHistory">
                                Algeria history
                            </option>
                            <option value="HistoryAndBiographies">
                                History and biographies
                            </option>
                            <option value="DoctrineAndRecommendation">
                                Doctrine and recommendation
                            </option>
                            <option value="IslamicThoughtAndStudies">
                                Islamic thought and studies
                            </option>
                            <option value="AssociationBooks">
                                Association books
                            </option>
                        </SelectInput>
                    </th>
                </div>
                <table className="w-full ">
                    {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                        <tr className="text-nowrap">
                            <TableHeading
                                name="title"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Title
                            </TableHeading>

                            <TableHeading
                                name="category"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Category
                            </TableHeading>

                            <TableHeading
                                name="available"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Available
                            </TableHeading>
                        </tr>
                    </thead> */}

                    <thead className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <tr className="">
                            <th>id</th>
                            <th>AUTHOR</th>
                            <th>TITLE</th>
                            <th>CREATE DATE</th>
                            <th>CREATED BY</th>
                            <th>CATEGORY</th>
                            <th>CATEGORY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {books.data.map((booksItem) => (
                            <tr
                                key={booksItem.id}
                                className="spcae-y-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-amber-200 transition-all duration-300"
                            >
                                <td>{booksItem.id}</td>
                                <td>{booksItem.author}</td>
                                <td className="hover:underline">
                                    <Link
                                        href={route("books.show", booksItem.id)}
                                    >
                                        {booksItem.title}
                                    </Link>
                                </td>
                                <td className="text-nowrap">
                                    {booksItem.created_at}
                                </td>
                                <td>{booksItem.createdBy.name}</td>
                                <td>
                                    {" "}
                                    <span
                                        className={
                                            "px-2 py-1 rounded  " +
                                            [
                                                booksItem.category as keyof typeof BOOKS_CATEGORY_CLASS_MAP,
                                            ]
                                        }
                                    >
                                        {
                                            BOOKS_CATEGORY_TEXT_MAP[
                                                booksItem.category as keyof typeof BOOKS_CATEGORY_TEXT_MAP
                                            ]
                                        }
                                    </span>
                                </td>
                                <td
                                    className={
                                        booksItem.available
                                            ? " bg-red-400 rounded"
                                            : "bg-green-400 rounded"
                                    }
                                >
                                    {booksItem.available
                                        ? "not available"
                                        : " available"}
                                </td>

                                <td className="text-nowrap">
                                    <Link
                                        href={route("books.edit", booksItem.id)}
                                        className="font-medium text-green-600 dark:text-blue-500 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={(e) => deleteBook(booksItem)}
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
            <Pagination links={books.meta.links} />
        </AuthenticatedLayout>
    );
}
