export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 bg-slate-950 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Soumya Shree S. All rights reserved.
      </p>
    </footer>
  );
}
