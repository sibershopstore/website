import React from 'react';
import Section from '../components/ui/Section';

const TermsOfService: React.FC = () => {
  return (
    <Section id="tos" title="Term of Service" className="pt-32">
      <div className="prose max-w-4xl mx-auto">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Siber Shop Store services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Service Description</h2>
        <p>Our services include but are not limited to:</p>
        <ul>
          <li>Website development and maintenance</li>
          <li>Cybersecurity solutions</li>
          <li>Digital forensics</li>
          <li>Educational e-books</li>
          <li>Social media account management</li>
          <li>Digital marketing services</li>
        </ul>

        <h2>3. User Obligations</h2>
        <p>As a user of our services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Use services in compliance with applicable laws</li>
          <li>Not engage in any unauthorized activities</li>
        </ul>

        <h2>4. Service Level Agreement</h2>
        <p>We commit to:</p>
        <ul>
          <li>24/7 technical support</li>
          <li>99.9% uptime guarantee for hosting services</li>
          <li>Response time within 1 hour for critical issues</li>
          <li>Regular maintenance and updates</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>All content and materials provided through our services are protected by intellectual property rights:</p>
        <ul>
          <li>Copyright protection for all materials</li>
          <li>Trademark rights for our brand assets</li>
          <li>License agreements for third-party content</li>
        </ul>

        <h2>6. Data Protection</h2>
        <p>We implement strict data protection measures:</p>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Regular security audits</li>
          <li>Compliance with data protection regulations</li>
          <li>Secure data storage and transmission</li>
        </ul>

        <h2>7. Payment Terms</h2>
        <p>Our payment terms include:</p>
        <ul>
          <li>Upfront payment for services</li>
          <li>Multiple payment methods accepted</li>
          <li>Clear pricing structure</li>
          <li>Refund policy as per agreement</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>Our liability is limited to:</p>
        <ul>
          <li>Direct damages caused by our negligence</li>
          <li>The amount paid for services</li>
          <li>Exclusion of indirect damages</li>
        </ul>

        <h2>9. Termination</h2>
        <p>Services may be terminated:</p>
        <ul>
          <li>By mutual agreement</li>
          <li>For violation of terms</li>
          <li>With 30 days notice</li>
        </ul>

        <h2>10. Contact Information</h2>
        <p>For questions about these terms, contact us at:</p>
        <ul>
          <li>Email: sibershop.store@gmail.com</li>
          <li>WhatsApp: +62 851 7415 5134</li>
        </ul>
      </div>
    </Section>
  );
};

export default TermsOfService;