import { socialLinks } from "@/config/site";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

function SocialIcon({ platform }: { platform: (typeof socialLinks)[number]["platform"] }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.2 8.1H3.5V20h2.7V8.1ZM6.4 4.5A1.6 1.6 0 1 0 3.2 4.5a1.6 1.6 0 0 0 3.2 0ZM12 8.1H9.4V20H12v-5.9c0-1.6.3-3.1 2.3-3.1 2 0 2 1.8 2 3.2V20H19v-6.5c0-3.2-.7-5.7-4.4-5.7-1.8 0-3 1-3.5 1.9H11V8.1h1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.8 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H8V13h2.6v8h3.2Z" />
    </svg>
  );
}

export function SocialLinks({ className = "", linkClassName = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`grid size-10 place-items-center border border-current/20 transition-all duration-300 hover:-translate-y-0.5 ${linkClassName}`}
        >
          <span className="block size-[1.35rem]">
            <SocialIcon platform={social.platform} />
          </span>
        </a>
      ))}
    </div>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="size-4" aria-hidden="true">
      <path d="M6 3h7v7M13 3 6.5 9.5" />
      <path d="M11 9.5V13H3V5h3.5" />
    </svg>
  );
}
