const WHATSAPP_NUMBER = "5519993459229";

function buildWhatsAppUrl(service) {
  const base = "Olá! Gostaria de um orçamento";
  const msg = service && service !== "Outros serviços"
    ? `${base} para: ${service}.`
    : `${base}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", function () {

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Service select → WhatsApp link
  const select = document.getElementById("serviceSelect");
  const preview = document.getElementById("quotePreview");
  const waLink = document.getElementById("quoteWhatsapp");
  const fabWa = document.getElementById("floatingWhatsapp");

  if (select) {
    select.addEventListener("change", function () {
      const val = this.value;
      const url = buildWhatsAppUrl(val);
      if (waLink) waLink.href = url;
      if (fabWa) fabWa.href = url;

      if (val && val !== "Outros serviços") {
        preview.textContent = `Sua mensagem: "Olá! Gostaria de um orçamento para: ${val}."`;
        preview.style.display = "block";
      } else if (val === "Outros serviços") {
        preview.textContent = `Sua mensagem: "Olá! Gostaria de um orçamento."`;
        preview.style.display = "block";
      } else {
        preview.style.display = "none";
      }
    });
  }

  // Service cards → click to select service
  document.querySelectorAll(".service-card[data-service]").forEach(function (card) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      const svc = this.getAttribute("data-service");
      if (select) {
        select.value = svc;
        select.dispatchEvent(new Event("change"));
      }
      document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Cookie consent
  var cookieKey = "adv-cookie-consent";
  var banner = document.getElementById("cookieBanner");

  function hideBanner() {
    if (banner) banner.style.display = "none";
  }

  try {
    if (!localStorage.getItem(cookieKey) && banner) {
      banner.style.display = "block";
    }
  } catch (e) { /* ignore */ }

  var acceptBtn = document.getElementById("cookieAccept");
  var declineBtn = document.getElementById("cookieDecline");
  var closeBtn = document.getElementById("cookieClose");

  function consent(accepted) {
    try { localStorage.setItem(cookieKey, accepted ? "accepted" : "declined"); } catch (e) { /* ignore */ }
    hideBanner();
  }

  if (acceptBtn) acceptBtn.addEventListener("click", function () { consent(true); });
  if (declineBtn) declineBtn.addEventListener("click", function () { consent(false); });
  if (closeBtn) closeBtn.addEventListener("click", function () { consent(false); });
});
