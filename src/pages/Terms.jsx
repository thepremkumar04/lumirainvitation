import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Lumira home">
          <span className="brand-mark">L</span><span>LUMIRA</span>
        </a>
        <a className="legal-back" href="/"><ArrowLeft size={15} /> Back to Lumira</a>
      </header>

      <div className="legal-inner">
        <p className="eyebrow">LEGAL · TERMS</p>
        <h1>Terms &amp;<br /><span>Conditions.</span></h1>
        <p className="legal-intro">These terms describe the general basis on which Lumira provides custom digital wedding invitations and related website services.</p>

        <section><h2>1. Services</h2><p>Lumira provides custom digital wedding invitations, wedding websites and related digital design services. Project scope, deliverables, timelines, revisions and pricing are agreed with the client before work begins.</p></section>
        <section><h2>2. Client responsibilities</h2><p>Clients are responsible for providing accurate names, dates, venue details, photographs, copy, branding assets and other materials needed for the project. Clients must have the right to use any content they provide to Lumira.</p></section>
        <section><h2>3. Payments</h2><p>Applicable fees, payment milestones and accepted payment methods will be communicated before the project begins. Work may begin or final files/access may be delivered only after the agreed payment requirements are met.</p></section>
        <section><h2>4. Revisions &amp; changes</h2><p>Revisions are handled according to the scope agreed for the selected service. Requests outside the agreed scope may require additional time or charges, which will be discussed before the extra work is completed.</p></section>
        <section><h2>5. Delivery &amp; access</h2><p>Digital invitations are delivered through an online link or other agreed digital method. Delivery timing depends on receiving the required client content and approvals. Clients should review all final details carefully before sharing the invitation with guests.</p></section>
        <section><h2>6. Third-party services</h2><p>Projects may rely on third-party services such as hosting, form processing, maps, fonts, analytics or communication platforms. Their availability and terms are controlled by those providers.</p></section>
        <section><h2>7. Intellectual property</h2><p>Client-provided content remains the client's responsibility. Unless otherwise agreed in writing, Lumira retains rights in its original design systems, reusable components and underlying development work. Final client-specific deliverables are provided according to the agreed project terms.</p></section>
        <section><h2>8. Accuracy</h2><p>Lumira will use reasonable care in preparing the project, but clients are responsible for approving names, dates, addresses, links and other wedding information before publication.</p></section>
        <section><h2>9. Contact</h2><p>Questions about these terms can be sent through the contact options on the Lumira website or via <a href="mailto:lumiracreative26@gmail.com">lumiracreative26@gmail.com</a>.</p></section>

        <div className="legal-footer"><span>© {new Date().getFullYear()} Lumira</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="https://www.instagram.com/lumirainvitations/" target="_blank" rel="noreferrer">◎ @lumirainvitations</a></div></div>
      </div>
    </main>
  );
}
