import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'


export function About() {
  return (
    <section className="bg-[#FDF6ec] py-6">

      <div className="container mx-auto grid-col-1 lg:grid-col-2 gap-12 items-center">

        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto do cachorro"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 *
              overflow-hidden rounded-lg border-white">
            <Image
              src={about2Img}
              alt="Foto do cachorro 2"
              fill
              quality={100}
              priority
            />
          </div>
        </div>

        {/* conteúdo */}
        <div className="space-y-6">
          <h2 className="text-black font-bold">
            Sobre
          </h2>

          <p>
            Bem-vindo ao nosso pet shop! Aqui, cuidamos do seu pet com amor e dedicação. 
            Oferecemos produtos de qualidade, serviços de banho e tosa, 
            veterinário e tudo que seu amiguinho precisa para uma vida saudável e feliz.
          </p>

          <ul className="space-y-4">
            <li>No mercado desde 2005</li>
            <li>Mais de 10 veterinários especializados</li>
            <li>Qualidade e cuidado em primeiro lugar</li>
          </ul>

        </div>

      </div>

    </section>
  )
}