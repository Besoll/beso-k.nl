
import dynamic from 'next/dynamic'
const Imprint = dynamic(() => import('@/components/legal/Imprint')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
          <Imprint />
    </main>
  );
}
