const cLevelProfiles = [
    {
        img: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCE_lw9xzpW5MNWHxhSBNJv9MkBKvS0JNHg2nR1mKSd5p-ZeGHG8iGS_i4HDlSmrRQ2NV7bchly1tZAW1XPfbwacvltn4r-0-MM1A6E-DTJzMSkqUz5ymUNNmLSJXYVm6y3Zi3MEyPVgrfOkJFglk_NLmijZuNI9hBAizZT5HNIa_zmhT5AcIJiDHc6J3xPOXGa6U6NIEmpAwPTXVn3Q9eFHhzmKdGSG74RSfQW0ySHqC4eMhEvDRhRqjkQMh_XunBh269t3h3ogc",
            alt: "Portrait of Sarah Jenkins, CEO",
        },
        name: "Sarah Jenkins",
        position: "CEO & Co-Founder",
    },
    {
        img: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCE_lw9xzpW5MNWHxhSBNJv9MkBKvS0JNHg2nR1mKSd5p-ZeGHG8iGS_i4HDlSmrRQ2NV7bchly1tZAW1XPfbwacvltn4r-0-MM1A6E-DTJzMSkqUz5ymUNNmLSJXYVm6y3Zi3MEyPVgrfOkJFglk_NLmijZuNI9hBAizZT5HNIa_zmhT5AcIJiDHc6J3xPOXGa6U6NIEmpAwPTXVn3Q9eFHhzmKdGSG74RSfQW0ySHqC4eMhEvDRhRqjkQMh_XunBh269t3h3ogc",
            alt: "Portrait of David Chen, CTO",
        },
        name: "David Chen",
        position: "CTO",
    },
    {
        img: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCE_lw9xzpW5MNWHxhSBNJv9MkBKvS0JNHg2nR1mKSd5p-ZeGHG8iGS_i4HDlSmrRQ2NV7bchly1tZAW1XPfbwacvltn4r-0-MM1A6E-DTJzMSkqUz5ymUNNmLSJXYVm6y3Zi3MEyPVgrfOkJFglk_NLmijZuNI9hBAizZT5HNIa_zmhT5AcIJiDHc6J3xPOXGa6U6NIEmpAwPTXVn3Q9eFHhzmKdGSG74RSfQW0ySHqC4eMhEvDRhRqjkQMh_XunBh269t3h3ogc",
            alt: "Portrait of Elena Rodriguez, Head of Product",
        },
        name: "Elena Rodriguez",
        position: "Head of Product",
    },
    {
        img: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCE_lw9xzpW5MNWHxhSBNJv9MkBKvS0JNHg2nR1mKSd5p-ZeGHG8iGS_i4HDlSmrRQ2NV7bchly1tZAW1XPfbwacvltn4r-0-MM1A6E-DTJzMSkqUz5ymUNNmLSJXYVm6y3Zi3MEyPVgrfOkJFglk_NLmijZuNI9hBAizZT5HNIa_zmhT5AcIJiDHc6J3xPOXGa6U6NIEmpAwPTXVn3Q9eFHhzmKdGSG74RSfQW0ySHqC4eMhEvDRhRqjkQMh_XunBh269t3h3ogc",
            alt: "Portrait of Marcus Johnson, COO",
        },
        name: "Marcus Johnson",
        position: "COO",
    },
]

const Leadership = () => {
  return (
    <section className="w-full bg-background py-20 border-t border-border">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="text-foreground text-[28px] font-bold leading-tight mb-2">Meet the Leadership</h2>
                <p className="text-muted-foreground text-base">The minds behind the machine.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {cLevelProfiles.map((profile, index) => (
                    <div key={index} className="flex flex-col gap-3 group">
                        <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-gray-200">
                            <img className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" alt={profile.img.alt} src={profile.img.src}/>
                        </div>
                        <div>
                            <h3 className="text-foreground font-bold text-lg">{profile.name}</h3>
                            <p className="text-primary font-medium text-sm">{profile.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Leadership