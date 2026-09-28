const root = document.documentElement;
const button = document.querySelector(".theme");

function applyTheme(theme) {
  root.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
  if (!button) return;
  const dark = theme === "dark";
  button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  button.setAttribute("aria-pressed", String(dark));
}

if (button) {
  button.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

applyTheme(root.dataset.theme === "dark" ? "dark" : "light");
