import Detail from "../../../_component/Detail/Detail";
import { TDraws } from "../../../_type/data";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const getDraw = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/draws/${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: [params.id] },
    }
  );

  const { data }: { data: TDraws } = await getDraw.json();

  return <Detail data={data} />;
}
