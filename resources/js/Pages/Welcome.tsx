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
                <div className="container space-x-4 space-y-10 ">
                    <div className="p-2 rounded-md mb-4 space-y-7">
                        <News news={news} />
                        <h1 className="text-green-950 text-4xl font-bold text-center ">
                            طوابق مؤسسة دار الحديث
                        </h1>
                    </div>
                    <div className="space-y-4 ">
                        {/* Left Section */}
                        <div className="text-center  text-pretty bg-red-300 text-2xl ">
                            <h2 className="text-3xl font-bold ">الحضانة</h2>
                            <p className=" text-gray-600 ">
                                تقع في الطابق الثاني من مؤسسة دار الحديث، تعتبر
                                مكانًا مثاليًا لتعليم ورعاية الأطفال الصغار.
                                تمتد هذه الروضة عبر مساحة واسعة. تهدف إلى تحقيق
                                تطوير شامل للأطفال، من خلال توفير بيئة تعليمية
                                محفزة تعزز نموهم الفكري والاجتماعي والديني.
                                بإشراف معلمين متخصصين
                            </p>
                        </div>
                        {/* Right Section - Image */}
                        <div className="bg-blue-300">
                            <img
                                src="../../images/drh2.png"
                                alt=""
                                className=" w-full"
                            />{" "}
                        </div>
                    </div>
                    <div className="bg-gray-100  flex flex-col justify-center ">
                        <div className="bg-green-200 rounded-lg border-2 border-green-800 text-center  p-5">
                            <div className=" ">
                                <h1 className="font-semibold text-4xl text-green-950">
                                    أوقات العـمل
                                </h1>
                                <div className="">
                                    {" "}
                                    <p className="font-normal text-lg">
                                        من 8:00 إلى 18:00{" "}
                                    </p>
                                    <p className="font-normal text-lg">
                                        من السبت الى الخميس
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <h1 className="font-semibold  text-4xl text-green-950">
                                    الميــــــــــــــــــــــــزات
                                </h1>
                                <div>
                                    <ul className=" list-inside text-center  text-nowrap text-lg ">
                                        <li>محيط هادئ-</li>
                                        <li>خدمةالإنترنت-</li>
                                        <li>قوانين داخلية تنظيمية-</li>
                                        <li>أكثر من 7000 كتاب ووثيقة-</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-300 text-right flex flex-col justify-center  ">
                            <div>
                                <h1 className="text-4xl font-bold">المكتبة</h1>
                            </div>
                            <div>
                                تعد مكتبة دار الحديث الإسلامية منارة علمية
                                وثقافية متميزة، حيث تضم مجموعة واسعة ومتنوعة من
                                الكتب والمخطوطات في مختلف مجالات العلوم
                                الإسلامية. تحتوي المكتبة على أقسام متخصصة تشمل
                                علوم القرآن والتفسير، الحديث الشريف وعلومه،
                                الفقه وأصوله، العقيدة الإسلامية، والتاريخ
                                الإسلامي. تهدف المكتبة إلى نشر المعرفة وتعزيز
                                الفهم الصحيح للإسلام من خلال توفير مصادر موثوقة
                                وشاملة للباحثين والطلاب وجميع المهتمين بالعلوم
                                الإسلامية.
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 4
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 5
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 6
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 7
                    </div>
                </div>
            </div>
        </>
    );
}
