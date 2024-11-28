
import dynamic from 'next/dynamic'
const TermsAndConditions = dynamic(() => import('@/components/legal/TermsAndConditions')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">          
          <TermsAndConditions />
    </main>
  );
}
