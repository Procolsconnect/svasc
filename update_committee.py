import re

filepath = r'C:\Users\AJAYRAJ\Desktop\SVASC [PAGES]\svasc - web site\svasc\client\src\pages\Activities.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def extract_and_remove(card_id):
    global content
    match = re.search(rf'\s*\{{\s*ID: "{card_id}".*?\]\s*\}},', content, re.DOTALL)
    if not match:
        # Check if it's the last element without a trailing comma
        match = re.search(rf'\s*\{{\s*ID: "{card_id}".*?\]\s*\}}', content, re.DOTALL)
    if match:
        block = match.group(0)
        copy_match = re.search(r'copy: `(.*?)`,\s*cards:', block, re.DOTALL)
        if copy_match:
            copy = copy_match.group(1).strip()
            copy = copy.replace('${styles.activitySection}', '${styles.modalDescContent}')
            copy = copy.replace('<h3>', '<h3 style="color:var(--gold);">')
            copy = copy.replace('<ul>', '<ul style="padding-left: 20px;">')
            copy = copy.replace('<ol>', '<ol style="padding-left: 20px;">')
            content = content.replace(block, '')
            
            # Clean up potential double commas
            content = content.replace('},,', '},')
            return copy
    return None

yrc_copy = extract_and_remove('youthRedCross')
pe_copy = extract_and_remove('physicalEducation')
nss_copy = extract_and_remove('nss')

# Update committee cards
committee_match = re.search(r'(ID: "committee".*?cards: \[)(.*?)(\]\s*\})', content, re.DOTALL)
if committee_match:
    new_cards = f"""
        {{
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
          title: "Internal Grievances Committee",
          link: "/internal-grievances-committee"
        }},
        {{
          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
          title: "Grievance Redressal Committee",
          description: `<p>The Grievance Redressal Committee provides a structured, confidential platform for students to raise academic, administrative, and personal concerns. All complaints are handled promptly, fairly, and impartially by the designated committee members.</p>`
        }},
        {{
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
          title: "IQAC – Quality Assurance Cell",
          description: `<p>The Internal Quality Assurance Cell (IQAC) monitors academic standards, teaching quality, research initiatives, and institutional performance. It prepares the college for NAAC accreditation and drives a culture of continuous quality improvement across all departments.</p>`
        }},
        {{
          image: "https://images.unsplash.com/photo-1574689049596-1e68e858db4c?w=400",
          title: "Youth Red Cross",
          description: `
{yrc_copy if yrc_copy else '<p>Details coming soon.</p>'}
          `
        }},
        {{
          image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
          title: "Physical Education",
          description: `
{pe_copy if pe_copy else '<p>Details coming soon.</p>'}
          `
        }},
        {{
          image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400",
          title: "National Service Scheme",
          description: `
{nss_copy if nss_copy else '<p>Details coming soon.</p>'}
          `
        }}
      """
    updated_content = content[:committee_match.start(2)] + new_cards + content[committee_match.end(2):]
    content = updated_content

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully updated committee in Activities.jsx")
