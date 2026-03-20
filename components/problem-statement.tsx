import Image from "next/image";
import problemBg from "../public/assets/problem-bg.png";

export default function ProblemStatement() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#08070b] p-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={problemBg}
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="max-w-[460px] relative z-10">
        <p className="font-serif text-3xl text-white leading-snug tracking-tight">
          Launching a Brand
          <br />
          Shouldn't Cost You Before Your First Order.
        </p>
      </div>
    </div>
  );
}
