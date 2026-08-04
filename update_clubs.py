import re

filepath = r'C:\Users\AJAYRAJ\Desktop\SVASC [PAGES]\svasc - web site\svasc\client\src\pages\Activities.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract Anti Drug Club copy
anti_drug_match = re.search(r'\s*\{\s*ID: "antiDrug".*?\]\s*\},', content, re.DOTALL)
if anti_drug_match:
    anti_drug_block = anti_drug_match.group(0)
    copy_match = re.search(r'copy: `(.*?)`,\s*cards:', anti_drug_block, re.DOTALL)
    if copy_match:
        anti_drug_copy = copy_match.group(1).strip()
        anti_drug_copy = anti_drug_copy.replace('${styles.activitySection}', '${styles.modalDescContent}')
        anti_drug_copy = anti_drug_copy.replace('<h3>', '<h3 style="color:var(--gold);">')
        anti_drug_copy = anti_drug_copy.replace('<ul>', '<ul style="padding-left: 20px;">')
        anti_drug_copy = anti_drug_copy.replace('<ol>', '<ol style="padding-left: 20px;">')
    else:
        print("Could not find copy for Anti Drug Club")
        exit(1)
    
    # Remove top-level Anti Drug Club
    content = content.replace(anti_drug_block, '')
else:
    print("Could not find Anti Drug Club top-level card")
    exit(1)

# 2. Remove College Clubs top-level card
clubs_match = re.search(r'\s*\{\s*ID: "clubs",\s*category: "College Clubs".*?\]\s*\},', content, re.DOTALL)
if clubs_match:
    content = content.replace(clubs_match.group(0), '')
else:
    print("Could not find College Clubs (clubs) top-level card")
    # Don't exit, maybe it was already removed or something

# 3. Remove Anti Drug Cell from SVASC Cells
anti_drug_cell_match = re.search(r'\s*\{\s*image: "[^"]*",\s*title: "Anti Drug Cell",\s*description: `<p>.*?</p>`\s*\},?', content, re.DOTALL)
if anti_drug_cell_match:
    content = content.replace(anti_drug_cell_match.group(0), '')
else:
    print("Could not find Anti Drug Cell sub-card in SVASC Cells")

# 4. Update College Club (collegeClub) cards
college_club_match = re.search(r'(ID: "collegeClub".*?cards: \[)(.*?)(\]\s*\})', content, re.DOTALL)
if college_club_match:
    new_cards = f"""
        {{
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
          title: "Literary Club",
          description: `<p>The Literary Club promotes reading, writing, debate, and elocution among students. It organizes book discussions, essay and poetry competitions, and inter-collegiate literary events to develop critical thinking and communication skills.</p>`
        }},
        {{
          image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400",
          title: "Entrepreneurship Development Cell",
          description: `<p>The EDC fosters startup thinking and self-employment skills. It organized a two-day workshop on "Life Skills Development" for all UG students, bridging the gap between academic knowledge and real-world entrepreneurial success.</p>`
        }},
        {{
          image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400",
          title: "Fine Arts Club",
          link: "/fine-arts-club"
        }},
        {{
          image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400",
          title: "Rotaract Club",
          link: "/rotaract-club"
        }},
        {{
          image: "https://images.unsplash.com/photo-1579389083395-5db4f36db01b?w=400",
          title: "Red Ribbon Club",
          link: "/red-ribbon-club"
        }},
        {{
          image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400",
          title: "Voter's Club",
          link: "/voter-literacy-club"
        }},
        {{
          image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400",
          title: "Junior JCI Wing",
          link: "/junior-jci-wing"
        }},
        {{
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400",
          title: "Consumer Protection Club",
          link: "/consumer-protection-club"
        }},
        {{
          image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=400",
          title: "Anti Drug Club",
          description: `
{anti_drug_copy}
          `
        }}
      """
    
    updated_content = content[:college_club_match.start(2)] + new_cards + content[college_club_match.end(2):]
    content = updated_content
else:
    print("Could not find collegeClub cards array")
    exit(1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully updated Activities.jsx")
