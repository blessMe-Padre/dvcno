import fetchApiServerData from "@/app/utils/fetchApiServerData";
import PageContent from "./PageContent";


export const metadata = {
  title: "ДВЦНО | О центре",
  description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
  const data = await fetchApiServerData('pages/about_center');

  return (
    <PageContent data={data.data} />
  );
}
