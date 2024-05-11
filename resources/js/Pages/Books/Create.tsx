import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, useForm } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { route } from "../../../../vendor/tightenco/ziggy/src/js";
import SelectInput from "@/Components/SelectInput";

export default function Create({ auth }: PageProps<{}>) {
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        author: "",
        category: "",
        available: true,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("books.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create new Book Article
                    </h2>
                </div>
            }
        >
            <Head title="Create Book" />
            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-lg">
                        <form
                            encType="multipart/form-data"
                            onSubmit={onSubmit}
                            className=" bg-white p-4 sm:p-8dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            {" "}
                            <div className="mt-4">
                                <InputLabel
                                    value="Book Title"
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Book Title
                                </InputLabel>
                                <TextInput
                                    id="books_title"
                                    type="text"
                                    name="title"
                                    isFocused={true}
                                    className="border-2 p-2  mt-1 block w-full rounded-md shadow-lg focus:border-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <InputError>{errors.title}</InputError>
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="author"
                                    value="Book Author"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Author
                                </InputLabel>
                                <TextInput
                                    id="books_author"
                                    name="author"
                                    isFocused={true}
                                    className="border-2  mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                    value={data.author}
                                    onChange={(e) =>
                                        setData("author", e.target.value)
                                    }
                                />
                                <InputError>{errors.author}</InputError>
                            </div>
                            <div className="flex justify-start space-x-6 text-nowrap">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="category"
                                        value="Book Category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Category
                                    </InputLabel>
                                    <SelectInput
                                        id="books_category"
                                        name="category"
                                        isFocused={true}
                                        className=" border-2 p-2 *:mt-1 block w- border-gray-300 rounded-md shadow-md focus:border-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                                        value={data.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select Category
                                        </option>
                                        <option value="literature">
                                            literature
                                        </option>
                                        <option value="HumanDevelopment">
                                            Human Development{" "}
                                        </option>
                                        <option value="HadithAndItsSciences">
                                            Hadith and its sciences
                                        </option>
                                        <option value="JurisprudencePrinciplesObjectives">
                                            Jurisprudence,principles objectives
                                        </option>
                                        <option value="TheQuranAnditsSciences">
                                            The Quran and its sciences
                                        </option>
                                        <option value="theLanguage">
                                            the language
                                        </option>
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
                                    <InputError>{errors.category}</InputError>
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="available"
                                        value="Book Availability"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Available
                                    </InputLabel>
                                    <TextInput
                                        id="books_available"
                                        type="checkbox"
                                        name="available"
                                        isFocused={true}
                                        className="h-11 w-10  block  border-gray-300 rounded-md shadow-md focus:ring-opacity-50"
                                        value={data.available.toString()}
                                        onChange={(e) =>
                                            setData(
                                                "available",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <InputError>{errors.available}</InputError>
                                </div>
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route("books.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
