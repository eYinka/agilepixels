import Link from "./Link";
import Logo from "./Logo";

export default function HeroSection() {
  const links = [
    {
      id: 0,
      label: "Hear",
      url: "#"
    },
    {
      id: 1,
      label: "Latest",
      url: "#"
    },
    {
      id: 2,
      label: "Tour",
      url: "#"
    },
    {
      id: 3,
      label: "See",
      url: "#"
    },
    {
      id: 4,
      label: "Shop",
      url: "#"
    },
    {
      id: 5,
      label: "Watch",
      url: "#"
    },
    {
      id: 6,
      label: "Personal",
      url: "#"
    },
    {
      id: 7,
      label: "Aid",
      url: "#"
    },
  ]

  return (
    <section className="w-full bg-hero-img bg-center md:bg-cover flex justify-end h-full min-h-screen xl:max-h-[1920px]">
      <div className="container mx-auto">
        <div className="w-full h-full flex justify-between items-end">
          <div className="my-auto flex-shrink">
            <Logo /> 
          </div>
          <div className="flex justify-start h-full">
            <ul className="w-full flex flex-row-reverse rotate-180 justify-end">
              {links.map((link) => {
                return (
                  <Link link={link} key={link.id}/>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}