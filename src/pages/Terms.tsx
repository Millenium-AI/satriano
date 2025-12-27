// src/pages/Terms.tsx
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back to home link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#800020] hover:text-[#A0522D] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Home</span>
        </a>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Terms &amp; Conditions
        </h1>

        <p className="text-slate-600 mb-4">
          Please read these terms and conditions ("terms") carefully before
          using this website operated by Satriano Marine Construction, LLC
          ("SMC"). By accessing or using this website, you agree to be bound by
          these terms.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Conditions of Use
        </h2>
        <p className="text-slate-600 mb-4">
          By using this website, you certify that you have read and reviewed
          this Agreement and that you agree to comply with its terms. If you do
          not want to be bound by this Agreement, you should stop using the
          website. SMC only grants use and access to this website, its products,
          and its services to those who have accepted these terms.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Privacy Policy
        </h2>
        <p className="text-slate-600 mb-4">
          Before continuing to use this website, SMC recommends that you read
          the Privacy Policy to understand how user data is collected and used.
          Your continued use of the website signifies your agreement with the
          Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Age Restriction
        </h2>
        <p className="text-slate-600 mb-4">
          You must be at least 18 years of age to use this website. By using
          this website, you warrant that you are at least 18 years old and are
          legally able to enter into this Agreement. SMC assumes no
          responsibility for liabilities related to age misrepresentation.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Intellectual Property
        </h2>
        <p className="text-slate-600 mb-4">
          All materials, products, and services on this website are the property
          of SMC or its licensors, including copyrights, trademarks, and other
          intellectual property rights. You agree not to reproduce, distribute,
          or exploit any content from this website without prior written
          permission from SMC. By submitting content to the website, you grant
          SMC a royalty‑free, non‑exclusive license to display, use, copy,
          transmit, and broadcast that content.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          User Accounts
        </h2>
        <p className="text-slate-600 mb-4">
          If you create an account on this website, you are responsible for
          maintaining the confidentiality of your login information and for all
          activities that occur under your account. You agree to provide
          accurate information and to notify SMC of any suspected unauthorized
          use of your account. SMC reserves the right to terminate accounts or
          remove content at its discretion.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Applicable Law
        </h2>
        <p className="text-slate-600 mb-4">
          By visiting this website, you agree that the laws of the State of
          Florida, without regard to conflict of law principles, will govern
          these terms and any dispute that may arise between you and SMC or its
          business partners.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Disputes
        </h2>
        <p className="text-slate-600 mb-4">
          Any dispute related in any way to your visit to this website or to
          products or services you purchase from SMC shall be brought in a state
          or federal court located in Florida. You consent to the exclusive
          jurisdiction and venue of such courts.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Indemnification
        </h2>
        <p className="text-slate-600 mb-4">
          You agree to indemnify and hold harmless SMC and its affiliates from
          any legal claims and demands that may arise from your use or misuse of
          this website or services. SMC reserves the right to select its own
          legal counsel in such matters.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-slate-600 mb-4">
          SMC is not liable for any damages that may occur to you as a result of
          your use or misuse of this website. SMC reserves the right to edit,
          modify, or change this Agreement at any time. Continued use of the
          website after changes are posted will constitute your acceptance of
          the revised terms.
        </p>

        <p className="text-slate-500 text-sm mt-8">
          This Agreement constitutes the entire understanding between SMC and
          the user regarding use of this website and supersedes any prior
          agreements.
        </p>
      </div>
    </section>
  );
}
