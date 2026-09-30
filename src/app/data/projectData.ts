import { ProjectData } from '../components/ProjectVisualization'

export const projects: { [key: string]: ProjectData } = {
  'lalmonirhat-project': {
    name: "INTRACO SOLAR POWER LTD",
    type: "30MW (AC) Grid-Tied Solar Plant",
    status: "Operational",
    capacity: "30MW",
    location: "Kaligonj, Lalmonirhat, Bangladesh",
    coordinates: { lat: 25.9974, lng: 89.1524 },
    slug: "lalmonirhat-project",
    commissioningDate: "27 August 2022",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "62 GWh",
    co2Reduction: "30,000 tons annually",
    householdsPowered: "35,000+",
    landArea: "134 acres",
    map: "https://www.google.com/maps?q=25.9975541,89.1499235&z=17&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "Mono-PERC Bi-Facial modules (Longi)",
      inverters: "Central inverters with smart monitoring",
      tracking: "Fixed tilt mounting system",
      transmission: "Grid-tied via NESCO 33/11kV Kaliganj Substation",
      monitoring: "Real-time SCADA system",
      maintenance: "Robotic cleaning system"
    },
    milestones: [
      { date: "Q3 2021", event: "Project Planning & Feasibility Study" },
      { date: "Q4 2021", event: "Land Acquisition & Environmental Clearance" },
      { date: "Q1 2022", event: "Construction Commencement" },
      { date: "Q2 2022", event: "Panel Installation Completed" },
      { date: "Q3 2022", event: "Grid Integration & Commissioning" },
      { date: "27 Aug 2022", event: "Commercial Operations Date" }
    ],
    environmentalImpact: [
      { metric: "CO2 Reduction", value: "30,000 tons/year", description: "Equivalent to planting 1.2 million trees" },
      { metric: "Water Savings", value: "50 million liters/year", description: "Compared to conventional power plants" },
      { metric: "Air Pollution", value: "Zero emissions", description: "No SO2, NOx, or particulate matter" },
      { metric: "Land Use", value: "Dual-purpose ready", description: "Compatible with agricultural use" }
    ],
    images: [
      {src: "lmh.png"},
      {src: "lmh1.png"},
      {src: "lmh2.png"},
      {src: "lmh3.png"},
    ]
  },
  'pabna-project': {
    name: "Dynamic Sun Energy Private Limited",
    type: "100MW (AC) / 150MWp Solar Park",
    status: "Operational",
    capacity: "100MW",
    location: "Bhabanipur, Hemayetpur, Pabna Sadar, Pabna",
    coordinates: { lat: 23.9637, lng: 89.1584 },
    slug: "pabna-project",
    commissioningDate: "23 October 2024",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "218 GWh",
    co2Reduction: "105,512 tons annually",
    householdsPowered: "120,000+",
    landArea: "377 acres",
    map: "https://www.google.com/maps?q=23.9637532,89.1562717&z=15&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "Mono-PERC Bi-Facial modules",
      inverters: "String inverters with AI optimization",
      tracking: "Fixed mount, south-facing (18° tilt)",
      transmission: "21.5km line to a 132kV AIS grid substation",
      monitoring: "AI-powered predictive maintenance",
      maintenance: "Drone-based inspection system"
    },
    milestones: [
      { date: "Q1 2023", event: "Project Planning & Feasibility Study" },
      { date: "Q2 2023", event: "Land Acquisition & Environmental Clearance" },
      { date: "Q3 2023", event: "Construction Commencement" },
      { date: "Q1 2024", event: "Panel Installation Completed" },
      { date: "Q3 2024", event: "Grid Integration & Commissioning" },
      { date: "23 Oct 2024", event: "Commercial Operations Date" }
    ],
    environmentalImpact: [
      { metric: "CO2 Reduction", value: "105,512 tons/year", description: "Equivalent to planting 4.5 million trees" },
      { metric: "Water Savings", value: "50 million liters/year", description: "Compared to conventional power plants" },
      { metric: "Air Pollution", value: "Zero emissions", description: "No SO2, NOx, or particulate matter" },
      { metric: "Land Use", value: "Dual-purpose ready", description: "Compatible with agricultural use" }
    ],
    images: [
      {src: "pabna.png"},
      {src: "pabna1.png"},
      {src: "pabna2.png"},
      {src: "pabna3.png"},
      {src: "pabna4.png"},
    ]
  },
  'bibiana-project': {
    name: "BIBIYANA SOLAR POWER LTD",
    type: "50MW Power Plant",
    status: "Pipeline",
    capacity: "50MW",
    location: "Nobiganj, Hobiganj, Sylhet Division",
    coordinates: { lat: 24.5045, lng: 91.6334 },
    slug: "bibiana-project",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "96.4 GWh",
    co2Reduction: "46,700 tons annually",
    householdsPowered: "60,000+",
    landArea: "140 acres",
    map: "https://www.google.com/maps?q=24.49807,91.6304196&z=14&hl=en-GB&output=embed",
    images: [
      {src: "mun.png"},
      {src: "mun1.png"},
      {src: "mun2.png"},
      {src: "mun3.png"},
      {src: "mun4.png"},
      {src: "mun7.png"},
      {src: "mun9.png"},
    ]
  },
  'moulvibazar-project': {
    name: "MOULVIBAZAR SOLAR POWER LIMITED",
    type: "10 MW (AC) Grid-Tied Solar Power Plant",
    status: "Operational",
    capacity: "10MW AC / 14 MWp DC",
    location: "Athangiri, Kagabala, Moulvibazar Sadar",
    coordinates: { lat: 24.4937, lng: 91.6333 },
    slug: "moulvibazar-project",
    commissioningDate: "12 January 2026",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "21.2 GWh / year",
    co2Reduction: "13,183 MT CO₂ / year",
    householdsPowered: "53,000+",
    landArea: "36 Acres",
    map: "https://www.google.com/maps?q=24.49807,91.6304196&z=14&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "23,544 pcs LONGi Hi-MO 7 @ 600–605 W · 22.4% efficiency · 27 modules/string · 54 modules/table · 436 tables total",
      inverters: "50 × Huawei 300 kW string inverters · 1300 Vdc → 800 Vac · 6 MPPT · 99% efficiency · THD 1%",
      tracking: "Fixed shed, south-faced @ 18° tilt · POWERWAY structure · PHC piles 7 m (4 m depth) · 6.65 m pitch-to-pitch",
      transmission: "16 km, 33 kV overhead OPGW line · Main S/S: 33 kV 17 MVA AIS · Power evacuation: 33/11 kV Bejbari Substation",
      monitoring: "24 × 7 real-time SCADA monitoring · 2 weather stations · Huawei smart management system",
      maintenance: "Own EPC & O&M team · 38 staff post-COD (14 electrical, 10 PV cleaning, 9 security) · dedicated cleaning & security"
    },
    milestones: [
      { date: "Jun 2024", event: "PPA contract signed with BPDB (PPA No. 10710)" },
      { date: "Sep 2024", event: "First pile drive & land acquisition commenced" },
      { date: "Sep 2025", event: "MMS, PV module & transformer installation + testing" },
      { date: "Nov 2025", event: "33 kV line energised & back-feed from grid (27 Nov 2025)" },
      { date: "Jan 2026", event: "Commercial Operation Date declared by PDB (12 Jan 2026)" }
    ],
    environmentalImpact: [
      { metric: "CO₂ Saved", value: "13,183 MT / year", description: "Project-basis carbon saving per year" },
      { metric: "CO₂e Saved", value: "14,246 tonnes / year", description: "GHG displacement vs. diesel-based generation" },
      { metric: "Diesel Displaced", value: "6.4 M litres / year", description: "Equivalent diesel fuel displaced annually" },
      { metric: "Fuel Cost Saving", value: "USD 5.00 M / year", description: "Annual fuel cost saving at USD 0.94/L diesel" }
    ],
    images: [
      { src: "mun.png" },
      { src: "mun1.png" },
      { src: "mun2.png" },
      { src: "mun3.png" },
      { src: "mun4.png" },
      { src: "mun7.png" },
      { src: "mun9.png" }
    ]
  },
  'moulvibazar-project2': {
    name: "SURMA SOLAR POWER LTD",
    type: "25MW Grid-Tied Solar Photovoltaic",
    status: "Planning",
    capacity: "25MW",
    location: "Athangiri, Kagabala, Moulvibazar",
    coordinates: { lat: 24.4920, lng: 91.7780 },
    slug: "moulvibazar-project2",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "48,300 MWh",
    co2Reduction: "23,377 tons annually",
    householdsPowered: "120,000+",
    landArea: "70 Acres",
    map: "https://www.google.com/maps?q=24.4920,91.7780&z=14&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "High-efficiency Monocrystalline PERC or Bifacial Modules (35 MWp DC)",
      inverters: "String Inverters with MPPT",
      tracking: "Fixed-tilt structures",
      transmission: "Step-up transformer to 33kV (2km transmission line to Moulvibazar 33/132kV Grid Substation)",
      monitoring: "Real-time SCADA remote monitoring and control",
      maintenance: "Weather stations, cleaning systems and security fencing"
    },
    milestones: [
      { date: "2025", event: "Notice of Award (NOA) Received" },
      { date: "28 days from NOA", event: "Contract Signing" },
      { date: "2025–2026", event: "Land Acquisition (50% complete) & NOC Clearances" },
      { date: "2026", event: "Construction Commencement" },
      { date: "2026–2027", event: "Panel Installation & Grid Integration" },
      { date: "2027", event: "Commercial Operations Date" }
    ],
    environmentalImpact: [
      { metric: "CO₂ Offset", value: "23,377 MTon/year", description: "Significant annual carbon reduction" },
      { metric: "Water Usage", value: "Mostly Rain Water", description: "Minimal water footprint through rainwater harvesting" },
      { metric: "Air Pollution", value: "Zero Emissions", description: "No SO₂, NOₓ or particulate matter released" },
      { metric: "Jobs Created", value: "250+ Construction", description: "~50 permanent O&M roles created locally" }
    ],
    images: [
      { src: "mun.png" },
      { src: "mun1.png" },
      { src: "mun2.png" },
      { src: "mun3.png" },
      { src: "mun4.png" },
      { src: "mun7.png" },
      { src: "mun9.png" }
    ]
  },
  'pabna-project2': {
    name: "PABNA GREEN POWER LTD",
    type: "70MW Grid-Tied Solar Photovoltaic",
    status: "Planning",
    capacity: "70MW",
    location: "Bhabanipur, Hemayetpur, Pabna",
    coordinates: { lat: 24.0600, lng: 89.3500 },
    slug: "pabna-project2",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "135,240 MWh",
    co2Reduction: "65,456 tons annually",
    householdsPowered: "338,000+",
    landArea: "190 Acres",
    map: "https://www.google.com/maps?q=24.0600,89.3500&z=14&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "High-efficiency Monocrystalline PERC or Bifacial Modules (98 MWp DC)",
      inverters: "String Inverters with MPPT",
      tracking: "Fixed-tilt structures",
      transmission: "Step-up transformer to 132kV (2km transmission line to Pabna 33/132kV Grid Substation)",
      monitoring: "Real-time SCADA remote monitoring and control",
      maintenance: "Weather stations, cleaning systems and security fencing"
    },
    milestones: [
      { date: "2025", event: "Notice of Award (NOA) Received" },
      { date: "28 days from NOA", event: "Contract Signing" },
      { date: "2025–2026", event: "Land Acquisition & NOC Clearances" },
      { date: "2026", event: "Construction Commencement" },
      { date: "2026–2027", event: "Panel Installation & Grid Integration" },
      { date: "2027", event: "Commercial Operations Date" }
    ],
    environmentalImpact: [
      { metric: "CO₂ Offset", value: "65,456 MTon/year", description: "Significant annual carbon reduction" },
      { metric: "Water Usage", value: "Mostly Rain Water", description: "Minimal water footprint through rainwater harvesting" },
      { metric: "Air Pollution", value: "Zero Emissions", description: "No SO₂, NOₓ or particulate matter released" },
      { metric: "Jobs Created", value: "700+ Construction", description: "~150 permanent O&M roles created locally" }
    ],
    images: [
      { src: "pabna.png" },
      { src: "pabna1.png" },
      { src: "pabna2.png" },
      { src: "pabna3.png" },
      { src: "pabna4.png" }
    ]
  },
  'pabna-project3': {
    name: "PADMA SOLAR POWER LTD",
    type: "150MW Grid-Tied Solar Photovoltaic",
    status: "Planning",
    capacity: "150MW",
    location: "Ratanpur, Hemayetpur, Pabna",
    coordinates: { lat: 24.0550, lng: 89.3600 },
    slug: "pabna-project3",
    developer: "Paramount Solar Ltd.",
    annualGeneration: "289,800 MWh",
    co2Reduction: "140,263 tons annually",
    householdsPowered: "724,000+",
    landArea: "420 Acres",
    map: "https://www.google.com/maps?q=24.0550,89.3600&z=14&hl=en-GB&output=embed",
    technicalSpecs: {
      panels: "High-efficiency Monocrystalline PERC or Bifacial Modules (210 MWp DC)",
      inverters: "String Inverters with MPPT",
      tracking: "Fixed-tilt structures",
      transmission: "Step-up transformer to 132kV (12km line to Ishwardi Grid Substation)",
      monitoring: "Real-time SCADA remote monitoring and control",
      maintenance: "Weather stations, cleaning systems and security fencing"
    },
    milestones: [
      { date: "2025", event: "Notice of Award (NOA) Received" },
      { date: "28 days from NOA", event: "Contract Signing" },
      { date: "2025–2026", event: "Land Acquisition & NOC Clearances" },
      { date: "2026", event: "Construction Commencement" },
      { date: "2026–2027", event: "Panel Installation & Grid Integration" },
      { date: "2027–2028", event: "Commercial Operations Date" }
    ],
    environmentalImpact: [
      { metric: "CO₂ Offset", value: "140,263 MTon/year", description: "Largest carbon offset in the portfolio" },
      { metric: "Water Usage", value: "Mostly Rain Water", description: "Minimal water footprint through rainwater harvesting" },
      { metric: "Air Pollution", value: "Zero Emissions", description: "No SO₂, NOₓ or particulate matter released" },
      { metric: "Jobs Created", value: "1,000+ Construction", description: "~250 permanent O&M roles created locally" }
    ],
    images: [
      { src: "pabna.png" },
      { src: "pabna1.png" },
      { src: "pabna2.png" },
      { src: "pabna3.png" },
      { src: "pabna4.png" }
    ]
  }
}