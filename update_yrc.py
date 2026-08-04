import re

filepath = r'c:\Users\AJAYRAJ\Desktop\SVASC [PAGES]\svasc - web site\svasc\client\src\pages\Activities.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract yrc
match = re.search(r'\s*\{\s*ID: "yrc".*?\]\s*\},', content, re.DOTALL)
if match:
    block = match.group(0)
    copy_match = re.search(r'copy: `(.*?)`,\s*cards:', block, re.DOTALL)
    if copy_match:
        copy = copy_match.group(1).strip()
        copy = copy.replace('${styles.activitySection}', '${styles.modalDescContent}')
        copy = copy.replace('<h3>', '<h3 style="color:var(--gold);">')
        copy = copy.replace('<ul>', '<ul style="padding-left: 20px;">')
        copy = copy.replace('<ol>', '<ol style="padding-left: 20px;">')
        
        # Remove yrc
        content = content.replace(block, '')
        
        # Replace 'Details coming soon.' in Committee's Youth Red Cross card with the actual copy
        content = re.sub(r'(title: "Youth Red Cross",\s*description: `\s*)<p>Details coming soon\.</p>(\s*`)', lambda m: f"{m.group(1)}{copy}{m.group(2)}", content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Successfully moved Youth Red Cross to Committee')
    else:
        print('No copy found in yrc')
else:
    print('No yrc card found')
