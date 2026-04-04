export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px 40px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <img
            src="/logo.png"
            alt="Think Better Sell Better Logo"
            style={{
              maxWidth: "260px",
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            lineHeight: "1.1",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Turn More Conversations Into Revenue
          <br />
          Without Chasing More Leads
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "760px",
            margin: "0 auto 28px",
            lineHeight: "1.7",
            color: "#374151",
          }}
        >
          I help business owners uncover hidden revenue leaks, improve sales
          conversations, and create a clearer path to growth using proven sales
          psychology and practical strategy.
        </p>

        <a
          href="#contact-form"
          style={{
            display: "inline-block",
            backgroundColor: "#111827",
            color: "#ffffff",
            padding: "16px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1rem",
            marginBottom: "18px",
          }}
        >
          Get Your Free 90-Day Revenue Plan
        </a>

        <p
          style={{
            fontSize: "0.98rem",
            color: "#6b7280",
            marginTop: "10px",
          }}
        >
          Tell me about your business and I’ll map out practical ways to improve
          conversions, positioning, and revenue opportunities.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 24px 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "35px 28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            Who This Is For
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 26px",
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            Think Better Sell Better is built for business owners who know they
            should be making more from the opportunities already in front of
            them.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Service-based businesses",
              "Owners doing roughly $500K to $10M+",
              "Businesses with leads that are not converting enough",
              "Teams with inconsistent follow-up or unclear sales process",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f3f4f6",
                  padding: "20px",
                  borderRadius: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I FIX */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 24px 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "35px 28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            What I Fix
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Leads coming in but not converting",
              "Sales conversations that stall out",
              "No clear follow-up structure",
              "Offers that are not positioned strongly enough",
              "Missed revenue hiding inside current traffic and opportunities",
              "Teams relying on effort instead of process",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  padding: "22px",
                  borderRadius: "14px",
                  textAlign: "center",
                  lineHeight: "1.5",
                  fontWeight: "600",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 24px 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#111827",
            color: "#ffffff",
            borderRadius: "18px",
            padding: "40px 28px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            How I Help
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto 28px",
              lineHeight: "1.7",
              color: "#d1d5db",
            }}
          >
            I look at your business through the lens of sales psychology,
            messaging, offer clarity, follow-up, and conversion strategy—then I
            help you identify where money is being left on the table.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Identify your biggest revenue leaks",
              "Improve your sales messaging",
              "Strengthen your offer positioning",
              "Create a practical 90-day action plan",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1f2937",
                  padding: "20px",
                  borderRadius: "14px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 24px 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "35px 28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            Why Think Better Sell Better
          </h2>

          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              color: "#4b5563",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            This is not generic advice. The goal is to help you see where your
            business is losing momentum, where your sales process is weaker than
            it should be, and what practical steps can improve revenue. Better
            conversations create better opportunities. Better positioning creates
            stronger results.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section
        id="contact-form"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "10px 24px 70px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "35px 28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "14px",
              textAlign: "center",
            }}
          >
            Get Your Free 90-Day Revenue Plan
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#4b5563",
              marginBottom: "28px",
              lineHeight: "1.7",
            }}
          >
            Fill this out and tell me about your business. I’ll review the
            details and map out ways you can improve your positioning,
            conversations, and conversion opportunities.
          </p>

          <form
            action="https://formspree.io/f/xeervwbl"
            method="POST"
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
              }}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
              }}
            />

            <textarea
              name="businessDescription"
              placeholder="Tell me about your business, your current challenges, and where you think money may be getting left on the table."
              rows="6"
              required
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#111827",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "16px 20px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Send My Free Plan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
