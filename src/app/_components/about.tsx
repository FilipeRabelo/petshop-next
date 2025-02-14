import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


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
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />No mercado desde 2005
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />Mais de 10 veterinários especializados
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />Qualidade e cuidado em primeiro lugar
            </li>
          </ul>

          <div className="flex gap-2">
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/5531982942423?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 
            rounded-md  px-4 py-2"
            >
              <WhatsappLogo className='w-5 h-5 text-white' />
              Contato via WhatsApp
            </a>

            <a
              target='_blank'
              href='https://www.google.com/maps?q=Rua+Ouricuri,+140+-+Floramar,+Belo+Horizonte+-+MG'
              className="flex items-center justify-center w-fit gap-2 rounded-md  px-4 py-2"
            >
              <MapPin className='w-5 h-5 text-black' />
              Endereço da loja
            </a>
          </div>

        </div>
        {/* fim conteúdo */}

      </div>

    </section>
  )
}