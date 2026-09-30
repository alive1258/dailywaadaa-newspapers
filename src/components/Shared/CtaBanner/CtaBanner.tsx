import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
}

const CtaBanner = ({
  title,
  subtitle,
  buttonText = "Book Appointment",
  buttonHref = "/contact",
}: CtaBannerProps) => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold text-brand-900">
          {title}
        </h2>
        <p className="max-w-lg text-brand-900/60">{subtitle}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
        >
          {buttonText}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
