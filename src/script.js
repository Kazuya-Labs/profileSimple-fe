const profile = document.getElementById("profile-picture");

function spinProfile() {
  if (!profile) return;
  profile.classList.add("spin-animation");
}

function removeSpin() {
  if (!profile) return;
  profile.classList.remove("spin-animation");
}

document.addEventListener("DOMContentLoaded", () => {
  if (profile) {
    profile.addEventListener("click", spinProfile);
    profile.addEventListener("animationend", removeSpin);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting) {
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
        }
      });
    },
    { threshold: 0.35 },
  );

  const fadeItems = document.querySelectorAll(".fade-item");
  fadeItems.forEach((card) => observer.observe(card));
});
