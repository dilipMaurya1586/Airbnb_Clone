import { FOOTER_SECTION, SOCIAL_LINKS } from '@/app/config/app.config'
import dayjs from 'dayjs'
import { Icon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-secondary'>
    <footer className='container'>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] py-4 gap-6">
            {FOOTER_SECTION.map((sec, index)=>(

            <div key={index} className='flex flex-col gap-3'>
                <h3 className='text-sm font-bold'>{sec.title}</h3>
                <ul className='flex flex-col gap-1'>
                    {sec.links.map((link,index)=>(
                        <li key={index}>
                            <a href={link.href} className='text-sm hover:underline' >{link.text}</a>

                        </li>
                    ))}
                </ul>

            </div>

            ))}

        </div>
       
    </footer>
        
    </div>
  )
}

export default Footer
