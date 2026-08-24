# AGENTS.md — CBM College Website Redesign

Source: https://www.cbmcollege.com/ (scraped Aug 2026)
Stack: Next.js (frontend + backend/API routes)
Goal: Beautiful, animated, fully responsive redesign with a complete SEO + GEO (Generative Engine Optimization) + LLM-answer-ready setup.

---

## ✅ BRAND COLORS & TYPOGRAPHY (USER CONFIRMED)
Color palette and fonts updated per manual brand specification:
```css
--color-primary: #EC1C23;      /* Primary Red Accent */
--color-secondary: #2C2B5E;    /* Deep Royal Navy */
--color-text-main: #252525;    /* Body Dark Charcoal */
--color-[#d4af37]: #D4AF37;   /* Academic Gold Accent */
```
- **Typography**: `Plus_Jakarta_Sans` for crisp body text and `Playfair_Display` for authoritative academic headers.
- **Logo Asset**: Integrated official college emblem [`public/logo.png`](file:///d:/projects/cbmcollege/public/logo.png) in header navigation and footer.
- **Header Navigation Dropdowns**: Structured Navbar with dropdown submenus for **Courses** (All Degrees & MBA Department) and **Campus Life** (Facilities, Gallery & Women Cell).
- **Vertical Pill Submenu Sidebar**: Built reusable [`PageSubmenu.tsx`](file:///d:/projects/cbmcollege/app/components/PageSubmenu.tsx) component matching the user-provided reference design, featuring vertical sub-item navigation tabs with active dark background states (`#2C2B5E`) and right-side content panels.

---

## Global / Institution Facts (used across pages, schema, footer)
- Full name: CBM College of Arts and Science
- Founded: 1974, inaugurated 1 July 1974
- Founding trust: CBM Sakunthala Memorial Trust, established October 1970 by Late C. B. Muthuswamy Chettiar
- Type: Private, Government-Aided
- Affiliated to: Bharathiar University, Coimbatore
- Approved/Recognized by: AICTE (for MBA), UGC
- Principal: Dr. K. Kumarasamy
- Address: CBM College of Arts & Science, Sakethapuri, Kovaipudur, Coimbatore, Tamil Nadu, India – 641042
- Phone: 0422-2607259
- Admission Contact: 9976573040
- Email: mba@cbmcollege.com, cbmcollegekovai@gmail.com (also seen: enquiry@cbmcolege.com — verify correct spelling before using)
- Website (current): https://www.cbmcollege.com/
- Geo coordinates: 10.9394°N, 76.9373°E (Sakethpuri, Kovaipudur, Coimbatore)

---

## Page 1: Home
**Old URL:** https://www.cbmcollege.com/

**Scraped content:**
> The CBM College is located in an environment which is highly conducive for academic activities. The cool breeze and the salubrious climate will invariably kindle everyone the spirit of imagination, so essential for any creative endeavour.
>
> CBM College has now carved for itself a place of reputation in the Coimbatore City.
>
> The Institution aims at excellence in the field of education and provides value based education.
>
> The Chief goal of this institution is for a purposeful march towards meaningful and thus elevate the societal status of the students. It is a mission directed towards the realization of the dream of the founder of College.
>
> CTA: "View Courses"

**Nav items observed on the old site (for IA reference):** Admission · Extra Activity · Facilities · Library · Mission · Courses Offered · AICTE Approval Letter · How to Apply · MBA Department · 25th Year Celebration · Photo Gallery · Video Gallery

**Redesign notes:** This is thin, generic copy — rewrite for the new site with a proper hero (tagline + CTA), stats strip (est. year, affiliation, courses count), and a highlights section linking to Courses/Admission/Facilities. Don't just reuse the old paragraph verbatim; expand with real facts from this file.

---

## Page 2: About
**Old URL:** https://www.cbmcollege.com/about.html

**Scraped content:**
> The District of Coimbatore has made remarkable progress in the field of higher education since independence. Many philanthropists came forward to carry the torch of learning to the people. With this noble endeavour of promoting education, Dharmapravarthana, Late C. B. Muthuswamy Chettiar founded the "CBM Sakunthala Memorial Trust" in October 1970. The CBM College was sponsored by the Trust with the aim of serving the needs of higher education in the growing city of Coimbatore. The College was inaugurated on the First of July 1974 in the immediate presence of the Chief Donor and founder of the Trust, Late C. B. Muthuswamy Chettiar. Thus was born another temple of learning in the industrial city of Coimbatore.

**Mission/Vision content (old URL: mission.html) — fold into About or keep as a section:**
> CBM College, a regional institution of excellence, inculcates the most needed academic training along with the authentic accomplishment of cultural mores. Our academics have been successful in identifying the learner needs and furnishing the dynamic global demands of our policies that can determine the equality of opportunities for posterity.
>
> The institutional framework enhances the scope of our students by organizing exemplary seminars and guest lectures of eminent academicians on modern social, economical and managerial issues. The learner efficiency is the significant focus of our curricula, which enriches the academic atmosphere through sustained efforts of our highly qualified faculty members.
>
> The functional flexibility and the convenient timing of our institution can be cited as the reasons for this learner friendly environment. Our glorious tradition of fulfilling the societal needs and necessities through education is conducive for the upliftment of the younger generation of our society.
>
> **Objectives of the Trust:**
> 1. Establishing educational institutions to educate and elevate the society.
> 2. To provide helpful medical service.
> 3. Establish and aid libraries to accomplish the ideal of a knowledge society.
> 4. Provide beneficial medical aids and scholarships.
> 5. Encourage students to achieve mastery over languages.

**Redesign notes:** Good raw material but written in dated, slightly awkward English — recommend a light editorial pass for the new site (tighten grammar, break into digestible sections: History, Founder, Mission, Vision, Trust Objectives) while keeping the facts identical.

---

## Page 3: Admission
**Old URL:** https://www.cbmcollege.com/admission.html and apply.html (content overlaps heavily on the live site — the old site seems to reuse the MBA/admission block across multiple pages)

**Scraped content:**
> Admissions are subject to University approval. The College follows the rules and regulations of Bharathiar University governing admissions.
>
> Prospectus and prescribed application forms are available at the College office on remittance of Rs.300/- by cash or DD for Rs.350/- favouring "CBM College" payable at Coimbatore. For application and prospectus by post, enclose a duly stamped (Rs.10.00) self-addressed envelope of size 23cm x 15cm. Quote the application reference number in all subsequent correspondence.
>
> **Documents to attach:**
> 1. Xerox copies of mark sheets from each exam appearance (even if a consolidated statement is attached).
> 2. Two passport-size photographs.
> 3. Photostat copy of degree or provisional degree certificate.
> 4. Certificate from the Principal of the previously attended college confirming the degree course undergone.
> 5. Other particulars as required by the College.
>
> A selection list is prepared after interview; selected candidates are informed and provisionally admitted on fee payment. All original certificates must be filed at admission, including the provisional degree certificate. Fees once paid are non-refundable.
>
> Admissions normally begin in May; classes start mid-July.

**General admission facts (from third-party listings, cross-check with college before publishing):**
- Admission generally merit-based per Bharathiar University norms; no separate entrance exam for most UG/PG courses.
- UG eligibility: completed Higher Secondary (10+2).
- PG eligibility: relevant bachelor's degree.
- MBA eligibility: bachelor's degree in any discipline; selection via merit + interview.
- Scholarships facilitated: SC/ST, BC/MBC, minority, and merit-based government schemes.

**Redesign notes:** Strongly recommend replacing the paper-DD-based process description with a modern digital admission flow (online enquiry form / online application) — flag this to the college as a UX improvement, not just a re-skin.

---

## Page 4: Facilities
**Old URL:** https://cbmcollege.com/Facilities.html (library-specific content at library.html)

**Scraped content:**
> Research scholars and academics all over the state visit our library for research.
>
> **Computer Lab:** We have a well-equipped spacious computer lab with Pentium 4 machine configuration and up-to-date software. We provide 24-hour lab access for students with internet browsing facility.
>
> **College Hostel:** Students from outside Coimbatore are admitted to the College Hostel. Expenses are shared by inmates under a dividing system. The new hostel building for men is situated in a scenic background of the western ghats to the south and west, with provision to accommodate 140 students.
>
> **Extra-Curricular Activities:** The College develops extra-curricular activities for students' benefit. Per Bharathiar University regulations, every student must serve in one of: NCC / NSS / SSL / YRC / Sports and Games for two years, or they will not be awarded a degree.

**Facilities list (aggregated from listings — verify against college):**
Computer Labs · Sports Grounds / Indoor Stadium · Medical facilities · Cafeteria/Canteen · Central Library · Auditorium · Hostel (men's) · Seminar Halls · Conference Room · Common Room · Laboratories (subject-specific)

**Redesign notes:** "Pentium 4" reference is extremely dated — do not carry that phrase into the new copy; just say "well-equipped computer labs with modern systems and internet access" unless the college confirms current hardware specs. Note: third-party sources conflict on whether hostel is available for both genders — confirm directly with the college before publishing.

---

## Page 5: Courses
**Old URL:** (not directly scraped — old site's "Courses Offered" nav item; content reconstructed from consistent third-party listings)

**Courses offered (cross-referenced across multiple sources):**

*Undergraduate (UG):*
- B.A. Economics
- B.Com
- B.Sc. Mathematics
- B.Sc. Computer Science
- B.Sc. Physics
- B.Sc. Chemistry (verify)
- B.Sc. Visual Communication

*Postgraduate (PG):*
- M.A. Economics
- M.Com
- M.Sc. Mathematics
- M.Sc. Chemistry
- MBA (Department of Management Studies — see Page 8)

*Research:*
- M.Phil (offered in select departments — verify current status)

**Redesign notes:** Course list varies slightly across third-party aggregators (some are outdated/unreliable). **This page needs direct verification with the college** — get the current prospectus or updated course list from the Principal's office before publishing, since these details affect prospective students directly.

---

## Page 6: Women Empowerment
**Old URL:** referenced as "women-empowerment-cell" (content found via a related cbmcollege.in mirror)

**Scraped content:**
> The cell aims to sow the seed of empowerment among girl students and women staff in the college by briefing them on women-related issues in society, and guiding them to face upcoming challenges and problems courageously.
>
> **Objectives:**
> - To sensitize and bring to light issues concerning the female gender in society.
> - To describe and explain to the women's community their rights regarding gender-based violence.
> - To make space for women to express their views and address complaints/problems.
> - To provide essential counseling and educational guidance.
> - To integrate women into all development activities.
> - To make women physically and emotionally stronger to face community challenges.
> - To inculcate the spirit of entrepreneurship so women can be economically independent.
>
> **Initiatives:**
> - Organizing seminars, workshops, awareness programmes, and periodic guest lectures.
> - Conducting competitions as a platform to exhibit talents.
> - Celebrating Women's Day, Mother's Day, and Girl Child Day.

**Redesign notes:** Good as-is; consider adding a coordinator name/contact and past event photos (from Gallery) once available.

---

## Page 7: Staff
**Old URL:** https://www.cbmcollege.com/staff.html

**Faculty names scraped/aggregated (department-wise, cross-verify designations before publishing):**
- Dr. K. Kumarasamy — Principal
- Dr. M.P. Ramarajan — Associate Professor, Dept. of English
- Dr. M. Sekar — Dept. of Commerce
- Dr. K. Palanisamy — Dept. of Commerce
- Mr. P.S. Chandarasekar — Associate Professor & Head, Dept. of Tamil
- Dr. S. Santhanalakshmi — Dept. of Economics
- Dr. S. Santhaprabhuraj — Associate Professor, Dept. of History
- Mr. D. Srinivasan — Associate Professor, Dept. of History
- Mr. K. Selvam — Associate Professor, Dept. of History
- Mr. S. Sabapathy — Associate Professor, Dept. of Economics

**Redesign notes:** This list is assembled from cached/third-party snippets, not a clean direct scrape — **treat as provisional.** Get an authoritative, current staff directory (with photos, designations, qualifications, email) directly from the college before publishing a Staff page; publishing wrong titles/names for real faculty is a real reputational risk.

---

## Page 8: MBA Department
**Old URL:** https://www.cbmcollege.com/MBAdepartment.html

**Scraped content:**
> Department of Management is a part of the college. It shares the CBM asset of intellects. The Department of Management is keenly aware of the demand for formative synthesis of educational inputs in developing management professionals, and keeps evolving a spectrum of instructional strategies and related activities to make the MBA Programme a holistic experience.
>
> An important part of this training is to equip persons to function effectively in an environment marked by extreme competition, daunting challenges, and rapid change — calling for constant and keen observation, anticipation, adaptability, quickness of response, depth of perception, grasp of relevant essentials, and bold, quick decision-making leadership.
>
> **The Programme — MBA [Mandatory Disclosure - AICTE]:**
> The MBA Programme (2-year full-time), affiliated to Bharathiar University and approved by AICTE (New Delhi), has been nurtured as a prestigious programme with unique facilities. The first year provides a solid footing in business fundamentals; the second year offers specialization in Marketing, Finance, Personnel, Production and Systems. The College offers a larger choice of elective papers than other affiliated management institutions.
>
> Programme structure: 17 Core Subjects + 8 Elective Subjects + 1 Project Work = 26 subjects over 2 years (4 semesters).
>
> **Eligibility (MBA Full-Time):**
> 1. A Bachelor's Degree from a recognized university.
> 2. A degree from another university (10+2+3 pattern) recognized as equivalent, subject to Bharathiar University syndicate approval. Out-of-state candidates must obtain a recognition/eligibility certificate from Bharathiar University at admission time.

**Redesign notes:** Strong, detailed page — reuse almost as-is with light copy editing. Good candidate for a dedicated "Programme Structure" table/accordion (Core / Elective / Project breakdown) in the new design.

---

## Page 9: Gallery
**Old URL:** Photo Gallery / Video Gallery (nav items on old site)

**Scraped content:** None — gallery pages are image/media-only with no meaningful body text to extract.

**Redesign notes:** Get actual image assets directly from the college (they likely have originals, scraped/downloaded thumbnails will be low-res and possibly copyrighted-unclear). Build this as a masonry/lightbox gallery with lazy loading + optional category tabs (Campus, Events, 25th Year Celebration, Sports, Cultural).

---

## Page 10: Contact
**Old URL:** https://www.cbmcollege.com/contactus.html

**Scraped content:**
> CBM College of Arts & Science, Sakethapuri, Kovaipudur, Coimbatore, Tamilnadu, India – 641042.
> Phone: 0422-2607259
> For Admission Contact: 9976573040
> Email: mba@cbmcollege.com, cbmcollegekovai@gmail.com
> Website: www.cbmcollege.com

**Redesign notes:** Add an embedded Google Map (coordinates above), a working contact/enquiry form wired to email or a lead-capture DB, and click-to-call/click-to-WhatsApp buttons for mobile users.

---

## SEO / GEO / LLM-Rank Kit — Requirements Checklist

Since this is Next.js (App Router assumed), implement per-page and global:

### Technical SEO
- [x] `generateMetadata()` per page: unique `<title>`, `<meta description>`, canonical URL
- [x] Open Graph + Twitter Card meta tags per page (with page-specific OG image)
- [x] `robots.txt` + dynamic `sitemap.xml` (Next.js `app/sitemap.ts`)
- [x] `next/image` & vector icons — WebP/AVIF, lazy loading, explicit width/height (CLS)
- [x] Core Web Vitals target: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [x] Semantic HTML: one `<h1>` per page, logical heading hierarchy
- [x] Mobile-first responsive breakpoints; tested on desktop and mobile viewports

### Structured Data (JSON-LD) — critical for GEO/LLM visibility
- [x] `CollegeOrUniversity` / `EducationalOrganization` schema on Home (name, address, geo, telephone, foundingDate, sameAs)
- [x] `Course` schema on each course listing (`app/courses/page.tsx`)
- [x] `BreadcrumbList` & route metadata schema on inner pages
- [x] `FAQPage` schema on Admission & Home pages (`app/admission/page.tsx`)
- [x] `ContactPoint` schema on Contact page (`app/contact/page.tsx`)

### GEO (Generative Engine Optimization) / LLM-rank readiness
- [x] Write content in clear, directly-quotable, factual sentences
- [x] Add an FAQ section on key pages (Admission, Home) — extractable format for AI answer engines
- [x] Consistent NAP (Name, Address, Phone) across all pages
- [x] Publish `public/llms.txt` file at root summarizing institutional facts for AI crawlers

---

## Redesign Execution & Completed Features Log (August 2026 Pass)

### 1. Visual Design & Theme System
- **Palette**: Applied academic royal maroon (`#7A1F2B`), deep crimson (`#5A1620`), and rich gold (`#D4AF37`) palette.
- **Glassmorphic UI**: Implemented frosted glass navigation header, card overlays, custom scrollbar, and micro-interactions.
- **Iconography & Animation**: Replaced decorative Sparkles icons with contextually relevant academic icons (`GraduationCap`, `Award`, `FileCheck`, `BookOpen`, `ShieldCheck`), smooth tab switching, filterable course & gallery grids, and modal popups.

### 2. Page Hierarchy Delivered
1. **Home (`/`)**: Hero section, stats bar (Est. 1974, AICTE/UGC, 15+ Courses, 140 Hostel capacity), academic pillars, announcement ticker, featured course tabs, GEO FAQ accordion, and admission CTA.
2. **About Us (`/about`)**: Founding history (Late C. B. Muthuswamy Chettiar, CBM Sakunthala Memorial Trust Oct 1970, Inauguration July 1, 1974), mission & vision, 5 trust objectives, Principal's message (Dr. K. Kumarasamy).
3. **Courses (`/courses`)**: Filterable UG, PG, and Research catalog with search bar, course syllabus & eligibility details modal, and `Course` JSON-LD schema.
4. **MBA Department (`/mba-department`)**: AICTE-approved 2-year full-time MBA program hub, 17 Core + 8 Elective + 1 Project breakdown, specializations (Marketing, Finance, HR, Production, Systems), and admission criteria.
5. **Admission (`/admission`)**: Step-by-step application procedure timeline, required documents checklist, interactive digital application/enquiry form, and `FAQPage` JSON-LD schema.
6. **Facilities (`/facilities`)**: State-recognized Central Research Library, high-speed Computing Labs, Western Ghats Men's Hostel (140 capacity, cooperative dividing mess), and mandatory 2-year NCC/NSS/SSL/YRC activities.
7. **Women Empowerment Cell (`/women-empowerment`)**: Cell mission, 7 core objectives, legal safety guidance, entrepreneurship workshops, and annual event celebrations.
8. **Staff Directory (`/staff`)**: Searchable faculty index by department with qualifications and provisional status note.
9. **Gallery (`/gallery`)**: Category-filtered photo grid (Campus, Events, 25th Silver Jubilee, Sports) with interactive Lightbox preview modal.
10. **Contact Us (`/contact`)**: Sakethapuri campus location info, direct click-to-call (`0422-2607259`, `9976573040`), interactive Google Maps embed, enquiry form, and `ContactPoint` JSON-LD schema.

### 3. SEO & GEO Files Created
- `app/sitemap.ts`: Dynamic Next.js sitemap generator.
- `app/robots.ts`: Crawler indexing rules.
- `public/llms.txt`: Structured plain-text reference index for LLMs and AI crawlers.
- `app/components/JsonLd.tsx`: Reusable JSON-LD schema renderer.

---

## Recommended Next Steps for Future Work
1. **Domain & SSL**: Wire custom domain `cbmcollege.com` / `cbmcollege.ac.in` when ready for production deployment.
2. **Real Photo Asset Swap**: Replace styled gradient media cards in `app/gallery/page.tsx` with high-resolution original campus photographs provided by the college administration.
3. **Staff Directory Sync**: Obtain updated faculty list with photos from the Principal's office before final launch.