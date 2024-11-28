import dynamic from 'next/dynamic'
const CookiePolicy = dynamic(() => import('@/components/legal/CookiePolicy')) 


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
          <CookiePolicy />
    </main>
  );
}
