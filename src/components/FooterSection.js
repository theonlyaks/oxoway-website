import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20 px-4">
      <div className="max-w-6xl mx-auto flex justify-center space-x-6">
        <Link href="/privacy" target="_blank" className="hover:text-white transition duration-300">
          Privacy Policy
        </Link>
        <Link href="/terms" target="_blank" className="hover:text-white transition duration-300">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}