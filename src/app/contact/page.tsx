import { Contact } from "@/components/pages/Contact/Contact";

export const metadata = {
  title: "Contact Us — CodeArenaX IT Solutions",
  description: "Get in touch with CodeArenaX. Email us at hello@codearenax.com or call +880 1700-000000 for IT project inquiries and bootcamps.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  );
}
