import zipfile, xml.etree.ElementTree as ET
p = r"d:\\Falcon Bridge Partners\\Files\\FalconBridge_Website_Copy_Master_Document V2.0.docx"
with zipfile.ZipFile(p) as z:
    xml = z.read('word/document.xml')
root = ET.fromstring(xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts = []
for para in root.findall('.//w:p', ns):
    parts = [t.text for t in para.findall('.//w:t', ns) if t.text]
    if parts:
        texts.append(''.join(parts))
print("\n".join(texts))
