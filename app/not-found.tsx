import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 relative">
      <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-center text-center p-6">
        <h2>Finnst ekki!</h2>
        <p>Þessi síða er því miður ekki til</p>
        <Link href="/">Fara heim</Link>
      </section>
    </div>
  );
}
