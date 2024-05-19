import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import TextInput from "@/Components/TextInput";
import { Input } from "@/Components/ui/input";
import TextAreaInput from "@/Components/TextAreaInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Create({ auth }: PageProps<{}>) {
    const { data, setData, post, errors, reset } = useForm({
        images: [],
        title: "",
        description: "",
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);

        if (data.images && data.images.length > 0) {
            data.images.forEach((image, index) => {
                formData.append(`images[${index}]`, image);
            });
        }

        post(route("news.store"), {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create new News Article
                    </h2>
                </div>
            }
        >
            <Head title="Create News" />
            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-lg">
                        <form
                            encType="multipart/form-data"
                            onSubmit={onSubmit}
                            className=" bg-white p-4 sm:p-8dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            {" "}
                            <div>
                                <InputLabel
                                    htmlFor="image"
                                    value="News Image"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    News Image
                                </InputLabel>
                                <Input
                                    id="news_image_path"
                                    type="file"
                                    name="images[]"
                                    className="mt-1 block w-full"
                                    multiple
                                    onChange={(e) =>
                                        setData(
                                            "images",
                                            Array.from(e.target.files)
                                        )
                                    }
                                />

                                <InputError>{errors.images}</InputError>
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    value="News Title"
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    News Title
                                </InputLabel>
                                <TextInput
                                    id="news_title"
                                    type="text"
                                    name="title"
                                    isFocused={true}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <InputError>{errors.title}</InputError>
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="description"
                                    value="News Description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    News Description
                                </InputLabel>
                                <TextAreaInput
                                    id="news_description"
                                    name="description"
                                    isFocused={true}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <InputError>{errors.description}</InputError>
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route("news.index")}
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
