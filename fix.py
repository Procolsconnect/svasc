import os
import re

filepath = r'C:\Users\AJAYRAJ\Desktop\SVASC [PAGES]\svasc - web site\svasc\client\src\pages\Activities.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix antiRagging remnant
content = re.sub(
    r'(const defaultActivities = \[\s*\{\s*ID: "physicalEducation",\s*category: "Anti Ragging Cell".*?)(?=\s*\{\s*ID: "physicalEducation",\s*category: "Physical Education")',
    'const defaultActivities = [\n',
    content,
    flags=re.DOTALL
)

# Fix mediaCell remnant
content = re.sub(
    r'(\{\s*ID: "clubs",\s*copy: `\s*<div class="[^"]*activitySection[^"]*">\s*<h3>Vision</h3>.*?)(?=\s*\{\s*category: "College Clubs",)',
    '',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'\{\s*category: "College Clubs",',
    '{\n      ID: "clubs",\n      category: "College Clubs",',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
