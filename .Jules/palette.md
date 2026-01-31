## 2025-05-14 - [Mobile Menu & Focus States]
**Learning:** Icon-only buttons (like mobile menu toggles) and interactive elements often lack proper ARIA labels and focus-visible indicators in this app's components, making them inaccessible to screen readers and keyboard users.
**Action:** Always audit navigation components for aria-expanded, aria-label, and focus-visible:ring styles to ensure a smooth, accessible experience for all users.

## 2025-05-14 - [Functional Forms Without Backend]
**Learning:** For purely informational SPAs without a backend, providing immediate functional feedback by triggering WhatsApp and Email redirects on form submission creates a surprisingly high-touch and personal user experience.
**Action:** Implement 'Success' UI states that clarify to the user that external apps were opened, ensuring they aren't confused by the simultaneous redirections.

## 2025-05-14 - [Focused Communication Channels]
**Learning:** Triggering multiple external applications (WhatsApp and Email) simultaneously can be overwhelming and lead to user confusion. A single, focused redirection to a preferred platform like WhatsApp provides a cleaner and more direct user journey.
**Action:** Prioritize a single primary contact method for automated redirects to minimize cognitive load and provide a clear, unified path for user interaction.
