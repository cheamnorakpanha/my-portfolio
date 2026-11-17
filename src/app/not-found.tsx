import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-svh grid-paper text-ink flex items-center justify-center p-4">
      <div className="w-full max-w-xl brut brut-shadow bg-white">
        <div className="flex items-center justify-between bg-ink text-paper px-4 py-3">
          <span className="label">Error.log</span>
          <span className="label text-signal" aria-hidden="true">■ ■ ■</span>
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="display text-[clamp(6rem,30vw,12rem)] leading-none">
            4<span className="text-signal">0</span>4
          </h1>
          <p className="mt-4 text-lg font-semibold">This page doesn&apos;t exist or has moved.</p>
          <Link href="/" className="brut-btn bg-signal text-white mt-8">
            <ArrowLeft className="h-4 w-4" strokeWidth={3} />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
