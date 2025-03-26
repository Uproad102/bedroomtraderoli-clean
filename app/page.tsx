// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
        <Image
          src="/banner.jpg"
          alt="Bedroom Trader Oli"
          width={800}
          height={400}
          className="mx-auto mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Bedroom Trader Oli</h1>
        <p className="text-lg mb-6">
          We specialize in developing and managing internet cafés and gaming centers,
          offering software solutions and an extensive client network of over 10,000 active users.
        </p>
        <p className="text-base text-gray-300">
          Whether you're starting a new gaming lounge or looking to upgrade your existing setup,
          our tools and services are tailored to help you succeed.
        </p>
      </div>
    </main>
  );
}
