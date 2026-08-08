import re

services = [
    {
        "title": "Interior Design",
        "desc": "We design residential, commercial, hospitality, healthcare, and retail interiors that balance functionality, aesthetics, and the unique needs of every client.",
        "points": ["Residential Interiors", "Commercial & Office Spaces", "Healthcare Interiors", "Hospitality Design", "Retail Design", "Space Planning", "Material & Finish Selection"]
    },
    {
        "title": "Landscape Design",
        "desc": "We create outdoor environments that extend the experience of architecture through thoughtful planting, hardscaping, lighting, and spatial planning.",
        "points": ["Residential Gardens", "Commercial Landscapes", "Courtyards & Terraces", "Rooftop Spaces", "Landscape Planning", "Landscape Project Management"]
    },
    {
        "title": "Custom Joinery & Cabinetry",
        "desc": "Every storage solution is carefully designed to maximise functionality while complementing the overall design language of the space.",
        "points": ["Kitchens", "Wardrobes", "TV Units", "Vanities", "Office Cabinetry", "Custom Furniture"]
    },
    {
        "title": "3D Visualisation",
        "desc": "Visualise your project before implementation with realistic renderings that allow informed decisions and greater confidence throughout the design process.",
        "points": []
    },
    {
        "title": "Procurement & Project Management",
        "desc": "We coordinate suppliers, materials, budgets, timelines, and on-site execution to ensure every project is delivered efficiently and to the highest standard.",
        "points": []
    },
    {
        "title": "Styling & Home Staging",
        "desc": "The finishing details transform a completed project into a welcoming, lived-in space through carefully selected furniture, décor, artwork, lighting, and accessories.",
        "points": []
    },
    {
        "title": "Office Space Planning",
        "desc": "We help businesses create productive workplaces that encourage collaboration, efficiency, and employee wellbeing through thoughtful planning and design.",
        "points": []
    }
]

services_html = ""

for i, service in enumerate(services):
    img_class = "order-md-last" if i % 2 == 0 else ""
    text_class = "pr-md-5 mr-md-5" if i % 2 == 0 else "pl-md-5 ml-md-5"
    img_src = f"images/work-{(i%8)+1}.jpg"
    
    points_html = "<ul>" + "".join([f"<li>{p}</li>" for p in service['points']]) + "</ul>" if service['points'] else ""
    
    section = f"""
    <section class="ftco-section ftc-no-pb">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-md-10">
            <div class="row no-gutters">
              <div class="col-md-5 p-md-5 img img-2 {img_class}" style="background-image: url({img_src})"></div>
              <div class="col-md-7 wrap-about pb-md-5 ftco-animate">
                <div class="heading-section mb-md-5 pl-md-5 heading-section-with-line">
                  <div class="{text_class}">
                    <span class="subheading">Services</span>
                    <h2 class="mb-4">{service['title']}</h2>
                  </div>
                </div>
                <div class="{text_class}">
                  <p>{service['desc']}</p>
                  {points_html}
                  <p><a href="contact.html" class="btn-custom">Book a Consultation <span class="ion-ios-arrow-forward"></span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
"""
    services_html += section

with open("services.html", "r") as f:
    content = f.read()

# The services sections are between the first section after home-slider and the footer.
# Let's find the first <section class="ftco-section ftc-no-pb"> and replace all of them until footer.
pattern = r'<section class="ftco-section ftc-no-pb">.*?</section>(\s*<section class="ftco-section ftc-no-pb">.*?</section>)*'
content = re.sub(pattern, services_html.strip(), content, flags=re.DOTALL)

with open("services.html", "w") as f:
    f.write(content)
