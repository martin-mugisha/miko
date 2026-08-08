import re

about_content = """
            <div class="heading-section mb-5 pl-md-5 heading-section-with-line">
              <div class="pl-md-5 ml-md-5">
                <span class="subheading">About Us</span>
                <h2 class="mb-4">
                  Designing Spaces With Purpose
                </h2>
              </div>
            </div>
            <div class="pl-md-5 ml-md-5 mb-5">
              <p>MIKO Creations is a Kampala-based interior and landscape design studio dedicated to creating timeless, functional, and sustainable spaces across residential, commercial, hospitality, healthcare, retail, and workplace environments.</p>
              <p>Our work brings together creative design, technical expertise, project coordination, production, and execution to transform ideas into thoughtfully crafted spaces.</p>
              <p>We believe exceptional design goes beyond aesthetics. A well-designed space should support the people who use it, improve daily experiences, and continue adding value long after the project is complete. Every project begins with understanding our clients—their lifestyle, business, aspirations, and the way they intend to use their spaces. Those insights become the foundation for environments that feel authentic, balanced, purposeful, and distinctly their own.</p>
              <p><strong>At MIKO Creations, we don't simply design spaces. We design experiences that people remember.</strong></p>
              
              <h3 class="mt-5 mb-3">Our Mission</h3>
              <p>To design thoughtful, sustainable, and timeless spaces that inspire connection, evoke emotion, and enhance the way people live and work.</p>

              <h3 class="mt-5 mb-3">Our Vision</h3>
              <p>To become a leading force in redefining interior and landscape design across Africa by setting the standard for authenticity, innovation, quality, and human-centred design.</p>
              
              <h3 class="mt-5 mb-3">Our Design Philosophy</h3>
              <p>Everything we create is guided by five principles:</p>
              <ul>
                <li><strong>People:</strong> We begin by understanding the people behind every project and designing around the way they live, work, and interact with their environment.</li>
                <li><strong>Purpose:</strong> Every material, layout, finish, and detail should contribute to the functionality and overall experience of the space.</li>
                <li><strong>Nature:</strong> We believe meaningful connections between built environments and the natural world create healthier, more inspiring spaces.</li>
                <li><strong>Timelessness:</strong> We design beyond trends, creating environments that remain relevant and beautiful for years to come.</li>
                <li><strong>Execution:</strong> A strong concept only becomes a successful project through careful planning, skilled craftsmanship, and attention to every detail.</li>
              </ul>
              
              <h3 class="mt-5 mb-3">What We Stand For</h3>
              <p>Everything we do is shaped by the values that define our studio:</p>
              <ul>
                <li>Thoughtful Design &amp; Quality Execution</li>
                <li>Functionality &amp; Creativity &amp; Innovation</li>
                <li>Attention to Detail &amp; Professionalism</li>
                <li>Accountability &amp; Sustainability</li>
                <li>Client-Centred Solutions &amp; Continuous Improvement</li>
              </ul>
            </div>
"""

with open("about.html", "r") as f:
    content = f.read()

pattern = r'<div class="heading-section mb-5 pl-md-5 heading-section-with-line">.*?<a href="#" class="btn-custom".*?</a>\s*</p>\s*</div>'
content = re.sub(pattern, about_content.strip(), content, flags=re.DOTALL)

with open("about.html", "w") as f:
    f.write(content)
