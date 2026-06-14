const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'chantika-s-style-showcase-main/src/routes');
const destDir = path.join(__dirname, 'chantika-nextjs/src/app');

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');

// We will extract SiteHeader and SiteFooter from reseller.tsx to a new component
let siteHeaderStr = '';
let siteFooterStr = '';

// First pass: extract SiteHeader and SiteFooter
const resellerContent = fs.readFileSync(path.join(srcDir, 'reseller.tsx'), 'utf-8');
const headerMatch = resellerContent.match(/export function SiteHeader\(\) \{[\s\S]*?\}\n\}/);
if (headerMatch) siteHeaderStr = headerMatch[0];

const footerMatch = resellerContent.match(/export function SiteFooter\(\) \{[\s\S]*?\}\n\}/);
if (footerMatch) siteFooterStr = footerMatch[0];

// Write them to chantika-nextjs/src/components/SiteHeader.tsx
const headerFooterPath = path.join(__dirname, 'chantika-nextjs/src/components/SiteHeaderFooter.tsx');
let hfContent = `import Link from 'next/link';\n\n${siteHeaderStr}\n\n${siteFooterStr}`;
hfContent = hfContent.replace(/to=/g, 'href=');
fs.writeFileSync(headerFooterPath, hfContent);


for (const file of files) {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
    
    // Replace tanstack link with next link
    content = content.replace(/import \{.*?Link.*?\} from "@tanstack\/react-router";/, "import Link from 'next/link';");
    content = content.replace(/import \{.*?createFileRoute.*?\} from "@tanstack\/react-router";/, "");
    content = content.replace(/import \{ Link \} from "@tanstack\/react-router";/, "import Link from 'next/link';");
    content = content.replace(/import \{ SiteHeader, SiteFooter \} from "\.\/reseller";/, "import { SiteHeader, SiteFooter } from '@/components/SiteHeaderFooter';");
    
    // Change <Link to="..."> to <Link href="...">
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    
    // Remove the Route declaration
    content = content.replace(/export const Route = createFileRoute.*?\(\{\n[\s\S]*?\}\);\n/g, "");
    
    // Remove SiteHeader and SiteFooter definitions if in reseller.tsx
    if (file === 'reseller.tsx') {
        content = content.replace(/export function SiteHeader\(\) \{[\s\S]*?\}\n\}/, "");
        content = content.replace(/export function SiteFooter\(\) \{[\s\S]*?\}\n\}/, "");
        content = "import { SiteHeader, SiteFooter } from '@/components/SiteHeaderFooter';\n" + content;
    }

    // Export the component as default
    // We look for function <Name>()
    const componentMatch = content.match(/function ([A-Z]\w+)\(\)/);
    if (componentMatch) {
        const compName = componentMatch[1];
        if (compName !== 'Field' && compName !== 'SiteHeader' && compName !== 'SiteFooter') {
           content = content.replace(new RegExp(`function ${compName}\\(\\)`), `export default function ${compName}()`);
        }
    }
    
    // Save to the right path
    let routeName = file.replace('.tsx', '');
    let destPath = '';
    if (routeName === 'index') {
        destPath = path.join(destDir, 'page.tsx');
    } else {
        const routeDir = path.join(destDir, routeName);
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }
        destPath = path.join(routeDir, 'page.tsx');
    }
    
    // Ensure "use client" for pages using useState
    if (content.includes("useState(")) {
        content = `"use client";\n` + content;
    }
    
    fs.writeFileSync(destPath, content);
}

console.log("Migration script finished successfully!");
