import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import News from "./MyComponents/news";
import { NavMenu } from "./MyComponents/NavMenu";
import { Button } from "@/Components/ui/button";

export default function Welcome({ auth, news }: PageProps<{ news: any[] }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <header className=" ">
                    <NavMenu auth={auth} />
                </header>
                <div className="container space-y-10">
                    <div className="rounded-md space-y-7">
                        <News news={news} />
                        <h1 className="text-green-950 text-4xl font-bold text-center ">
                            مؤسسة دار الحديث
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
                                className=" "
                            />{" "}
                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <div className="bg-purple-300 text-right ">
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
                                    الميــــــــــــــزات
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
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 4
                    </div>
                    <div className="rounded-md">
                        <div className="flex flex-col-reverse md:flex-row  w-full space-y-4 space-y-reverse  md:space-y-0 md:space-x-9">
                            <div className=" space-y-6  rounded-md w-full flex flex-col justify-center items-end">
                                <h6 className="text-green-950 text-2xl md:text-4xl text-end font-bold">
                                    المدرسة القرآنية و المصلى
                                </h6>
                                <p className="text-right text-xl md:text-2xl">
                                    الطابق الأرضي يضم مرافق شاملة تخدم احتياجات
                                    المجتمع المحلي بشكل متكامل. يُعَدُّ مسجد
                                    الصلاة محوراً رئيسياً للتواصل الروحي
                                    والاجتماعي، حيث يجتمع المسلمون لأداء الصلوات
                                    الخمس في جو من الخشوع والتأمل. وتمتد جوانب
                                    الخدمة الدينية لتشمل قاعة لتعليم القرآن، حيث
                                    يمكن للمسلمين من جميع الأعمار والمستويات
                                    الاستفادة من الدروس والمحاضرات لفهم وتلاوة
                                    القرأن الكريم
                                </p>
                            </div>
                            <div className="rounded-md w-full">
                                <img
                                    src="../../images/drh2.png"
                                    alt=""
                                    className=" w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-center items-center space-y-4 rounded-3xl p-4 md:p-7  md:py-20"
                        style={{
                            backgroundImage: "url('../../images/drh2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h3 className="font-bold  text-2xl md:text-4xl text-white">نبذة تاريخية</h3>
                        <p className="text-center px-9 text-white">
                            دار الحديث تلمسان هي مسجد ومدرسة لتحفيظ القرآن في
                            تلمسان في الجزائر، تأسست في 27 سبتمبر 1937م، وقام
                            بافتتاحها كلاً من الإمامين عبد الحميد بن باديس
                            و‌محمد البشير الإبراهيمي. الدار عبارة عن بناء على
                            الطراز المعماري الإسلامي عربي وأندلسي.
                        </p>
                        <Button className="bg-white text-black">المزيد</Button>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mt-4">
                        Content 7
                    </div>
                </div>
            </div>
        </>
    );
}
