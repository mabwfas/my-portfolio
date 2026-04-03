import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Mobile App Developer</h4>
                <h5>Paytm (One97 Communications)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Core team member during Paytm's hypergrowth phase — built features serving 100M+ users. Developed QR code scanner and merchant payment flow processing 5M+ daily UPI transactions. Built the Paytm Postpaid module generating ₹200 Cr+ in monthly disbursals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Mobile App Developer</h4>
                <h5>Razorpay</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Implemented UPI deep-link integration, biometric auth, and real-time settlement tracking. Reduced app ANR rate by 76% through systematic memory leak detection. Led mobile SDK development powering payment flows in 50,000+ partner apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Mobile App Developer</h4>
                <h5>Flipkart (Walmart Inc.)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led the mobile checkout redesign increasing conversion rate by 18% across Flipkart's 200M+ user base. Architected offline-first cart sync engine reducing order failures by 35% in low-connectivity zones. Built Flutter-based seller app used by 500K+ merchants.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Mobile App & Shopify Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering end-to-end mobile apps and custom Shopify stores for 12+ clients across fintech, health, and e-commerce. Architected and shipped 8 production apps with Flutter and React Native. Built 15+ custom Shopify stores with bespoke themes, Liquid templates, and third-party integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
