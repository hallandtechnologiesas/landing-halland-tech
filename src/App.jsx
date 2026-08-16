import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/rotile/id6751348002";
const EMAIL = "oscar@halland.tech";

const pageDetails = {
  home: {
    title: "Halland Technologies",
    description:
      "Native iOS apps, web products, and technical help from Arendal, Norway.",
  },
  support: {
    title: "Support — Halland Technologies",
    description: "Get support for RoTile and other Halland Technologies products.",
  },
  privacy: {
    title: "Privacy Policy — Halland Technologies",
    description:
      "How Halland Technologies AS processes data for its website and RoTile.",
  },
  terms: {
    title: "Terms of Use — Halland Technologies",
    description: "Terms for the Halland Technologies website and RoTile.",
  },
};

function PageMeta({ page }) {
  useEffect(() => {
    const details = pageDetails[page];
    document.title = details.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", details.description);
  }, [page]);

  return null;
}

function Header({ legal = false }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Halland Technologies home">
        Halland Technologies
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        {legal ? <a href="/">Home</a> : null}
        <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
          RoTile
        </a>
        <a href={`mailto:${EMAIL}`}>Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Legal and support">
        <a href="/support/">Support</a>
        <a href="/privacy-policy/">Privacy</a>
        <a href="/terms-of-use/">Terms</a>
      </nav>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="home-shell">
      <PageMeta page="home" />
      <Header />

      <main className="home-main">
        <div className="home-copy">
          <h1>
            Software,
            <br />
            made useful.
          </h1>
          <p>Native iOS apps, web products, and technical help from Arendal, Norway.</p>
          <div className="home-links">
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              See RoTile
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function LegalPage({ page, eyebrow, title, summary, children }) {
  return (
    <div className="legal-shell">
      <PageMeta page={page} />
      <Header legal />

      <main className="legal-main">
        <header className="legal-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {summary ? <p className="legal-summary">{summary}</p> : null}
        </header>

        <article className="legal-content">{children}</article>
      </main>

      <Footer />
    </div>
  );
}

function SupportPage() {
  return (
    <LegalPage
      page="support"
      eyebrow="RoTile support"
      title="How can we help?"
      summary="Send a message if RoTile does not work as expected or if you have a question about the app."
    >
      <section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Include the iPhone model,
          iOS version, and a short description of the problem. Do not send private
          account details or passwords.
        </p>
      </section>

      <section>
        <h2>Widget does not update</h2>
        <ol>
          <li>Check that the Roblox experience URL is public and valid.</li>
          <li>Check the internet connection.</li>
          <li>Edit the widget and save its configuration again.</li>
          <li>
            Wait for iOS to request the next update. iOS controls the final widget
            refresh schedule.
          </li>
        </ol>
      </section>

      <section>
        <h2>Delete app data</h2>
        <p>
          You can stop future analytics in the Privacy and Analytics screen in RoTile.
          You can also delete RoTile from the device. To ask us to delete analytics or
          support data that we can identify, email us.
        </p>
      </section>
    </LegalPage>
  );
}

function PrivacyPage() {
  return (
    <LegalPage
      page="privacy"
      eyebrow="Effective August 16, 2026"
      title="Privacy Policy"
      summary="This policy explains how Halland Technologies AS processes data on this website and in RoTile."
    >
      <section>
        <h2>Who is responsible</h2>
        <p>
          Halland Technologies AS is the data controller for the processing described
          in this policy.
        </p>
        <address>
          Halland Technologies AS
          <br />
          c/o Oscar Wold Halland
          <br />
          Nordre Kirkefjell 39
          <br />
          4843 Arendal, Norway
          <br />
          Organization number: 929 468 724
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </address>
      </section>

      <section>
        <h2>Website data</h2>
        <p>
          This website does not set advertising cookies or run product analytics.
          The service that hosts the website can process normal request data, such as
          the IP address, browser information, requested page, and request time, to
          deliver and protect the site.
        </p>
      </section>

      <section>
        <h2>Roblox data used by RoTile</h2>
        <p>
          RoTile sends configured Roblox experience identifiers to public Roblox web
          services. It uses the response to show public experience names, artwork, and
          player counts.
        </p>
        <p>
          Roblox receives requests from the device and can process technical request
          data, including the IP address, device or browser information, request time,
          and requested experience. Roblox processes this data under its own{" "}
          <a
            href="https://en.help.roblox.com/hc/en-us/articles/115004630823-Roblox-Privacy-and-Cookie-Policy"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Product analytics in RoTile</h2>
        <p>
          RoTile uses Mixpanel to understand use of the app and widgets. Analytics
          starts only after the user allows it in RoTile.
        </p>
        <p>Mixpanel can receive:</p>
        <ul>
          <li>A random identifier created for the app installation.</li>
          <li>App and widget interaction events.</li>
          <li>Widget size, configuration shape, refresh result, and refresh time.</li>
          <li>Roblox experience identifiers added to a widget.</li>
          <li>Public player counts returned for those experiences.</li>
          <li>Whether a label or custom image is set.</li>
          <li>App version, operating-system version, and device information.</li>
          <li>IP address and approximate location derived from it.</li>
        </ul>
        <p>
          RoTile does not send the full Roblox URL, custom label text, or selected image
          data to Mixpanel. RoTile does not use Mixpanel for advertising or tracking
          activity across other companies&apos; apps or websites.
        </p>
        <p>
          Mixpanel processes the data under our instructions. Read the{" "}
          <a
            href="https://mixpanel.com/legal/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Mixpanel privacy policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Widget settings</h2>
        <p>
          Apple system services manage widget settings on the device. These settings can
          include Roblox URLs, labels, and selected images. RoTile sends Roblox
          information to Roblox when it must get widget data. If analytics is allowed,
          RoTile also sends the analytics data listed above to Mixpanel.
        </p>
      </section>

      <section>
        <h2>Why we process data</h2>
        <p>We process data for these purposes:</p>
        <ul>
          <li>Provide RoTile and its widgets.</li>
          <li>Measure use and improve the product after consent.</li>
          <li>Find errors, protect the service, and prevent misuse.</li>
          <li>Answer support requests and meet legal duties.</li>
        </ul>
        <p>
          Consent is the legal basis for Mixpanel analytics. The user can withdraw
          consent in RoTile at any time. Service delivery, support, security, and legal
          compliance use the legal bases that apply to each activity, including
          performance of a service, legitimate interests, and legal obligations.
        </p>
      </section>

      <section>
        <h2>Retention and sharing</h2>
        <p>
          We keep personal data while it is useful for the purpose described above or
          while law requires it. We then delete or aggregate it. Retention can depend on
          the type of data, the analytics configuration, security needs, and an active
          support request.
        </p>
        <p>
          We share data with service providers only when they help us provide, analyze,
          secure, or support the product. These providers include Mixpanel, Roblox, Apple,
          and the website hosting provider. Some processing can occur outside Norway or
          the European Economic Area. We use applicable safeguards when the law requires
          them.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on the law that applies, you can ask for access, correction,
          deletion, restriction, objection, or data portability. You can withdraw
          analytics consent in RoTile without affecting earlier lawful processing.
        </p>
        <p>
          Send a request to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. You can also{" "}
          <a
            href="https://www.datatilsynet.no/en/about-us/contact-us/how-to-complain-to-the-norwegian-dpa/"
            target="_blank"
            rel="noreferrer"
          >
            complain to the Norwegian Data Protection Authority
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We can update this policy when the product, providers, or legal requirements
          change. The effective date at the top shows the latest version.
        </p>
      </section>
    </LegalPage>
  );
}

function TermsPage() {
  return (
    <LegalPage
      page="terms"
      eyebrow="Effective August 16, 2026"
      title="Terms of Use"
      summary="These terms apply to this website and to RoTile."
    >
      <section>
        <h2>About these terms</h2>
        <p>
          By using this website or RoTile, you agree to these terms. If you do not agree,
          do not use the service.
        </p>
      </section>

      <section>
        <h2>RoTile</h2>
        <p>
          RoTile shows public information from Roblox experiences, including names,
          artwork, and player counts. The information can be delayed, incomplete, or
          unavailable. RoTile is an independent app. It is not affiliated with or
          endorsed by Roblox Corporation.
        </p>
        <p>
          Apple manages App Store purchases, billing, and refunds under Apple&apos;s
          terms. Availability and features can change as iOS, WidgetKit, Roblox services,
          or other dependencies change.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>Use the service for an unlawful purpose.</li>
          <li>Try to bypass security or interfere with the service.</li>
          <li>Use automated methods that create unreasonable traffic.</li>
          <li>Misrepresent an affiliation with Halland Technologies AS.</li>
          <li>Use content in a way that violates another party&apos;s rights.</li>
        </ul>
      </section>

      <section>
        <h2>Ownership</h2>
        <p>
          Halland Technologies AS owns RoTile, the website, and their original design,
          code, and content. Roblox names, artwork, and other third-party content belong
          to their respective owners. These terms do not transfer any ownership rights.
        </p>
      </section>

      <section>
        <h2>Service changes and availability</h2>
        <p>
          We can change, suspend, or stop features when this is reasonably necessary.
          We do not promise uninterrupted or error-free operation. We can also restrict
          access when needed to protect users, the service, or third parties.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          To the extent permitted by law, the service is provided as available. Halland
          Technologies AS is not responsible for indirect loss, loss caused by
          third-party services, or decisions made from public player-count data. Nothing
          in these terms limits rights or liability that cannot be limited under
          applicable law.
        </p>
      </section>

      <section>
        <h2>Law and contact</h2>
        <p>
          Norwegian law applies to these terms, without limiting mandatory consumer
          rights that apply where the user lives. Questions can be sent to{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>
    </LegalPage>
  );
}

function NotFoundPage() {
  return (
    <LegalPage
      page="home"
      eyebrow="404"
      title="Page not found"
      summary="The page does not exist or has moved."
    >
      <p>
        <a href="/">Return to the home page.</a>
      </p>
    </LegalPage>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return <HomePage />;
  if (path === "/support") return <SupportPage />;
  if (path === "/privacy-policy") return <PrivacyPage />;
  if (path === "/terms-of-use") return <TermsPage />;

  return <NotFoundPage />;
}
