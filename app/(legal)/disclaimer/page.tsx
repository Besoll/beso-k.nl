
import dynamic from 'next/dynamic'
const Disclaimer = dynamic(() => import('@/components/legal/Disclaimer')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
          <Disclaimer />
    </main>
  );
}
