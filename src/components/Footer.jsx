export default function Footer() {
  return (
    <footer className="bg-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

        <div className="font-semibold text-gray-800">
          Copy & Paste
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>

        <div className="text-sm text-gray-500">
          © 2026 Copy & Paste
        </div>
      </div>
    </footer>
  );
}