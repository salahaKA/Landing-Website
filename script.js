const accordionItems = document.querySelectorAll(".accordion-item");
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".dot");

const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

document.querySelectorAll(".accordion-title").forEach((title) => {
  title.addEventListener("click", () => {
    const item = title.parentElement;
    item.classList.toggle("active");
  });
});

// Animate skills progress bars on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const fill = bar.getAttribute("data-fill");
    bar.style.width = fill;
  });
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Activate clicked button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter items
    const filter = btn.getAttribute("data-filter");
    portfolioItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

// Auto-play every 5 seconds
setInterval(() => {
  let nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("navbarDropdown");
  dropdown.addEventListener("click", () => {
    console.log("Dropdown clicked!");
    // Additional interactivity here
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href && href !== "#") {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    new bootstrap.Collapse(navCollapse, {
      toggle: false,
    }).hide();
  });
});


function playVideo(url) {
    const frame = document.getElementById("videoFrame");
    if (frame) {
        frame.src = url + "?autoplay=1";  // Sets the video URL with autoplay
    }
}

function stopVideo() {
    const frame = document.getElementById("videoFrame");
    if (frame) {
        frame.src = "";  // Stops the video by clearing the iframe src
    }
}


document.getElementById('videoModal').addEventListener('hidden.bs.modal', stopVideo);

function toggleText(btn) {
    const moreText = document.getElementById("moreText");

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";
      btn.innerHTML = "Read Less ←";
    } else {
      moreText.style.display = "none";
      btn.innerHTML = "Read More →";
    }
  }



//   form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const form = this;
        let valid = true;

        // Validate all required fields
        ["name", "email", "subject", "message"].forEach(id => {
            const input = document.getElementById(id);
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                valid = false;
            } else {
                input.classList.remove("is-invalid");
            }

            // Email specific validation
            if (id === "email") {
                const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if (!emailPattern.test(input.value)) {
                    input.classList.add("is-invalid");
                    valid = false;
                }
            }
        });

        if (valid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });
