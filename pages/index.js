export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "0 auto" }}>

      {/* LOGO */}
       <div style={{ marginBottom: "40px", textAlign: "center" }}>
  <img 
    src="/logo.png" 
    alt="Think Better Sell Better Logo"
    style={{ 
      width: "100%",
      maxWidth: "420px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      backgroundColor: "transparent"
    }}
  />
</div>

      {/* HEADLINE */}
      <h1 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center" }}>
        Turn Better Conversations Into Better Sales Opportunities
      </h1>

      {/* SUBTEXT */}
      <p style={{ fontSize: "18px", marginBottom: "30px", textAlign: "center" }}>
        I help sales professionals, business owners, and entrepreneurs improve how they connect, communicate, and close.
      </p>

      {/* YOUTUBE BUTTON */}
      <div style={{ marginTop: "20px", marginBottom: "40px", textAlign: "center" }}>
        <a 
          href="https://www.youtube.com/@mckaysalesandlifecoaching" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button style={{
            padding: "14px 24px",
            background: "#111",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Watch My YouTube Content
          </button>
        </a>
      </div>

      {/* ABOUT */}
      <h2>Who I Am</h2>
      <p>
        I’m Skylar Mckay, a sales professional with 10+ years of experience in revenue generation,
        consultative selling, and business growth.
      </p>

      <h2>Who I Serve</h2>
      <p>
        I work with business owners and sales professionals who want to increase their close rates,
        improve their messaging, and build stronger pipelines.
      </p>

      <hr style={{ margin: "40px 0" }} />

     
      
      {/* LINKEDIN */}
      <div style={{ marginTop: "40px", marginBottom: "30px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
          Connect with me professionally:
        </p>

        <a 
          href="https://www.linkedin.com/in/skylar-mckay-37456b65/" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#0077b5",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px"
          }}
        >
          View My LinkedIn
        </a>
      </div>

      {/* FORM */}
      <h2>Let’s Connect</h2>

      <form action="https://formspree.io/f/xeervwbl" method="POST">
        <input type="hidden" name="_subject" value="New Lead - Think Better Sell Better" />

        <div style={{ marginBottom: "10px" }}>
          <input name="first_name" placeholder="First Name" style={{ width: "100%", padding: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input name="last_name" placeholder="Last Name" style={{ width: "100%", padding: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input name="email" type="email" placeholder="Email" style={{ width: "100%", padding: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            name="business_description"
            placeholder="Tell me about your business"
            style={{ width: "100%", padding: "10px", height: "120px" }}
          />
        </div>

        <button type="submit" style={{ padding: "12px 20px", background: "black", color: "white" }}>
          Submit
        </button>
      </form>

    </div>
  );
}
