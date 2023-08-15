import {paddle} from "@/paddle";


type PlatypusParams = {
  params: {
    slug: string;
  };
};

export function generateMetadata ({params}: PlatypusParams) {
    const plat = getPlat(params.slug);
    return (
        title:plat?.name + "the platypus",
        description:plat?description
    );
}
//think of this as an API call to a database, instead of a file
function getPlat(slug:string) {
  return paddle.find((plat) => plat.slug === slug);
}

export default function PlatypusPage({ params }: PlatypusParams) {
  const plat = getPlat(params.slug);

  return (
    <div>
      <h2>{plat?.name}</h2>
      <p>Age:{plat?.age}</p>
      <p> {plat?.description}</p>
      <img src={plat?.img_url} />
    </div>
  );
}
