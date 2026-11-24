import { egyptianMobileSchema } from "@clinic/shared";

// Temporary Day 5 page: proves the web app can import @clinic/shared.
// Replaced by the real login page in Stage 1.
const sample = egyptianMobileSchema.safeParse("٠١٠ ١٢٣٤ ٥٦٧٨");

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold">Clinic Maestro</h1>
      <p className="text-zinc-600">
        Shared schema check:{" "}
        <code className="font-mono">
          {sample.success ? sample.data : sample.error.issues[0]?.message}
        </code>
      </p>
    </main>
  );
}
