import re

with open("index.html", "r") as f:
    content = f.read()

# 1. Remove counter section properly
content = re.sub(r'<section[^>]*id="section-counter".*?</section>', '', content, flags=re.DOTALL)

# 2. Update Hero section
# The current hero has 4 slides. We will update the text of the first two and remove the rest for simplicity, 
# or just update the first 3. Let's just update the 3 paragraphs from nunu.md.
# But it's easier to just replace the whole home-slider section.
hero_replacement = """
    <section class="home-slider js-fullheight owl-carousel">
      <div class="slider-item js-fullheight" style="background-image: url(images/bg_3.png)">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
            <div class="col-md-7 text ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Timeless Spaces. Thoughtfully Designed. Beautifully Executed.</h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We design interiors and landscapes that do more than transform spaces—they shape the way people live, work, connect, and experience everyday life.</p>
              <p>
                <a href="contact.html" class="btn btn-white btn-outline-white px-4 py-3 mt-3">Book a Consultation</a>
                <a href="project.html" class="btn btn-white btn-outline-white px-4 py-3 mt-3">View Our Projects</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-item js-fullheight" style="background-image: url(images/bg_4.png)">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
            <div class="col-md-7 text ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
              <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Thoughtful Design Solutions</h1>
              <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">From private residences and corporate workplaces to hospitality, healthcare, and outdoor environments, MIKO Creations delivers thoughtful design solutions from concept through execution.</p>
              <p>
                <a href="contact.html" class="btn btn-white btn-outline-white px-4 py-3 mt-3">Book a Consultation</a>
                <a href="project.html" class="btn btn-white btn-outline-white px-4 py-3 mt-3">View Our Projects</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
"""
content = re.sub(r'<section class="home-slider js-fullheight owl-carousel">.*?</section>\s*<section class="ftco-services bg-light">', hero_replacement.strip() + '\n\n    <section class="ftco-services bg-light">', content, flags=re.DOTALL)

# 3. Update Featured Projects text
projects_pattern = r'<h2 class="mb-4">Our Projects</h2>\s*<p>.*?</p>'
projects_replacement = '<h2 class="mb-4">Spaces We\'ve Brought to Life</h2>\n            <p>Every project reflects a unique story, a different challenge, and a carefully considered solution. Our portfolio showcases residential homes, commercial workplaces, healthcare facilities, hospitality spaces, retail environments, and landscape projects designed with purpose and delivered with precision.</p>\n            <p><a href="project.html" class="btn btn-primary py-3 px-4 mt-3">View Portfolio</a></p>'
content = re.sub(projects_pattern, projects_replacement, content, flags=re.DOTALL)


with open("index.html", "w") as f:
    f.write(content)
