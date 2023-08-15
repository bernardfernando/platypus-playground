import { paddle } from "./paddle";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behold my paddle!",
  description: "This is all the platypuses in my paddle",
};

export default function PaddlePage() {
  return (
    <div className="paddle-page">
      <h2>Paddle Page</h2>
      <div className="paddle-grid">
        {paddle.map((platypus) => {
          return (
            <div className=" plat-border" key={platypus.slug}>
              <h3>
                <Link href={`/paddle/${platypus.slug}`}>{platypus.name}</Link>
              </h3>
              <p>{platypus.description}</p>
              <p>Age: {platypus.age}</p>
              <img
                className="plat-img"
                src={platypus.img_url}
                alt={platypus.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
