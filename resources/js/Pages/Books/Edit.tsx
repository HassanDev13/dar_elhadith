import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Book, BookCategory, PageProps } from "@/types";
import { Head, Link, router, useForm } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";

export default function Edit({ auth, books }: PageProps<{ books: Book }>) {
    const { data, setData, post, errors, reset } = useForm({
        title: books.title || "",
        author: books.author || "",
        available: books.available || false,
        category: books.category,
        _method: "PUT",
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("books.update", books.id));
    };
    console.log(books);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit book "{books.title}"
                    </h2>
                </div>
            }
        >
            <Head title="Book" />{" "}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="books__title"
                                    value="Book Title"
                                />

                                <TextInput
                                    id="books_title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="books__author"
                                    value="Book Author"
                                />

                                <TextAreaInput
                                    id="books_author"
                                    name="author"
                                    value={data.author}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("author", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.author}
                                    className="mt-2"
                                />
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLSelectElement>
                                        ) =>
                                            setData(
                                                "category",
                                                e.target.value as BookCategory
                                            )
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
