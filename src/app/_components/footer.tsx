import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'


const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className='bg-[#E84C3D] py-16 text-white'>
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center' data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">Nossos parceiros</h4>

          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8' data-aos="zoom-up" data-aos-delay="600">
            {brands.map((item, index) => (
              <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>


        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Pet Shop</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação</p>
            <a
              data-aos="fade-up"
              data-aos-delay="500"
              target='_blank'
              href={`https://wa.me/5531982942423?text=Olá vim pelo site e gostaria de mais informações`}
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via whatsApp
            </a>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <p>Email: petshop@petshop.com.br</p>
            <p>Telefone: (31) 98899-8855</p>
            <p>Rua: X, centro, Belo Horizonte | MG</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
              >
                <FacebookLogo className='w-8 h-8' />
              </a>

              <a
                href="#"
                target='_blank'
              >
                <InstagramLogo className='w-8 h-8' />
              </a>

              <a
                href="#"
                target='_blank'
              >
                <YoutubeLogo className='w-8 h-8' />
              </a>
            </div>
          </div>

        </footer>

      </div>
    </section>
  )
}