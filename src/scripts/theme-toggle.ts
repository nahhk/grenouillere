const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");

function updateThemeColor(theme: string) {
  const meta = document.getElementById("theme-color");
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
  }
}

toggleButton?.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";

  root.classList.remove("dark", "light");
  root.classList.add(nextTheme);
  localStorage.setItem("theme", nextTheme);

  updateThemeColor(nextTheme);

  window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
});
