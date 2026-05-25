import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import NavBar from "~/components/layout/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section class="border-b border-border/70">
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-start">
          <div class="md:col-span-7">
            <h1 class="mt-6 text-[42px] md:text-[58px] leading-[1.02] tracking-[-0.025em] font-medium">Heading</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
