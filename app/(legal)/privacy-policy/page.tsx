
import dynamic from 'next/dynamic'
const PrivacyPolicy = dynamic(() => import('@/components/legal/PrivacyPolicy')) 

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
          <PrivacyPolicy />
    </main>
  );
}
