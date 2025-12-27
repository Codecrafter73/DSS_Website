import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Award,
  Shield,
  Zap,
  Users,
  Hammer,
  Wrench,
  Building2,
  Settings,
  BadgeCheck,
  Palette,
  Monitor,
  ChevronRight,
  Package,
  Truck,
  FileCheck,
  Lightbulb,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";
const servicesData = {
  fabrication: {
    title: "Fabrication",
    slug: "fabrication",
    tagline: "Precision Engineering, Perfect Results",
    description:
      "Expert metal and material fabrication services with state-of-the-art equipment and skilled craftsmen. We specialize in creating custom signage structures that are built to last.",
    icon: Hammer,
    gradient: "from-orange-500 to-red-500",
    heroImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600",

    overview: {
      title: "World-Class Fabrication Services",
      content:
        "With over two decades of experience in metal fabrication, we combine traditional craftsmanship with modern technology to deliver exceptional results. Our fabrication facility is equipped with cutting-edge machinery and operated by skilled professionals who take pride in every project.",
      stats: [
        { value: "2000+", label: "Projects Completed", icon: Target },
        { value: "99%", label: "Client Satisfaction", icon: Star },
        { value: "20+", label: "Years Experience", icon: Award },
        { value: "50+", label: "Expert Team", icon: Users },
      ],
    },

    features: [
      {
        title: "Custom Metal Work",
        description:
          "Precision cutting, bending, and welding of various metals including steel, aluminum, and stainless steel for custom signage structures.",
        icon: Hammer,
        benefits: [
          "CNC precision cutting",
          "TIG/MIG welding expertise",
          "Custom shapes & designs",
          "Powder coating finish",
        ],
      },
      {
        title: "Structural Engineering",
        description:
          "Strong, weather-resistant structures designed to withstand harsh conditions while maintaining aesthetic appeal.",
        icon: Building2,
        benefits: [
          "Load-bearing calculations",
          "Wind resistance design",
          "Seismic compliance",
          "Safety certifications",
        ],
      },
      {
        title: "Quality Materials",
        description:
          "We source only premium-grade materials that meet international standards for durability and performance.",
        icon: Shield,
        benefits: [
          "Grade A materials",
          "Anti-corrosion treatment",
          "Weather-resistant",
          "Eco-friendly options",
        ],
      },
      {
        title: "Rapid Prototyping",
        description:
          "Quick turnaround on prototype development to visualize your signage before full-scale production.",
        icon: Zap,
        benefits: [
          "3D modeling",
          "Sample creation",
          "Design iteration",
          "Fast approval process",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Consultation & Design",
        description:
          "Understanding your requirements and creating detailed technical drawings with specifications.",
        icon: Lightbulb,
      },
      {
        step: "02",
        title: "Material Selection",
        description:
          "Choosing the right materials based on application, environment, and budget considerations.",
        icon: Package,
      },
      {
        step: "03",
        title: "Precision Fabrication",
        description:
          "Cutting, forming, and welding with state-of-the-art equipment and experienced craftsmen.",
        icon: Settings,
      },
      {
        step: "04",
        title: "Quality Control",
        description:
          "Rigorous inspection and testing to ensure every piece meets our high standards.",
        icon: FileCheck,
      },
      {
        step: "05",
        title: "Finishing & Coating",
        description:
          "Professional surface treatment including powder coating, painting, or polishing.",
        icon: Sparkles,
      },
      {
        step: "06",
        title: "Delivery & Installation",
        description:
          "Safe transportation and expert installation at your location with full support.",
        icon: Truck,
      },
    ],

    portfolio: [
      {
        title: "Shopping Mall Fascia",
        description: "50ft steel structure with LED mounting system",
        image:
          "https://images.unsplash.com/photo-1582554833764-e5df77e4daba?w=800",
        specs: ["Steel Frame", "Weather Proof", "LED Ready"],
      },
      {
        title: "Hotel Signage Tower",
        description: "30ft freestanding steel tower with brand elements",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        specs: ["Stainless Steel", "Custom Design", "Night Lighting"],
      },
      {
        title: "Corporate Office Signage",
        description: "Premium aluminum fabrication with 3D lettering",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        specs: ["Aluminum Body", "3D Letters", "LED Backlit"],
      },
    ],

    faqs: [
      {
        question: "What metals do you work with?",
        answer:
          "We work with a wide range of metals including mild steel, stainless steel, aluminum, brass, and copper. Each material is selected based on your specific requirements for durability, aesthetics, and budget.",
      },
      {
        question: "How long does fabrication take?",
        answer:
          "Typical projects take 2-4 weeks from design approval to completion. Complex projects may require additional time. We provide detailed timelines during consultation.",
      },
      {
        question: "Do you provide installation services?",
        answer:
          "Yes, we offer complete installation services with experienced technicians who ensure safe and professional mounting of all fabricated structures.",
      },
      {
        question: "What is your quality guarantee?",
        answer:
          "All our fabrication work comes with a comprehensive warranty covering material defects and workmanship. We use only premium materials and maintain strict quality control.",
      },
    ],

    cta: {
      title: "Ready to Start Your Fabrication Project?",
      description:
        "Get a free consultation and quote for your custom fabrication needs. Our experts are ready to bring your vision to life.",
      primaryButton: "Get Free Quote",
      secondaryButton: "View Portfolio",
    },
  },

  installation: {
    title: "Installation",
    slug: "installation",
    tagline: "Professional Installation, Perfect Placement",
    description:
      "Expert installation services ensuring secure and perfect mounting of all signage types. Our certified technicians handle projects of any scale with safety and precision.",
    icon: Wrench,
    gradient: "from-cyan-500 to-blue-500",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600",

    overview: {
      title: "Professional Installation Excellence",
      content:
        "Our installation team brings years of expertise and cutting-edge equipment to every project. From rooftop installations to ground-level setups, we handle every detail with precision and care, ensuring your signage is installed safely and looks perfect.",
      stats: [
        { value: "3000+", label: "Installations", icon: CheckCircle },
        { value: "100%", label: "Safety Record", icon: Shield },
        { value: "24/7", label: "Support Available", icon: Clock },
        { value: "15+", label: "Certified Teams", icon: Users },
      ],
    },

    features: [
      {
        title: "High-Rise Installation",
        description:
          "Specialized equipment and trained professionals for installations at any height, including skyscrapers and towers.",
        icon: Building2,
        benefits: [
          "Certified rope access",
          "Crane operations",
          "Safety compliance",
          "Insurance coverage",
        ],
      },
      {
        title: "Electrical Integration",
        description:
          "Complete electrical wiring and connection for illuminated signage with proper safety standards.",
        icon: Zap,
        benefits: [
          "Licensed electricians",
          "LED system setup",
          "Timer integration",
          "Energy efficient",
        ],
      },
      {
        title: "Structural Assessment",
        description:
          "Pre-installation site survey to ensure proper mounting and structural integrity.",
        icon: FileCheck,
        benefits: [
          "Load calculations",
          "Wall strength test",
          "Mounting recommendations",
          "Risk assessment",
        ],
      },
      {
        title: "Maintenance Support",
        description:
          "Post-installation maintenance and support services to keep your signage in perfect condition.",
        icon: Settings,
        benefits: [
          "Regular inspections",
          "Cleaning services",
          "Component replacement",
          "Emergency repairs",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Site Survey",
        description:
          "Comprehensive assessment of installation location, structural conditions, and access requirements.",
        icon: Target,
      },
      {
        step: "02",
        title: "Planning & Permits",
        description:
          "Obtaining necessary permits and creating detailed installation plans with safety protocols.",
        icon: FileCheck,
      },
      {
        step: "03",
        title: "Equipment Setup",
        description:
          "Arranging cranes, lifts, or specialized equipment needed for safe installation.",
        icon: Truck,
      },
      {
        step: "04",
        title: "Professional Installation",
        description:
          "Expert mounting and securing of signage with precision alignment and quality checks.",
        icon: Wrench,
      },
      {
        step: "05",
        title: "Electrical Connection",
        description:
          "Safe wiring and connection of illuminated elements with testing and certification.",
        icon: Zap,
      },
      {
        step: "06",
        title: "Final Inspection",
        description:
          "Complete testing, quality verification, and client walkthrough before handover.",
        icon: BadgeCheck,
      },
    ],

    portfolio: [
      {
        title: "Retail Chain Rollout",
        description: "200+ stores nationwide installation in 3 months",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        specs: ["Multi-location", "Brand Consistency", "Quick Deployment"],
      },
      {
        title: "Hospital Wayfinding",
        description: "Complex directional signage across 5-floor facility",
        image:
          "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=800",
        specs: ["Indoor System", "ADA Compliant", "Modular Design"],
      },
      {
        title: "Airport Digital Displays",
        description: "30+ large-format displays in terminal buildings",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
        specs: ["High Traffic", "24/7 Operation", "Remote Management"],
      },
    ],

    faqs: [
      {
        question: "Do you handle permits and approvals?",
        answer:
          "Yes, we manage all necessary permits, approvals, and compliance requirements. Our team coordinates with local authorities to ensure all installations meet regulations.",
      },
      {
        question: "What safety measures do you follow?",
        answer:
          "We follow strict safety protocols including certified equipment, trained personnel, safety gear, and comprehensive insurance. All installations comply with OSHA and local safety standards.",
      },
      {
        question: "Can you install existing signage?",
        answer:
          "Absolutely! We can install signage manufactured by others. We assess the product, verify mounting requirements, and ensure safe installation regardless of the manufacturer.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We provide installation services across India with regional teams. For large projects, we can mobilize teams nationwide to ensure consistent quality.",
      },
    ],

    cta: {
      title: "Need Professional Installation?",
      description:
        "Schedule a site survey and get a detailed installation quote. Our certified team is ready to handle your project with expertise and care.",
      primaryButton: "Schedule Survey",
      secondaryButton: "Call Now",
    },
  },

  "civil-work": {
    title: "Civil Work",
    slug: "civil-work",
    tagline: "Strong Foundations, Lasting Solutions",
    description:
      "Complete civil construction and structural work for signage foundations and support systems. We ensure your signage has the solid base it needs for long-term stability.",
    icon: Building2,
    gradient: "from-emerald-500 to-green-500",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600",

    overview: {
      title: "Expert Civil Engineering Solutions",
      content:
        "Our civil work division specializes in creating robust foundations and structural support for signage installations. With experienced civil engineers and construction teams, we handle everything from excavation to finishing touches.",
      stats: [
        { value: "500+", label: "Foundations Built", icon: Building2 },
        { value: "100%", label: "Code Compliant", icon: BadgeCheck },
        { value: "25+", label: "Engineers", icon: Users },
        { value: "99.8%", label: "Stability Rate", icon: Shield },
      ],
    },

    features: [
      {
        title: "Foundation Engineering",
        description:
          "Designing and constructing solid foundations based on soil conditions, load requirements, and environmental factors.",
        icon: Building2,
        benefits: [
          "Soil testing",
          "Load calculations",
          "Deep foundations",
          "Earthquake resistant",
        ],
      },
      {
        title: "Structural Support",
        description:
          "Building robust support structures including plinths, columns, and reinforced platforms.",
        icon: Shield,
        benefits: [
          "RCC construction",
          "Steel reinforcement",
          "Weather protection",
          "Long-term durability",
        ],
      },
      {
        title: "Underground Services",
        description:
          "Installation of underground electrical conduits, drainage, and utility connections.",
        icon: Settings,
        benefits: [
          "Cable trenching",
          "Conduit laying",
          "Waterproofing",
          "Service integration",
        ],
      },
      {
        title: "Site Development",
        description:
          "Complete site preparation including leveling, paving, and landscaping around signage.",
        icon: TrendingUp,
        benefits: [
          "Land leveling",
          "Paving work",
          "Drainage solutions",
          "Aesthetic finishing",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Site Assessment",
        description:
          "Detailed survey including soil testing, topography analysis, and utility mapping.",
        icon: Target,
      },
      {
        step: "02",
        title: "Engineering Design",
        description:
          "Structural calculations and detailed drawings for foundations and support systems.",
        icon: Lightbulb,
      },
      {
        step: "03",
        title: "Excavation",
        description:
          "Precision excavation to required depths with proper shoring and safety measures.",
        icon: Hammer,
      },
      {
        step: "04",
        title: "Foundation Construction",
        description:
          "Pouring concrete, installing reinforcement, and building support structures.",
        icon: Building2,
      },
      {
        step: "05",
        title: "Utility Installation",
        description:
          "Laying electrical conduits, drainage pipes, and other underground services.",
        icon: Settings,
      },
      {
        step: "06",
        title: "Finishing & Handover",
        description:
          "Site restoration, paving, and final touches with compliance certification.",
        icon: BadgeCheck,
      },
    ],

    portfolio: [
      {
        title: "Highway Pylon Foundation",
        description: "60ft pylon with deep foundation on highway entrance",
        image:
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
        specs: ["Deep Foundation", "Highway Standard", "Wind Resistant"],
      },
      {
        title: "Shopping Complex Platform",
        description: "Large elevated platform for signage tower",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        specs: ["RCC Platform", "Elevated Design", "Load Bearing"],
      },
      {
        title: "Corporate Campus Signage",
        description: "Multiple foundation points across 10-acre campus",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
        specs: ["Multi-point", "Landscaped", "Integrated Lighting"],
      },
    ],

    faqs: [
      {
        question: "How deep do foundations need to be?",
        answer:
          "Foundation depth depends on soil conditions, signage height, and load requirements. Typically ranging from 4-12 feet, determined by soil testing and structural calculations.",
      },
      {
        question: "Do you handle permits for civil work?",
        answer:
          "Yes, we obtain all necessary permits including building permissions, utility clearances, and compliance certificates from local authorities.",
      },
      {
        question: "What about underground utilities?",
        answer:
          "We conduct utility surveys before excavation and coordinate with utility providers. All underground services are marked and protected during construction.",
      },
      {
        question: "How long does civil work take?",
        answer:
          "Typical projects require 1-3 weeks depending on complexity. We provide detailed timelines during planning phase and work efficiently to meet deadlines.",
      },
    ],

    cta: {
      title: "Need Strong Foundations?",
      description:
        "Get expert civil engineering support for your signage project. Our team ensures structural integrity and long-term stability.",
      primaryButton: "Request Consultation",
      secondaryButton: "View Projects",
    },
  },

  "acp-work": {
    title: "ACP Work",
    slug: "acp-work",
    tagline: "Modern Cladding, Premium Finish",
    description:
      "Aluminum Composite Panel cladding and finishing for modern, durable signage solutions. We create stunning facades that combine aesthetics with weather resistance.",
    icon: Settings,
    gradient: "from-violet-500 to-purple-500",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",

    overview: {
      title: "Premium ACP Cladding Solutions",
      content:
        "ACP (Aluminum Composite Panel) work is our specialty, combining modern aesthetics with exceptional durability. Our expert craftsmen create flawless finishes that enhance your brand's visual appeal while providing long-lasting protection.",
      stats: [
        { value: "1000+", label: "ACP Projects", icon: Palette },
        { value: "50+", label: "Color Options", icon: Sparkles },
        { value: "15+", label: "Finish Types", icon: Star },
        { value: "10yr", label: "Warranty", icon: Shield },
      ],
    },

    features: [
      {
        title: "Premium ACP Brands",
        description:
          "Working with top international brands like Alucobond, Reynobond, and Alustrong for guaranteed quality.",
        icon: Award,
        benefits: [
          "International brands",
          "Quality certified",
          "Color consistency",
          "Long-lasting finish",
        ],
      },
      {
        title: "Custom Fabrication",
        description:
          "Precision cutting, bending, and forming of ACP panels to create any design or shape.",
        icon: Settings,
        benefits: [
          "CNC routing",
          "3D shaping",
          "Custom sizes",
          "Complex geometries",
        ],
      },
      {
        title: "Weather Resistance",
        description:
          "ACP panels offer excellent resistance to weather, UV rays, and environmental conditions.",
        icon: Shield,
        benefits: [
          "UV protected",
          "Rain resistant",
          "Temperature stable",
          "Fade resistant",
        ],
      },
      {
        title: "Design Versatility",
        description:
          "Wide range of colors, finishes, and textures to match any design requirement.",
        icon: Palette,
        benefits: [
          "Metallic finishes",
          "Solid colors",
          "Brushed effects",
          "Custom printing",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Design & Visualization",
        description:
          "Creating detailed designs with color selection and 3D visualization of the final look.",
        icon: Lightbulb,
      },
      {
        step: "02",
        title: "Material Selection",
        description:
          "Choosing the right ACP grade, thickness, and finish based on application and budget.",
        icon: Package,
      },
      {
        step: "03",
        title: "Precision Cutting",
        description:
          "CNC cutting and routing of panels to exact specifications with clean edges.",
        icon: Settings,
      },
      {
        step: "04",
        title: "Fabrication & Forming",
        description:
          "Bending, folding, and shaping panels to create the designed structure.",
        icon: Hammer,
      },
      {
        step: "05",
        title: "Surface Treatment",
        description:
          "Applying graphics, vinyl, or additional protective coatings as required.",
        icon: Sparkles,
      },
      {
        step: "06",
        title: "Professional Installation",
        description:
          "Expert mounting with proper fixing systems and weather sealing.",
        icon: Wrench,
      },
    ],

    portfolio: [
      {
        title: "Retail Store Facade",
        description: "Modern grey ACP cladding with LED channel letters",
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
        specs: ["Brushed Silver", "LED Integrated", "Full Facade"],
      },
      {
        title: "Corporate Office Building",
        description: "Premium ACP panels with company branding",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        specs: ["Custom Color", "3D Letters", "Weather Sealed"],
      },
      {
        title: "Restaurant Chain Signage",
        description: "Vibrant red ACP with illuminated brand elements",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        specs: ["Glossy Red", "Night Glow", "Durable Finish"],
      },
    ],

    faqs: [
      {
        question: "What is ACP and why use it?",
        answer:
          "ACP (Aluminum Composite Panel) consists of two aluminum sheets bonded to a non-aluminum core. It's lightweight, durable, weather-resistant, and offers excellent aesthetics for modern signage.",
      },
      {
        question: "How long do ACP panels last?",
        answer:
          "Quality ACP panels can last 15-25 years with minimal maintenance. They resist fading, corrosion, and weather damage when properly installed.",
      },
      {
        question: "Can ACP be used outdoors?",
        answer:
          "Yes, ACP is ideal for outdoor use. It's designed to withstand harsh weather, UV exposure, rain, and temperature variations while maintaining its appearance.",
      },
      {
        question: "What colors and finishes are available?",
        answer:
          "We offer 50+ standard colors plus custom options. Finishes include solid colors, metallics, brushed effects, mirror finishes, and even wood grain textures.",
      },
    ],

    cta: {
      title: "Transform Your Facade with ACP",
      description:
        "Get a free design consultation and quote for your ACP cladding project. See your vision come to life with our premium materials and craftsmanship.",
      primaryButton: "Get Design Quote",
      secondaryButton: "View Colors",
    },
  },

  "installation-services": {
    title: "Installation Fixing",
    slug: "installation-missing",
    tagline: "Problem Solved, Excellence Restored",
    description:
      "Troubleshooting and completing incomplete or problematic signage installations. We fix what others couldn't and restore your signage to perfect condition.",
    icon: BadgeCheck,
    gradient: "from-pink-500 to-rose-500",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600",

    overview: {
      title: "Expert Problem Resolution",
      content:
        "When signage installations go wrong, we make them right. Our troubleshooting experts have seen it all and fixed it all. From incomplete installations to structural issues, we provide comprehensive solutions that restore functionality and aesthetics.",
      stats: [
        { value: "300+", label: "Problems Fixed", icon: CheckCircle },
        { value: "98%", label: "Success Rate", icon: TrendingUp },
        { value: "48hr", label: "Response Time", icon: Clock },
        { value: "100%", label: "Satisfaction", icon: Star },
      ],
    },

    features: [
      {
        title: "Diagnostic Assessment",
        description:
          "Thorough evaluation of existing installation to identify all issues and required corrections.",
        icon: Target,
        benefits: [
          "Complete inspection",
          "Issue documentation",
          "Solution planning",
          "Cost estimation",
        ],
      },
      {
        title: "Structural Correction",
        description:
          "Fixing mounting problems, reinforcing weak points, and ensuring proper load distribution.",
        icon: Shield,
        benefits: [
          "Mount reinforcement",
          "Alignment correction",
          "Stability enhancement",
          "Safety compliance",
        ],
      },
      {
        title: "Electrical Repairs",
        description:
          "Resolving wiring issues, connection problems, and ensuring proper illumination.",
        icon: Zap,
        benefits: [
          "Wiring fixes",
          "Connection repair",
          "Component replacement",
          "System testing",
        ],
      },
      {
        title: "Quality Restoration",
        description:
          "Bringing signage back to perfect condition with professional finishing and detailing.",
        icon: Sparkles,
        benefits: [
          "Surface restoration",
          "Cosmetic fixes",
          "Weather sealing",
          "Final polish",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Emergency Response",
        description:
          "Quick site visit to assess the situation and provide immediate safety measures if needed.",
        icon: Clock,
      },
      {
        step: "02",
        title: "Detailed Inspection",
        description:
          "Comprehensive analysis of all issues including structural, electrical, and aesthetic problems.",
        icon: Target,
      },
      {
        step: "03",
        title: "Solution Design",
        description:
          "Creating a detailed plan to address all issues with timeline and cost breakdown.",
        icon: Lightbulb,
      },
      {
        step: "04",
        title: "Corrective Work",
        description:
          "Implementing fixes with proper tools, materials, and expertise.",
        icon: Wrench,
      },
      {
        step: "05",
        title: "Quality Testing",
        description:
          "Thorough testing of all systems and structural integrity verification.",
        icon: FileCheck,
      },
      {
        step: "06",
        title: "Final Certification",
        description:
          "Providing warranty and certification that installation meets all standards.",
        icon: BadgeCheck,
      },
    ],

    portfolio: [
      {
        title: "Shopping Mall Pylon Repair",
        description: "Fixed leaning structure and restored LED functionality",
        image:
          "https://images.unsplash.com/photo-1582554833764-e5df77e4daba?w=800",
        specs: ["Structural Fix", "LED Repair", "Safety Certified"],
      },
      {
        title: "Hotel Signage Restoration",
        description: "Completed abandoned installation and fixed electrical",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        specs: ["Completion Work", "Wiring Fixed", "Quality Assured"],
      },
      {
        title: "Retail Chain Corrections",
        description: "Fixed mounting issues across 20 locations",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        specs: ["Multi-location", "Quick Fix", "Uniform Standard"],
      },
    ],

    faqs: [
      {
        question: "What types of problems can you fix?",
        answer:
          "We handle all types of installation issues including structural problems, electrical failures, mounting issues, alignment problems, weather damage, and incomplete installations.",
      },
      {
        question: "How quickly can you respond?",
        answer:
          "For emergency situations, we can have a team on-site within 48 hours. Routine corrections are scheduled within a week. We understand time-sensitive nature of signage issues.",
      },
      {
        question: "Do you provide warranty on fixes?",
        answer:
          "Yes, all our correction work comes with a comprehensive warranty covering both workmanship and materials. We stand behind our problem-solving expertise.",
      },
      {
        question: "Can you work with any signage brand?",
        answer:
          "Absolutely. We have experience with all major signage manufacturers and can work on any type of signage regardless of who originally installed it.",
      },
    ],

    cta: {
      title: "Have Installation Problems?",
      description:
        "Get expert help to fix your signage issues. Our troubleshooting team provides fast, reliable solutions with guaranteed results.",
      primaryButton: "Request Emergency Help",
      secondaryButton: "Schedule Inspection",
    },
  },
};

export default servicesData;
