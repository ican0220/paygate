"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/pay');
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <Image src={"/images/logo.png"} width={200} height={50} alt="logo" />
      <p>Welcome, this is paygate website.</p>
      <div>
        <h3 className="text-[24px]">There are two pages.</h3>
        <ul className="list-disc ml-5">
          <li>Pay Page - /pay</li>
          <li>Invoice Page - /invoice</li>
        </ul>
      </div>
    </main>
  );
}
