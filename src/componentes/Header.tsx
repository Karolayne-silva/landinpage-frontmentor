import logo from '../img/logo.svg';
export default function Header(){
   return(
      <div className="h-20 items-center flex justify-between w-[1200px] mx-auto">
         <div>
            <img src={logo} alt="logo"/>
         </div>
         <ul className="flex gap-x-5 uppercase text-sm items-center">
            <li className="text-grayish_violet hover:text-very_violet cursor-pointer font-bold">how we work</li>
            <li className="text-grayish_violet hover:text-very_violet cursor-pointer font-bold">blog</li>
            <li className="text-grayish_violet hover:text-very_violet cursor-pointer font-bold">account</li>
            <button className="uppercase border border-black pt-2 pb-2 text-sm hover:bg-very_violet hover:text-gray_light cursor-pointer w-[140px]">view plans</button>
         
         </ul>
      </div>
   )
}