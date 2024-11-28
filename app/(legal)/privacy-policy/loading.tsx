import {Skeleton} from "@nextui-org/skeleton";


export default function App() {
  return (
    <main className='flex w-full justify-center items-center md:justify-start md:items-start max-w-[1200px] px-4 md:px-8 gap-0 md:gap-2 mb-16 flex-col-reverse md:flex-row'>
    <section className='flex pt-[40px] md:pt-[98px] w-full flex-col text-base text-black'>
              {/* top side of the hero */}
              <div className='w-full flex flex-col lg:flex-row-reverse justify-between'>
                {/* right side */}
                <div className='lg:flex-col justify-start w-full lg:w-[45%]  '>
                    <div className='flex flex-row justify-between pb-2'>
                      <Skeleton className="w-full h-auto min-w-[300px] rounded-[500px]" />
                      <Skeleton className="w-full h-auto min-w-[300px] rounded-[500px]" />    
                    </div>
                    <Skeleton className="object-cover min-h-[100px] h-auto w-[65%] rounded-xl" />    
                </div>
                
                {/* left side */}
                <div className='flex-col justify-start w-full'>
                  <Skeleton className="object-cover min-h-[250px] pr-5 rounded-xl" /> \
                </div>
              </div>
        </section>

  </main>
  )
}