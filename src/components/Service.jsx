import RenderService from "./RenderService";

const Service = () => {

    const services = [
        {
            id: 1,
            img: '/images/service1.png',
            title: "Tattoo Design",
            text: "Transform your vision into reality with our tailored tattoo design service. Our artists specialize in bringing your ideas to life with precision and creativity."
        },
        {
            id: 2,
            img: 'https://i.pinimg.com/236x/4c/de/08/4cde08db5c12910ed83cab60be8844c4.jpg',
            title: "Realastic  Tattoo",
            text: "Elevate your ink with our hyper-realistic tattoo design service. Our artists specialize in intricate details, bringing your ideas to life with stunning realism."
        },
        {
            id: 3,
            img: 'https://i.pinimg.com/236x/c1/c3/00/c1c3001871bd42e8d903365654148d97.jpg',
            title: "Tattoo Removal",
            text: "Let go of the past with our advanced tattoo removal service. Our gentle yet effective treatments erase unwanted ink, offering a clean canvas for new beginnings."
        },
        
    ]
  return <section className="container mx-auto mt-24">
    <div className="text-center">
        <p className="text-xl italic font-[400]">Services</p>
        <h3 className="my-2 leading-[1.2] tracking-wider text-5xl font-[500]">What we do</h3>
        <p className="w-3/4 mx-auto text-[1.2rem] tracking-wide leading-tight">
        Come to us if you don’t want to regret it.
Stop thinking and make your dream.</p>
    </div>

    <div className="flex items-center justify-start flex-wrap mt-12 gap-6">

    {
        services.map(service => (

            <RenderService key={service.id} service={service}/>
        ))
    }
    </div>
  </section>;
};

export default Service;
