import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-koyu-yesil px-6">
      {/* 404 Heading */}
      <h1 className="font-clash text-[8rem] font-bold leading-none text-hardal-sarisi sm:text-[12rem]">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 font-clash text-2xl font-semibold text-white sm:text-3xl">
        Sayfa Bulunamadı
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md text-center font-poppins text-base text-white/60">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
        dönerek devam edebilirsiniz.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-hardal-sarisi px-8 py-3 font-syne text-base font-semibold text-koyu-yesil transition-colors duration-200 hover:bg-hardal-sarisi/90"
      >
        Ana Sayfaya Dön
      </Link>

      {/* Decorative line */}
      <div className="mt-16 h-px w-24 bg-mat-yesil/30" />
    </div>
  );
}
