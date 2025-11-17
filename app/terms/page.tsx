"use client";

import { useEffect, useState } from "react";

export default function TermsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-green-500">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8">Last Updated: March 2024</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Codewhiz LLC ("Company," "we," "our," or "us"),
              you agree to be bound by these Terms and Conditions. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services Provided</h2>
            <p className="mb-4">
              Codewhiz LLC provides a range of digital services including, but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Web Development</li>
              <li>Mobile Application Development</li>
              <li>Software Solutions</li>
              <li>Social Media Management</li>
              <li>Content Creation</li>
              <li>E-commerce Solutions</li>
              <li>Restaurant Management Systems</li>
              <li>Cloud Infrastructure Services</li>
              <li>Cybersecurity Solutions</li>
              <li>CodeWhiz Command Center (app.codewhiz.co) - Client portal and project management platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. CodeWhiz Command Center</h2>
            <p className="mb-4">
              The CodeWhiz Command Center (accessible at app.codewhiz.co) is our client portal and project
              management platform. By creating an account and using this platform, you agree to:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 Account Registration and Security</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Not share your account credentials with others</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.2 Acceptable Use</h3>
            <p className="mb-3">When using the Command Center, you must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Upload or transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to the platform or other user accounts</li>
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the platform's operation</li>
              <li>Scrape, data mine, or extract data without authorization</li>
              <li>Reverse engineer or attempt to access the platform's source code</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.3 Platform Availability</h3>
            <p>
              While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to the
              Command Center. We may perform scheduled maintenance, updates, or experience unplanned downtime.
              We will provide advance notice of scheduled maintenance when possible.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.4 Account Termination</h3>
            <p className="mb-3">We reserve the right to suspend or terminate your account if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You violate these Terms and Conditions</li>
              <li>You engage in fraudulent or illegal activities</li>
              <li>Your account has been inactive for an extended period</li>
              <li>We discontinue the platform or specific features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Client Responsibilities</h2>
            <p className="mb-4">Clients agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information necessary for project completion</li>
              <li>Respond to requests for feedback and approvals in a timely manner</li>
              <li>Make payments according to the agreed-upon schedule</li>
              <li>Respect intellectual property rights</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be outlined in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A deposit may be required before work begins</li>
              <li>Payment schedules will be established based on project milestones</li>
              <li>Final payment is due upon project completion and delivery</li>
              <li>Late payments may incur additional fees as specified in the project agreement</li>
              <li>All prices are in USD unless otherwise specified</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-4">
              Upon full payment, clients will receive ownership of the final deliverables as specified
              in the project agreement. However:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Codewhiz LLC retains rights to any pre-existing materials, tools, or frameworks used</li>
              <li>We reserve the right to showcase completed work in our portfolio unless otherwise agreed</li>
              <li>Source code and proprietary technologies developed by us remain our property unless explicitly transferred</li>
              <li>Third-party licenses and components must be respected by both parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
            <p>
              We respect the confidentiality of client information. Any confidential information shared
              during the course of a project will be kept secure and will not be disclosed to third parties
              without the client's consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Project Timeline and Delays</h2>
            <p className="mb-4">
              While we strive to meet all agreed-upon deadlines:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Timelines are estimates and may be affected by factors beyond our control</li>
              <li>Delays caused by client feedback or approval processes may extend delivery dates</li>
              <li>We will communicate any anticipated delays promptly</li>
              <li>Force majeure events may necessitate timeline adjustments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Revisions and Changes</h2>
            <p className="mb-4">
              Project agreements will specify the number of revision rounds included. Additional revisions
              or scope changes may incur additional fees. Significant changes to project scope will require
              a new agreement and adjusted pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Warranties and Disclaimers</h2>
            <p className="mb-4">
              We warrant that services will be performed in a professional manner. However:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We do not guarantee specific business results or outcomes</li>
              <li>We are not responsible for third-party service failures or changes</li>
              <li>Services are provided "as is" except where explicitly warranted</li>
              <li>We do not warrant uninterrupted or error-free service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Codewhiz LLC shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible
              losses resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p className="mb-4">
              Either party may terminate a project agreement:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>By mutual written agreement</li>
              <li>For breach of terms, with written notice and opportunity to cure</li>
              <li>Upon completion of all obligations under the agreement</li>
            </ul>
            <p className="mt-4">
              Upon termination, clients are responsible for payment for all work completed to date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Support and Maintenance</h2>
            <p>
              Post-project support and maintenance services are available separately and will be outlined
              in a separate agreement. Bug fixes for issues present at delivery may be covered under warranty
              terms specified in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws
              of the State of Florida, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall first be attempted to be resolved
              through good faith negotiation. If negotiation fails, disputes shall be resolved through binding
              arbitration in Broward County, Florida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting to our website. Continued use of our services after changes constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">17. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="ml-4 space-y-2">
              <p><strong>Codewhiz LLC</strong></p>
              <p>3015 W. Signature Dr.</p>
              <p>Davie, FL 33314</p>
              <p>Phone: (954) 901-8187</p>
              <p>Email: info@codewhiz.co</p>
            </div>
          </section>

          <section className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
