import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'


export function Search() {
  return (
    <div className='flex items-center gap-4'>
      <Image 
        src={IconSearch}
        alt='IconSearch'
      />
      <input type="text" className='bg-transparent outline-none pr-6 text-white placeholder:text-white'
      placeholder='Buscar'/>
    </div>
  )
}