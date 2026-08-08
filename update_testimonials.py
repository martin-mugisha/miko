import re

testimonials = [
    "MIKO Creations transformed our office into a space that truly reflects who we are. Every detail was thoughtfully considered, and the entire process felt seamless.",
    "From concept to completion, the team exceeded our expectations. Their professionalism, creativity, and attention to detail made all the difference.",
    "The final result was even better than we imagined. We appreciated the collaborative process and the quality of execution.",
    "Working with MIKO Creations was one of the best decisions we made during our project.",
    "Their commitment to human-centred design meant our space was perfectly tailored to our needs, combining functionality with an incredible aesthetic."
]

def update_testimonials(filename):
    with open(filename, "r") as f:
        content = f.read()

    # Update Header
    header_pattern = r'<h2 class="mb-4">Our satisfied customer says</h2>\s*<p>.*?</p>'
    new_header = '<h2 class="mb-4">What Our Clients Say</h2>'
    content = re.sub(header_pattern, new_header, content, flags=re.DOTALL)

    # Update Testimonial text
    lines = content.split('\n')
    t_idx = 0
    in_quote = False
    
    for i in range(len(lines)):
        if '<p class="mb-5 pl-4 line">' in lines[i]:
            in_quote = True
            lines[i] = '                    <p class="mb-5 pl-4 line">' + testimonials[t_idx % len(testimonials)] + '</p>'
            t_idx += 1
        elif in_quote and '</p>' in lines[i]:
            lines[i] = ""
            in_quote = False
        elif in_quote:
            lines[i] = ""

    # Clean up empty lines
    content = "\n".join([line for line in lines if line is not None])
    
    # Update names/roles
    content = re.sub(r'<p class="name">Garreth Smith</p>\s*<span class="position">Marketing Manager</span>', r'<p class="name">Corporate Client</p><span class="position">Office Design</span>', content)
    content = re.sub(r'<p class="name">Garreth Smith</p>\s*<span class="position">Interface Designer</span>', r'<p class="name">Residential Client</p><span class="position">Home Renovation</span>', content)
    content = re.sub(r'<p class="name">Garreth Smith</p>\s*<span class="position">UI Designer</span>', r'<p class="name">Hospitality Client</p><span class="position">Restaurant Design</span>', content)
    content = re.sub(r'<p class="name">Garreth Smith</p>\s*<span class="position">Web Developer</span>', r'<p class="name">Commercial Client</p><span class="position">Retail Space</span>', content)
    content = re.sub(r'<p class="name">Garreth Smith</p>\s*<span class="position">System Analyst</span>', r'<p class="name">Residential Client</p><span class="position">Landscape Design</span>', content)
    
    with open(filename, "w") as f:
        f.write(content)

update_testimonials("index.html")
update_testimonials("about.html")
