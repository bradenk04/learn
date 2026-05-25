import { A, useLocation } from "@solidjs/router";
import { Command, Terminal } from "lucide-solid";
import { createSignal, onCleanup, onMount } from "solid-js";

export default function NavBar() {
  const loc = useLocation();

  const renderNavLink = (title: string, href: string) => {
    const active = href !== "/" ? loc.pathname.startsWith(href) : loc.pathname === href;
    return (
      <A
        href={href}
        classList={{
          "px-2.5 py-1 rounded-sm transition-all duration-150": true,
          "text-foreground": active,
          "text-muted-foreground hover:text-foreground": !active,
        }}
      >
        {title}
      </A>
    );
  };

  return (
    <>
      <header class="border-border/70 bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 border-b backdrop-blur">
        <div class="mx-auto flex h-12 max-w-6xl items-center px-5">
          <A href="/" class="group flex items-center gap-2">
            <Terminal size={15} stroke-width={1.5} class="text-foreground" />
            <span class="font-mono text-[12px] tracking-[0.16em] uppercase">learning</span>
          </A>
          <nav class="items-centter ml-8 hidden gap-1 text-sm md:flex">
            {renderNavLink("Home", "/")}
            {renderNavLink("Catalog", "/catalog")}
            {renderNavLink("About", "/about")}
          </nav>
          <div class="ml-auto flex items-center gap-2">
            <button
              onClick={() => alert("TODO")}
              class="text-muted-foreground border-border/70 hover:text-foreground hover:border-border hidden items-center gap-2 rounded-sm border px-2 py-1 text-xs transition-all duration-150 sm:inline-flex"
            >
              <span>Search lessons</span>
              <span class="border-border/70 inline-flex items-center gap-0.5 rounded-sm border px-1 py-px font-mono text-[10px]">
                <Command size={9} stroke-width={1.5} />K
              </span>
            </button>
            <A
              href="/catalog"
              class="bg-primary text-primary-foreground rounded-sm px-2.5 py-1.5 text-xs font-medium transition-all duration-150 hover:opacity-90"
            >
              Start Learning
            </A>
          </div>
        </div>
      </header>
    </>
  );
}
