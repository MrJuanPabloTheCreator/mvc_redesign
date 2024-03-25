
export default function Images() {
    const images = [
        {
          img: '/Learn.jpg',
          title: 'Learn',
          p: "With over 30 majors to choose from, there is something for everyone at MVC."
        },
        {
          img: '/Live.jpg',
          title: 'Live',
          p: "Small town, big opportunities-there's alway something happening in Marshall."
        },
        {
          img: '/Play.jpg',
          title: 'Play',
          p: "With 23 record-setting varsity and intramural teams, we take play very seriously"
        },
        {
          img: '/Become.jpg',
          title: 'Become',
          p: "When you leave Valley, you'll be prepared for life--personally and professionally"
        }
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex w-full h-[550px]">
              {images.map((item, index) => (
                <div key={index} className="relative overflow-hidden hover:cursor-pointer homeImagesParent">
                  <img src={item.img} className="object-cover homeImages h-full"/>
                  <div className="flex flex-col space-y-3 items-center justify-center absolute bottom-[50px] w-full z-50">
                      <h4 className="text-white text-6xl">{item.title}</h4>
                      <p className=" text-white text-center">{item.p}</p>
                      <button className="py-2 px-5 bg-mvcP2  text-white rounded-lg text-lg">
                      {item.title}
                      </button>
                  </div>
                  <div className="absolute bottom-0 pt-[300px] text-white w-full bg-gradient-to-t from-black to-tansparent"/>
                </div>
              ))}
            </div>
        </div>
    )
}