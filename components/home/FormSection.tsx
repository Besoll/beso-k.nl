import dynamic from 'next/dynamic'
const GetStarted = dynamic(() => import('@/components/global/lotties/GetStarted')) 
const FormSMTP = dynamic(() => import('@/components/contact/FormSMTP')) 

const FormSection = ({formItems} : {formItems: {
    title?: string, 
    submit?: string, 
    submitting?: string, 
    thankYou?: string, 
    thankYouMessage?: string, 
    errorName?: string, 
    errorCompanyName?: string, 
    errorEmail?: string, 
    errorPhone?: string,
    placeholderName?: string, 
    placeholderCompanyName?: string, 
    placeholderEmail?: string, 
    placeholderPhone?: string,
}}) => {
  return (
    <div className='bg-MainBG shadow-xl w-[95%] rounded-xl py-8 md:px-8 flex flex-col 
    justify-center items-center  max-w-[1440px] gap-6 scroll-mt-4 mt-6 md:mt-12
    md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto text-center z-10' id="contact">
      <GetStarted className='max-w-[100px] md:max-w-[200px]'/>
      <p className='text-black text-2xl font-semibold -mt-4 md:-mt-8'>  
        {formItems?.title}
      </p>
      <FormSMTP formItems={formItems}/>
    </div>
  )
}

export default FormSection