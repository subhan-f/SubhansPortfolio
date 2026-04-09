import { CustomCursor } from "~/components/shared/CustomCursor";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "~/components/shared/WhatsAppButton";
import { Footer } from "./Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <CustomCursor />
    <Navbar />
    <main className="relative gradient text-white min-h-screen">{children}</main>
    <WhatsAppButton />
    <Footer />
  </>
);