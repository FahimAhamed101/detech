import re

filepath = r'C:\Users\Admin\.gemini\antigravity-ide\brain\52cc533a-26f0-48e1-9cb0-942158f47f9e\.system_generated\steps\516\content.md'
with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('BuyCode Pro is')
if idx != -1:
    print(text[idx:idx+1500])
else:
    print('Not found')
