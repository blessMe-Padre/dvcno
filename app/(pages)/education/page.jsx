
import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";

export const metadata = {
    title: "ДВЦНО | Обучение",
    description: "Дальневосточный центр непрерывного образования (ДВЦНО) предлагает полный цикл образовательных услуг: дошкольное образование, профессиональное обучение, переподготовка",
    keywords: [
        "ДВЦНО",
        "Дальневосточный центр образования",
        "обучение",
        "профессиональное обучение",
        "переподготовка",
        "образование во Владивостоке"
    ]
};

export default async function Page() {
    const data = await fetchApiServerData('pages/training');
    return (
        <PageContent data={data.data} />
    )
}
