import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import News from "./MyComponents/news";
import { NavMenu } from "./MyComponents/NavMenu";

export default function Welcome({ auth, news }: PageProps<{ news: any[] }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <header className=" ">
                    <NavMenu auth={auth} />
                </header>
                <div className="container mx-auto py-4">
                    <div className="p-4 rounded-md mb-4">
                        <News news={news} />
                        <h1 className="text-green-950 text-4xl font-bold text-center mt-10">
                            طوابق مؤسسة دار الحديث
                        </h1>
                    </div>
                    <div className="md:flex md:justify-between md:space-x-5 space-y-5  rounded-md mb-2 ">
                        {/* Left Section */}
                        <div className="text-right content-center w-full text-xl">
                            <h2 className="text-2xl font-bold mb-2">الحضانة</h2>
                            <p className=" text-gray-600  ">
                                تقع في الطابق الثاني من مؤسسة دار الحديث، تعتبر
                                مكانًا مثاليًا لتعليم ورعاية الأطفال الصغار.
                                تمتد هذه الروضة عبر مساحة واسعة. تهدف إلى تحقيق
                                تطوير شامل للأطفال، من خلال توفير بيئة تعليمية
                                محفزة تعزز نموهم الفكري والاجتماعي والديني.
                                بإشراف معلمين متخصصين في التربية الدينية.
                            </p>
                        </div>
                        {/* Right Section - Image */}
                        <div className="">
                            <img
                                src="../../images/drh2.svg"
                                alt=""
                                className="md:w-[200%] h-full md:mr-72 rounded-lg"
                            />{" "}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        Content 3
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        Content 4
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        Content 5
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        Content 6
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        Content 7
                    </div>
                </div>
            </div>
        </>
    );
}
