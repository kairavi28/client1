import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "13062508928"; // +1 (306) 250-8928
  const message = `Hi! I would like to book an appointment at Shilpa's Beauty Studio.

My details:
• Name:
• Service:
• Preferred Date:
• Preferred Time:

Thank you!`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;
