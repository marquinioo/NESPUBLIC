import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#0A0E14] px-6 text-center text-white">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-gray-400">Página no encontrada</p>
        <Link href="/" className="mt-8 text-green-400 hover:underline">
          Volver al inicio
        </Link>
      </body>
    </html>
  );
}
