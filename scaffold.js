import fs from 'fs';
import path from 'path';

const pages = [
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Contact.jsx',
  'src/pages/services/PartnerHospitals.jsx',
  'src/pages/services/Treatment.jsx',
  'src/pages/products/PlayTonight.jsx',
  'src/pages/products/Ameora.jsx'
];

pages.forEach(file => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const name = path.basename(file, '.jsx');
  fs.writeFileSync(file, `export default function ${name}() { return <div>${name}</div>; }`);
});
