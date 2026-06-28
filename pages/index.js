export default function Home() {
  const siteBg = "#f8fafc";
  const dark = "#111827";
  const muted = "#4b5563";
  const lightMuted = "#d1d5db";

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: siteBg,
        color: dark,
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="/logo.png"
          alt="Think Better Sell Better Logo"
          style={{
            width: "190px",
            maxWidth: "45vw",
            height: "auto",
            display: "block",
            backgroundColor: siteBg,
          }}
        />

        <a
          href="#apply"
          style={{
            backgroundColor: dark,
            color: "white",
            padding: "12px 18px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "0.95rem",
            whiteSpace: "nowrap",
          }}
        >
          Apply Now
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "70px 24px 55px",
          textAlign: "center",
        }}
      >
        <p style={eyebrow}>THINK BETTER SELL BETTER PRESENTS</p>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6.7rem)",
            lineHeight: "0.95",
            margin: "0 auto 24px",
            letterSpacing: "-4px",
            maxWidth: "980px",
          }}
        >
          Become The Person Your Future Depends On.
        </h1>

        <p
          style={{
            fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)",
            maxWidth: "780px",
            margin: "0 auto 18px",
            lineHeight: "1.5",
            color: muted,
            fontWeight: "600",
          }}
        >
          Introducing the Live Better Framework™ — A 90-Day Transformation System
          for people ready to stop drifting and start building a life with meaning,
          discipline, clarity, and real execution.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            maxWidth: "680px",
            margin: "0 auto 34px",
            lineHeight: "1.8",
            color: muted,
          }}
        >
          Built for entrepreneurs, sales professionals, and individuals who know they
          are capable of more.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a href="#apply" style={primaryButton}>
            Apply For The 90-Day Transformation
          </a>

          <a href="#story" style={secondaryButton}>
            Read My Story
          </a>
        </div>
      </section>

      {/* REALIZATION */}
      <section style={sectionStyle}>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <p style={eyebrow}>THERE COMES A POINT</p>
          <h2 style={h2Style}>Another motivational video is not going to change your life.</h2>
          <p style={largeP}>
            Another podcast will not fix your habits. Another book will not create
            discipline. At some point, your future stops waiting on motivation and
            starts waiting on a better version of you.
          </p>
        </div>
      </section>

      {/* TWO BRANDS */}
      <section style={sectionStyle}>
        <div style={twoColumnGrid}>
          <div style={cardStyle}>
            <p style={eyebrow}>PERSONAL TRANSFORMATION</p>
            <h2 style={h2Style}>Live Better Framework™</h2>
            <p style={pStyle}>
              A 90-day transformation system for people who are tired of living on
              autopilot and ready to build stronger thinking, stronger habits, and a
              more meaningful life.
            </p>
          </div>

          <div style={cardStyle}>
            <p style={eyebrow}>BUSINESS & SALES PERFORMANCE</p>
            <h2 style={h2Style}>Think Better Sell Better™</h2>
            <p style={pStyle}>
              Coaching and training for entrepreneurs, business owners, and sales
              professionals who want to improve mindset, communication, positioning,
              sales conversations, and execution.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" style={sectionStyle}>
        <div style={cardStyle}>
          <p style={eyebrow}>MY STORY</p>
          <h2 style={h2Style}>I created this because I know what it feels like to want more from yourself.</h2>

          <p style={pStyle}>
            For a long time, I knew I was capable of more. I had ambition. I had ideas.
            I had goals. But I also had moments where I felt stuck, unclear, frustrated,
            and unsure how to turn everything I was learning into real results.
          </p>

          <p style={pStyle}>
            I started studying the people, books, and principles that helped me think
            differently. Over time, I realized transformation does not happen by accident.
            It happens when your mind, habits, environment, and actions begin moving in
            the same direction.
          </p>

          <p style={pStyle}>
            That is why I created the Live Better Framework. I wanted to build something
            practical for people who do not just want more information. They want a new
            standard for their life.
          </p>

          <p style={pStyle}>
            My mission is not to sell motivation. My mission is to help people rebuild
            the way they think, take ownership of their life, and start moving toward
            the future they know they are capable of creating.
          </p>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section style={sectionStyle}>
        <div style={{ ...cardStyle, backgroundColor: dark, color: "white" }}>
          <p style={{ ...eyebrow, color: "#9ca3af" }}>THE TRANSFORMATION</p>
          <h2 style={{ ...h2Style, color: "white" }}>This is not about becoming perfect. It is about becoming intentional.</h2>

          <p style={{ ...pStyle, color: lightMuted }}>
            I cannot do the work for you. Nobody can. But I can help you see what needs
            to change, simplify the lessons that transformed my own mindset, and guide
            you toward the habits, perspective, and actions that make real progress possible.
          </p>

          <div style={darkGrid}>
            {[
              "More clarity",
              "More discipline",
              "More confidence",
              "Better habits",
              "Stronger mindset",
              "Better communication",
              "Better execution",
              "More meaningful direction",
            ].map((item, index) => (
              <div key={index} style={darkBox}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <p style={eyebrow}>WHO THIS IS FOR</p>
          <h2 style={h2Style}>For the person who knows they are capable of more.</h2>

          <div style={gridStyle}>
            {[
              "You feel like you are meant for more, but you are not living like it yet.",
              "You are tired of making excuses and want a clear path forward.",
              "You want to build discipline, confidence, purpose, and consistency.",
              "You own a business and need stronger thinking, better execution, and clearer direction.",
              "You are in sales and want to improve communication, confidence, and performance.",
              "You do not need another motivational video. You need a system, accountability, and a reason to follow through.",
            ].map((item, index) => (
              <div key={index} style={boxStyle}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section style={sectionStyle}>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <p style={eyebrow}>WHY THIS IS DIFFERENT</p>
          <h2 style={h2Style}>Information does not change lives. Execution does.</h2>
          <p style={largeP}>
            The Live Better Framework is built around transformation, not entertainment.
            The goal is to help you think better, live better, and build better by taking
            meaningful action over a focused 90-day period.
          </p>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section style={sectionStyle}>
        <div style={twoColumnGrid}>
          <div style={{ ...cardStyle, backgroundColor: "#ffffff" }}>
            <p style={eyebrow}>FOR ENTREPRENEURS</p>
            <h2 style={h2Style}>Build better thinking around your business.</h2>
            <p style={pStyle}>
              If you own a business, your results are connected to the way you think,
              communicate, position your offer, follow up, and execute. Think Better
              Sell Better helps you identify where momentum is being lost and where
              better decisions can create better opportunities.
            </p>
          </div>

          <div style={{ ...cardStyle, backgroundColor: "#ffffff" }}>
            <p style={eyebrow}>FOR SALES PROFESSIONALS</p>
            <h2 style={h2Style}>Sell from a stronger mindset.</h2>
            <p style={pStyle}>
              Sales is not just scripts and tactics. It is confidence, communication,
              consistency, listening, belief, preparation, and follow-through. The way
              you think directly impacts the way you sell.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
            background:
              "linear-gradient(135deg, #111827 0%, #1f2937 55%, #374151 100%)",
            color: "white",
          }}
        >
          <p style={{ ...eyebrow, color: "#d1d5db" }}>READY TO BEGIN?</p>
          <h2 style={{ ...h2Style, color: "white" }}>The next 90 days can become a turning point.</h2>
          <p style={{ ...largeP, color: "#e5e7eb" }}>
            If you are ready to stop negotiating with the version of yourself you no
            longer want to be, apply below.
          </p>
          <a href="#apply" style={{ ...primaryButton, backgroundColor: "white", color: dark }}>
            Apply Now
          </a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "24px 24px 80px",
        }}
      >
        <div style={cardStyle}>
          <p style={{ ...eyebrow, textAlign: "center" }}>APPLICATION</p>
          <h2 style={{ ...h2Style, textAlign: "center" }}>
            Apply For The Live Better Framework™
          </h2>

          <p style={{ ...pStyle, textAlign: "center", maxWidth: "720px", margin: "0 auto 28px" }}>
            Tell me where you are now, what you are trying to change, and what would make
            the next 90 days meaningful for you.
          </p>

          <form
            action="https://formspree.io/f/xeervwbl"
            method="POST"
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <input type="hidden" name="_subject" value="New Lead - Live Better Framework" />

            <input name="firstName" placeholder="First Name" required style={inputStyle} />

            <input name="lastName" placeholder="Last Name" required style={inputStyle} />

            <input name="email" type="email" placeholder="Email Address" required style={inputStyle} />

            <select name="interest" required style={inputStyle}>
              <option value="">What best describes you?</option>
              <option value="Individual Transformation">Individual Transformation</option>
              <option value="Entrepreneur / Business Owner">Entrepreneur / Business Owner</option>
              <option value="Sales Professional">Sales Professional</option>
            </select>

            <textarea
              name="currentSituation"
              placeholder="Where are you right now in your life, career, sales role, or business?"
              rows="5"
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <textarea
              name="desiredTransformation"
              placeholder="What would you want to be different 90 days from now?"
              rows="5"
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button type="submit" style={buttonStyle}>
              Submit My Application
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "32px 24px",
          textAlign: "center",
          color: muted,
        }}
      >
        <p style={{ fontWeight: "700", color: dark, marginBottom: "10px" }}>
          Think Better Sell Better
        </p>

        <p style={{ marginBottom: "16px" }}>
          Helping people build better lives and better businesses.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://www.youtube.com/@mckaysalesandlifecoaching"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            YouTube
          </a>

          <a
            href="https://www.linkedin.com/in/skylar-mckay-37456b65/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

const sectionStyle = {
  maxWidth: "1150px",
  margin: "0 auto",
  padding: "18px 24px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "26px",
  padding: "42px 32px",
  boxShadow: "0 18px 45px rgba(17, 24, 39, 0.08)",
  border: "1px solid #eef2f7",
};

const eyebrow = {
  fontSize: "0.78rem",
  fontWeight: "800",
  letterSpacing: "1.6px",
  color: "#6b7280",
  textTransform: "uppercase",
  marginBottom: "14px",
};

const h2Style = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: "1.1",
  letterSpacing: "-1.5px",
  margin: "0 0 18px",
};

const pStyle = {
  color: "#4b5563",
  lineHeight: "1.85",
  fontSize: "1.05rem",
  marginBottom: "16px",
};

const largeP = {
  color: "#4b5563",
  lineHeight: "1.75",
  fontSize: "1.18rem",
  maxWidth: "820px",
  margin: "0 auto",
};

const twoColumnGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "18px",
  marginTop: "28px",
};

const boxStyle = {
  backgroundColor: "#f3f4f6",
  padding: "22px",
  borderRadius: "18px",
  fontWeight: "700",
  lineHeight: "1.55",
};

const darkGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
  gap: "16px",
  marginTop: "30px",
};

const darkBox = {
  backgroundColor: "#1f2937",
  color: "#ffffff",
  padding: "18px",
  borderRadius: "16px",
  fontWeight: "800",
  textAlign: "center",
};

const primaryButton = {
  display: "inline-block",
  backgroundColor: "#111827",
  color: "#ffffff",
  padding: "16px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
  boxShadow: "0 12px 28px rgba(17, 24, 39, 0.18)",
};

const secondaryButton = {
  display: "inline-block",
  backgroundColor: "#ffffff",
  color: "#111827",
  padding: "16px 26px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
  border: "1px solid #e5e7eb",
};

const inputStyle = {
  padding: "15px 16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "1rem",
  fontFamily: "Arial, sans-serif",
};

const buttonStyle = {
  backgroundColor: "#111827",
  color: "#ffffff",
  border: "none",
  borderRadius: "12px",
  padding: "17px 20px",
  fontSize: "1rem",
  fontWeight: "800",
  cursor: "pointer",
};

const footerLink = {
  color: "#111827",
  fontWeight: "700",
  textDecoration: "none",
};
