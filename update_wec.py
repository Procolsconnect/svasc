import re

filepath = r'C:\Users\AJAYRAJ\Desktop\SVASC [PAGES]\svasc - web site\svasc\client\src\pages\Activities.jsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the top-level block for Women Empowerment Cell
match = re.search(r'\s*\{\s*ID: "womenEmpowerment".*?\]\s*\},', content, re.DOTALL)
if match:
    wec_block = match.group(0)
    
    # Extract copy inside the block
    copy_match = re.search(r'copy: `(.*?)`,\s*cards:', wec_block, re.DOTALL)
    if copy_match:
        wec_copy = copy_match.group(1).strip()
        
        wec_copy = wec_copy.replace('${styles.activitySection}', '${styles.modalDescContent}')
        wec_copy = wec_copy.replace('<h3>', '<h3 style="color:var(--gold);">')
        wec_copy = wec_copy.replace('<ul>', '<ul style="padding-left: 20px;">')
        wec_copy = wec_copy.replace('<ol>', '<ol style="padding-left: 20px;">')
        
        # Remove the top-level block
        content = content.replace(wec_block, '')
        
        # Now update the sub-card description
        sub_card_match = re.search(r'title: "Women Empowerment Cell",\s*description:\s*`.*?`', content, re.DOTALL)
        if sub_card_match:
            sub_card = sub_card_match.group(0)
            new_sub_card = f'title: "Women Empowerment Cell",\n          description: `\n{wec_copy}\n          `'
            content = content.replace(sub_card, new_sub_card)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print("Successfully updated Women Empowerment Cell!")
        else:
            print("Sub-card not found.")
    else:
        print("Copy not found.")
else:
    print("Top-level card not found.")
