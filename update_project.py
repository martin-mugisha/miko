import re

with open("project.html", "r") as f:
    content = f.read()

# Update Hero
content = re.sub(r'<h1 class="mb-3 mt-5 bread">Project</h1>', '<h1 class="mb-3 mt-5 bread">Portfolio</h1>', content)
content = re.sub(r'<span>Project</span>', '<span>Portfolio</span>', content)

# Update project titles
titles = [
    "Residential",
    "Corporate Offices",
    "Healthcare",
    "Hospitality",
    "Restaurants & Cafés",
    "Retail",
    "Landscape Design",
    "Custom Joinery"
]

def title_replacer(match):
    if not hasattr(title_replacer, "idx"):
        title_replacer.idx = 0
    t = titles[title_replacer.idx % len(titles)]
    title_replacer.idx += 1
    return f'<h3>{t}</h3>'

content = re.sub(r'<h3>Office Interior Design in Paris</h3>', title_replacer, content)

with open("project.html", "w") as f:
    f.write(content)
