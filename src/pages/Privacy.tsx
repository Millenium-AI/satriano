// src/pages/Privacy.tsx
import { ArrowLeft } from 'lucide-react';
import TopStrip from '../components/TopStrip';

export default function Privacy() {
  return (
    <>
      <TopStrip />
      <section className="py-10 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back to home link - matches Hero button styling */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#800020] px-6 py-3 rounded-lg font-semibold border-2 border-[#800020] hover:bg-[#800020] hover:text-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-slate-600 mb-4">
            This privacy policy ("policy") explains how Satriano Marine
            Construction, LLC ("SMC") uses and protects user data provided when
            visiting and using this website. SMC reserves the right to change this
            policy at any time, and recommends that you review this page
            periodically for the latest information.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
            What User Data We Collect
          </h2>
          <p className="text-slate-600 mb-2">
            When you visit this website, SMC may collect:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            <li>Your IP address</li>
            <li>Your contact information and email address (when you submit it)</li>
            <li>Information such as comments you leave on the site</li>
            <li>Data related to your online behavior on this website</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
            Why We Collect Your Data
          </h2>
          <p className="text-slate-600 mb-2">
            SMC collects data for several reasons, including:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
            <li>To better understand your needs</li>
            <li>To improve our services and website</li>
            <li>
              To send relevant information or promotional emails, when appropriate
            </li>
            <li>
              To customize the website according to your online behavior and
              preferences
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
            Safeguarding and Securing the Data
          </h2>
          <p className="text-slate-600 mb-4">
            SMC is committed to securing user data and keeping it confidential. We
            work to prevent data theft, unauthorized access, and disclosure by
            using reasonable technologies and safeguards. SMC does not and will
            not sell or share user data with any third‑party company.
          </p>
          <p className="text-slate-600 mb-4">
            Any comments and their metadata may be retained indefinitely. For
            users that register, SMC stores the information provided in their user
            profile. Users may see, edit, or delete their own personal
            information at any time, except for their username. Visitor comments
            may be checked through an automated spam detection service.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-3">
            Cookie Policy
          </h2>
          <p className="text-slate-600 mb-4">
            This website may use cookies to analyze web traffic, understand which
            pages you visit, and help customize the site to your needs. Cookies do
            not give SMC access to your computer or any information you do not
            choose to share. They are used to identify which pages are useful and
            which are not, so we can provide a better user experience.
          </p>

          <p className="text-slate-500 text-sm mt-8">
            If you have questions about this policy, please contact
            {' '}
            <a
              href="mailto:sal@satrianomarine.com"
              className="text-[#800020] underline"
            >
              sal@satrianomarine.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
