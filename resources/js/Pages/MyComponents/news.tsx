import { Carousel } from "@/Components/ui/carousel";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Button } from "@/Components/ui/button";

export default function News({ news }: { news: any[] }) {
    if (!news || news.length === 0) {
        return null;
    }
    return (
        <>
            <h1 className="text-4xl text-green-900 font-bold text-center">
                آخر الآخبار
            </h1>
            <Carousel className="mt-9">
                <CarouselContent className=" w-auto ">
                    {news.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <Card className=" rounded-xl">
                                <CardContent
                                    style={{
                                        backgroundImage: `url(${item.image_path})`,
                                    }}
                                    className="h-96 bg-cover bg-center rounded-t-xl"
                                ></CardContent>
                                <CardFooter className="bg-green-900 text-white flex p-3 justify-between h-full rounded-b-xl">
                                    <div>
                                        <Button className="bg-white text-green-900 hover:bg-green-100">
                                            عرض الحدث
                                        </Button>
                                    </div>
                                    <div> {item.title}</div>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}
