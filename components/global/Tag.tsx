import Image from "next/image";

const Tag = ({
    title, icon, otherClass } : { 
        title: string,        
        icon?: string; // icon?: JSX.Element;
        otherClass?: string;
    
}) => {
    return (
      <div className={`flex flex-row text-xl gap-2 ${otherClass}`}>
          <Image 
                src={`../icons/${icon}`}
                alt='arrow icon'
                width={25}
                height={25}
                loading='lazy'
                className='w-[15px] h-auto'
            />
          <p className='text-xl'>
            {title}
          </p>
      </div>
    )
  }
  
  export default Tag