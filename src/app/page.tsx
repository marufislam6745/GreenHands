import Banner from "@/Component/Banner";
import Features from "@/Component/Features";
import Gallerydata from "@/Component/Gallerydata";
import RecentEvent from "@/Component/RecentEvent";
import Subscribe from "@/Component/Subscribe";


export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <Features></Features>
      <RecentEvent></RecentEvent>
      <Gallerydata></Gallerydata>
      <Subscribe></Subscribe>
    </div>
  );
}
