import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Lumira home">
          <span className="brand-mark">L</span><span>LUMIRA</span>
        </a>
        <a className="legal-back" href="/"><ArrowLeft size={15} /> Back to Lumira</a>
      </header>

      <div className="legal-inner">
        <p className="eyebrow">LEGAL · PRIVACY</p>
        <h1>Privacy<br /><span>Policy.</span></h1>
        <p className="legal-intro">Lumira respects your privacy. This policy explains the information we may receive when you use our website or contact us about a project.</p>

        <section><h2>1. Information we collect</h2><p>When you submit a project enquiry, we may receive information such as your name, email address, phone or WhatsApp number, wedding date, guest count, selected service and the project details you choose to provide.</p></section>
        <section><h2>2. How we use information</h2><p>We use enquiry information to understand your requirements, respond to your questions, prepare proposals or quotes, communicate about projects and provide requested services.</p></section>
        <section><h2>3. Form processing</h2><p>Our enquiry form may use a third-party form-processing provider to securely transmit submissions to Lumira. Information submitted through the form may therefore be processed by that provider according to its own privacy terms.</p></section>
        <section><h2>4. Website services</h2><p>Our website may use third-party services for hosting, fonts, maps, embedded invitation previews, analytics or other functionality. These services may process limited technical information required to provide their functionality.</p></section>
        <section><h2>5. Your information</h2><p>We do not intentionally sell your personal information. We use information for legitimate business purposes connected with your enquiry or project and take reasonable steps to avoid unnecessary access or disclosure.</p></section>
        <section><h2>6. Your choices</h2><p>You can contact Lumira to ask about the personal information you have provided through an enquiry or to request correction of inaccurate information, subject to applicable legal requirements.</p></section>
        <section><h2>7. Children</h2><p>Our services are intended for adults planning or supporting wedding and event celebrations. We do not knowingly request personal information from children.</p></section>
        <section><h2>8. Policy updates</h2><p>We may update this policy when our services, website or legal obligations change. The latest version will be published on this page.</p></section>
        <section><h2>9. Contact</h2><p>For privacy questions, contact <a href="mailto:lumiracreative26@gmail.com">lumiracreative26@gmail.com</a> or use the contact options on the Lumira website.</p></section>

        <div className="legal-footer"><span>© {new Date().getFullYear()} Lumira</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="https://www.instagram.com/lumirainvitations/" target="_blank" rel="noreferrer">◎ @lumirainvitations</a></div></div>
      </div>
    </main>
  );
}
