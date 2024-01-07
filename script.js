// Select all the navigation links
const navLinks = document.querySelectorAll(".navbar a");

// Iterate over each link and add an event listener for smooth scrolling
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// Select the arrow button
const arrowButton = document.querySelector(".arrow-icon");

// Add an event listener to the arrow button
arrowButton.addEventListener("click", () => {
  // Select the welcome text and new text elements
  const welcomeText = document.querySelector(".welcome-text");
  const generatedText = document.querySelector(".generated-text");
  clickedYes = 1;
  // Fade out the welcome text and arrow button
  welcomeText.style.display = "none";
  // After the welcome text has faded out, fade in the new text
  setTimeout(() => {
    generatedText.style.display = "flex";
  }, 500);
});




const sliderContainer = document.querySelector(".slider-container");
const sliderFrame = document.querySelector(".slider-frame");
const sliderContent = document.querySelector(".slider-content");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const images = ["purple_robo_brain.png", "brain_tree.png", "purple_colorful_brain.png", "purple_robo_brain.png", "brain_tree.png"];
const titles = ["Decoding the Enigma: Exploring the Potential of Generative AI", "Beyond the Screen: Exploring the Realm of Immersive Technologies", "Beyond Profits: Unveiling the Power of ESG", "Beyond the Screen: Orchestrating the World with IoT", "Unveiling the World Through Artificial Eyes: A Journey into Machine Vision"];
const descriptions = [
  "Imagine AI that paints like Picasso, crafts poems like Keats, and generates melodies as enchanting as Beethoven's. This is the realm of Generative AI, where algorithms learn from existing data to create entirely new content: realistic images, compelling stories, and captivating music. This project delves into the fascinating world of these creative machines, exploring their capabilities in diverse fields like art, entertainment, and scientific discovery. We'll examine how generative models work, their current limitations and ethical considerations, and ultimately, envision the potential for AI to enhance and augment human creativity in unexpected and transformative ways.",
  "Prepare to shatter the confines of the screen. This project dives into Immersive Technologies, where Augmented Reality overlays digital information onto your environment, Virtual Reality plunges you into captivating simulations, and Mixed Reality blends the two, blurring the lines between real and virtual. Imagine interactive city tours, remote collaboration in shared virtual workspaces, or even battling dragons in your living room. We'll explore the technical magic behind these experiences, uncover their diverse applications across industries, and discuss the ethical considerations of shaping our reality with pixels and code. Buckle up, we're pushing the boundaries of perception and interaction in a truly immersive adventure.",
  "Imagine a world where businesses strive not just for profits, but for the planet and its people. This is the vision of Environmental, Social, and Corporate Governance (ESG) — a framework guiding companies to operate sustainably, ethically, and responsibly. From reducing carbon footprints to fostering diverse workplaces, ESG practices weave sustainability into the fabric of businesses, creating positive ripples across society. This project dives deep into the ESG movement, exploring its growing influence, key metrics, and practical applications. We'll uncover how companies are driving positive change, the challenges they face, and the exciting opportunities for a more responsible future. Join us as we explore the intersection of profits and purpose, where businesses become agents for positive societal impact. Get ready to see the world through an ESG lens, where success goes beyond the bottom line and embraces a shared vision for a thriving planet and happy people. Stay tuned for further exploration of each ESG pillar in the coming weeks!",
  "Imagine a world where our everyday objects whisper a symphony of data, orchestrating a smarter, more connected reality. This is the Internet of Things (IoT), where millions of devices – from refrigerators to traffic lights to fitness trackers – gather and share information, transforming how we live, work, and play. From anticipating your home needs to revolutionizing industries, IoT holds the potential to unlock a future of convenience, efficiency, and sustainability. This project delves into the technical marvels and practical applications of this interconnected web, exploring both the challenges and opportunities it presents. Join us as we unveil the secrets of the silent symphony, envisioning a future where technology seamlessly blends with our lives, for a more empowered and vibrant world. Stay tuned for deeper dives into specific IoT applications and their transformative potential!",
  "Imagine computers learning to see with the same nuance and adaptability as humans. This is the world of Machine Vision, where algorithms dissect visual data, enabling machines to understand and interact with the physical realm. From robots detecting minute flaws on production lines to cameras guiding self-driving cars through cityscapes, machine vision revolutionizes how we perceive and interact with the world around us. This project delves into the technical marvels and practical applications of this technology, exploring its potential to optimize industries, empower everyday tasks, and unlock unprecedented creative avenues. Join us as we unveil the secrets of machine vision, envisioning a future where machines not only see, but also interpret, analyze, and even learn from the visual world, shaping a more efficient, insightful, and perhaps even artistic future. Stay tuned for deeper dives into specific machine vision applications and their transformative potential!"
];
let currentImageIndex = 0;

arrowLeft.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
  updateSlider();
});

arrowRight.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {
  sliderFrame.querySelector("img").src = images[currentImageIndex];
  sliderContent.querySelector("h2").textContent = titles[currentImageIndex];
  sliderContent.querySelector("p").textContent = descriptions[currentImageIndex];
}

updateSlider();


$(document).ready(function() {
  $('#signup-form').submit(function(event) {
    event.preventDefault();

    var email = $('#email').val();
    var emailRegEx = /^\S+@\S+$/;

    if (!emailRegEx.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    var formData = $(this).serialize();

    $.ajax({
  type: 'POST',
  url: 'submit_form.php',
  data: formData,
  success: function(data) {
    console.log('Form submitted successfully');
    $('#signup-form').hide();
    $('#signup-success').show();

    // Create a Blob from the PDF data received from the server
    var pdfBlob = new Blob([data], { type: 'application/pdf' });

    // Create a URL for the PDF Blob
    var pdfUrl = URL.createObjectURL(pdfBlob);

    // Create a link element and set its href to the PDF URL
    var downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = "example-pdf.pdf";

    // Trigger the download
    downloadLink.click();
  },
  error: function(data) {
    console.log('An error occurred while submitting the form');
  }
});

  });
});
