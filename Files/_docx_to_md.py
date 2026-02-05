import zipfile
from xml.etree import ElementTree as ET
from pathlib import Path

src = Path(r"d:\\Falcon Bridge Partners\\Files\\FalconBridge_Website_Copy_Master_Document V2.0.docx")
dst = Path(r"d:\\Falcon Bridge Partners\\Files\\FalconBridge_Website_Copy_Master_Document V2.0.md")

with zipfile.ZipFile(src) as z:
    xml = z.read('word/document.xml')

root = ET.fromstring(xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

lines = []
for para in root.findall('.//w:p', ns):
    parts = [t.text for t in para.findall('.//w:t', ns) if t.text]
    if parts:
        lines.append(''.join(parts))

content = "\n".join(lines).strip() + "\n"
dst.write_text(content, encoding='utf-8')
print(dst)
