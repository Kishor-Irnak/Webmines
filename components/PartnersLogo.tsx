// components/ui/logo-cloud-2.tsx
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("flex w-full flex-col items-center", className)}
      {...props}
    >
      {/* Added Title Here */}
      <h2 className="mb-8 text-center text-xl font-semibold tracking-tight text-white md:text-2xl">
        Our Official Partners
      </h2>

      <div className="relative w-full grid grid-cols-2 border-x md:grid-cols-4">
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

        <LogoCard
          className="relative border-r border-b bg-[#08070b]/50"
          logo={{
            src: "https://svgl.app/library/nvidia-wordmark-light.svg",
            alt: "Nvidia Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          className="border-b md:border-r"
          logo={{
            src: "https://svgl.app/library/supabase_wordmark_light.svg",
            alt: "Supabase Logo",
          }}
        />

        <LogoCard
          className="relative border-r border-b md:bg-[#08070b]/50"
          logo={{
            src: "https://svgl.app/library/github_wordmark_light.svg",
            alt: "GitHub Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          className="relative border-b bg-[#08070b]/50 md:bg-[#08070b]"
          logo={{
            src: "https://svgl.app/library/openai_wordmark_light.svg",
            alt: "OpenAI Logo",
          }}
        />

        <LogoCard
          className="relative border-r border-b bg-[#08070b]/50 md:border-b-0 md:bg-[#08070b]"
          logo={{
            src: "https://svgl.app/library/turso-wordmark-light.svg",
            alt: "Turso Logo",
          }}
        >
          <PlusIcon
            className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
            strokeWidth={1}
          />
        </LogoCard>

        <LogoCard
          className="border-b bg-[#08070b] md:border-r md:border-b-0 md:bg-[#08070b]/50"
          logo={{
            src: "https://svgl.app/library/clerk-wordmark-light.svg",
            alt: "Clerk Logo",
          }}
        />

        <LogoCard
          className="border-r"
          logo={{
            src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
            alt: "Claude AI Logo",
          }}
        />

        <LogoCard
          className="bg-[#08070b]/50"
          logo={{
            src: "https://svgl.app/library/vercel_wordmark.svg",
            alt: "Vercel Logo",
          }}
        />

        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
      </div>
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[#08070b] px-4 py-8 md:p-8",
        className,
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
