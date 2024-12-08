import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
const Footer = ({
    setPrompt,
    inputPrompt=""
})=>{
    const [hovered, sethovered] = useState(false);
    return (
        <form className="absolute bottom-8 flex justify-center w-full h-20 items-center" onSubmit={(e)=>{
            e.preventDefault()
            setPrompt(inputPrompt)
        }} onMouseEnter={()=>{
            sethovered(true);
        }} onMouseLeave={()=>{
            sethovered(false);
        }}>
            <input className={
                `lg:w-[550px] md:w-[450px] sm:w-[360px] w-[280px] h-10 pl-4 rounded-[20px] bg-gray-950 text-gray-400 z-50 ${hovered? "lg:translate-x-[15px] md:translate-x-[14px] sm:translate-x-[13px] translate-x-[11px]" : "lg:translate-x-[40px] md:translate-x-[36px] sm:translate-x-[33px] translate-x-[30px]"} transition ease-in-out`
                }type="text" placeholder="Give Prompt" onChange={(e)=>inputPrompt = e.target.value}>
            </input>
            <button className={
            `text-white lg:w-[80px] sm:pr-0 pr-1 md:w-[73px] sm:w-[67px] w-[60px]  h-10 rounded-r-[20px] flex justify-center items-center hover:bg-blue-700 group bg-blue-600 ${hovered? "lg:translate-x-[-15px] md:translate-x-[-13px] sm:translate-x-[-12px] translate-x-[-10px]" : "lg:translate-x-[-40px] md:translate-x-[-37px] sm:translate-x-[-34px] translate-x-[-30px]"} transition ease-in-out`
            } type="submit"><FontAwesomeIcon className='translate-x-[10px] font-bold group-hover:scale-125' icon={faCheck}/></button>
        </form>
    )
}

export default Footer;