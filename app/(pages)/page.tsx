import ImageSlider from "../_components/slider";

export default function Home() {
  const images = [
    '/ValleyExperience.png',
    '/slide_img.jpg',
  ];

  return (
    <main className="">
      <ImageSlider images={images}/>
    </main>
  );
}
  