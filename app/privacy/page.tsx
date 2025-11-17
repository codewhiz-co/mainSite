"use client";

import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-green-500">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: March 2024</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Codewhiz LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services. Please read this policy carefully to understand our practices regarding your
              personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Company name and job title</li>
              <li>Payment and billing information</li>
              <li>Account credentials and authentication information for Command Center (app.codewhiz.co)</li>
              <li>User profile information and preferences</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Website usage data and analytics</li>
              <li>Log files and error reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.3 Project-Related Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Project requirements and specifications</li>
              <li>Business information shared during consultations</li>
              <li>Feedback and communications related to our services</li>
              <li>Files and content provided for project work</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.4 Command Center Platform Data</h3>
            <p className="mb-3">
              When you use the CodeWhiz Command Center (app.codewhiz.co), we collect additional information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account activity and login history</li>
              <li>Platform usage patterns and feature interactions</li>
              <li>Project documents, messages, and collaboration data</li>
              <li>Dashboard preferences and custom settings</li>
              <li>Session data and authentication tokens</li>
              <li>Performance metrics and error logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Collect Information</h2>
            <p className="mb-4">We collect information through various methods:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Directly from you:</strong> When you fill out forms, contact us, or use our services</li>
              <li><strong>Automatically:</strong> Through cookies, analytics tools, and server logs</li>
              <li><strong>From third parties:</strong> Such as payment processors or business partners</li>
              <li><strong>Through communications:</strong> Email, phone calls, meetings, and chat interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Providing and delivering our services, including the Command Center platform</li>
              <li>Processing payments and maintaining billing records</li>
              <li>Communicating with you about projects, updates, and support</li>
              <li>Managing your Command Center account and providing platform features</li>
              <li>Facilitating project collaboration and file sharing through the platform</li>
              <li>Improving our services and developing new features</li>
              <li>Analyzing website and platform usage to optimize user experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Monitoring platform security and preventing unauthorized access</li>
              <li>Complying with legal obligations and protecting our rights</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Service Providers</h3>
            <p className="mb-3">
              We may share information with third-party service providers who perform services on our behalf,
              such as:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment processors</li>
              <li>Cloud hosting providers</li>
              <li>Analytics services</li>
              <li>Email service providers</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Legal Requirements</h3>
            <p className="mb-3">We may disclose information when required by law or to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Enforce our terms and agreements</li>
              <li>Prevent fraud or illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred
              to the acquiring entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your information,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encryption of data in transit and at rest using industry-standard protocols</li>
              <li>Secure server infrastructure and access controls</li>
              <li>Multi-factor authentication options for Command Center accounts</li>
              <li>Regular security assessments, penetration testing, and vulnerability scans</li>
              <li>Secure data centers with physical and network security measures</li>
              <li>Employee training on data protection and security best practices</li>
              <li>Incident response procedures and security monitoring</li>
              <li>Regular backups to prevent data loss</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure.
              While we strive to protect your information, we cannot guarantee absolute security. You are
              responsible for maintaining the confidentiality of your Command Center account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined
              in this policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Account Data:</strong> Retained while your Command Center account is active and for a reasonable period after account closure</li>
              <li><strong>Project Data:</strong> Retained for the duration of the project and as specified in your agreement</li>
              <li><strong>Communication Records:</strong> Retained for business purposes and legal compliance</li>
              <li><strong>Usage Data:</strong> Typically retained for up to 2 years for analytics purposes</li>
              <li><strong>Backup Data:</strong> May be retained in backup systems for up to 90 days</li>
            </ul>
            <p className="mt-4">
              When data is no longer needed, we will securely delete or anonymize it. You may request deletion
              of your data at any time by contacting us, subject to legal retention requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience on our website. These may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="mt-4">
              You can control cookie settings through your browser preferences. Note that disabling certain
              cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Your Privacy Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of these external sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware that we have collected information from
              a child, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of
              residence. These countries may have different data protection laws. We ensure appropriate
              safeguards are in place to protect your information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. California Privacy Rights</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer
              Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to request deletion of personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              legal requirements. We will notify you of any material changes by posting the updated policy
              on our website with a new "Last Updated" date. Your continued use of our services after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
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
              By using our website and services, you acknowledge that you have read and understood this
              Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
