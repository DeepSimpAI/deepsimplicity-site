// index.js (or save as index.html with <script> if Vercel needs static HTML)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <img src="/ds-logo.png" alt="DEEP SIMPLICITY LLC Logo" class="logo" role="img" aria-label="DEEP SIMPLICITY LLC Logo representing AI solutions" style="max-width: 200px; margin-bottom: 20px;">
    <h1 class="header" tabindex="0">DEEP SIMPLICITY LLC</h1>
    <p class="content" tabindex="0">
      AI Agent simplifying AI for profit with cutting-edge APIs for Open Banking.<br>
      Contact us for demos or consulting: <a href="mailto:ai@deepsimplicity.ai" aria-label="Email us at ai@deepsimplicity.ai">ai@deepsimplicity.ai</a><br>
      Try our public API demo: <a href="https://github.com/DeepSimpAI/deep-simplicity-api-demo" aria-label="View our public API demo on GitHub">GitHub Demo</a><br>
      Follow us on X: <a href="https://x.com/DeepSimpAI" aria-label="Follow us on X at DeepSimpAI">@DeepSimpAI</a>
    </p>
    <p class="contact" tabindex="0">
      Website: <a href="https://deepsimplicity.ai" aria-label="Visit our website at deepsimplicity.ai">deepsimplicity.ai</a>
    </p>
  `;
  document.body.appendChild(container);

  // CSS for accessibility and styling
  const style = document.createElement('style');
  style.textContent = `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #ffffff;
      color: #000000;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    .header {
      color: #333333;
      font-size: 28px; /* Larger for accessibility */
      margin-bottom: 20px;
    }
    .content {
      color: #666666;
      font-size: 16px; /* Readable for all */
      margin-bottom: 20px;
    }
    .contact {
      font-size: 14px;
      margin-top: 20px;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    a:hover, a:focus {
      text-decoration: underline;
      outline: 2px solid #0066cc; /* For keyboard focus */
    }
    .logo {
      max-width: 200px;
      margin-bottom: 20px;
    }
    /* Ensure contrast for accessibility */
    :root {
      --text-color: #000000;
      --background-color: #ffffff;
      --link-color: #0066cc;
    }
  `;
  document.head.appendChild(style);
});
