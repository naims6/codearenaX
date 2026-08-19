"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems, FaqItem } from "@/data/faq";

type CategoryFilter = "All" | FaqItem["category"];

const categories: CategoryFilter[] = ["All", "Services", "Process", "Pricing", "Bootcamp", "General"];

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredItems = activeCategory === "All"
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-[15%] top-[20%] -z-10 size-[320px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[15%] -z-10 size-[300px] rounded-full bg-cyan-soft/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with CodeArenaX, our engineering process, and bootcamps."
        />
        {/* Accordion FAQ Items */}
        <div className="mt-10 mx-auto max-w-3xl space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={index * 60}>
                <div
                  className={`rounded-3xl transition-all duration-300 neu-raised bg-card overflow-hidden ${
                    isOpen ? "border-primary/40 ring-1 ring-primary/20" : "border-border/40"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`grid size-8 shrink-0 place-items-center rounded-xl transition-colors duration-300 neu-inset-sm ${
                        isOpen ? "bg-primary/15 text-primary" : "bg-surface text-muted-foreground group-hover:text-primary"
                      }`}>
                        <HelpCircle className="size-4" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div className={`grid size-8 shrink-0 place-items-center rounded-xl transition-transform duration-300 neu-inset-sm ${
                      isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}>
                      <ChevronDown className="size-4" />
                    </div>
                  </button>

                  {/* Expandable answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-6" : "grid-rows-[0fr] opacity-0 px-6"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 border-t border-border/30 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
