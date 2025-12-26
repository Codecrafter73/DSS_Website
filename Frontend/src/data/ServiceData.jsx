
// services.js
import { Monitor, Zap, Fan, Calendar, Building, Navigation } from 'lucide-react';
import commercial from '../assets/services/1.jpg';
import dimensional from '../assets/services/2.jpg';
import led from '../assets/services/3.jpg';
import outdoor from '../assets/services/4.jpg';
import seasonal from '../assets/services/5.jpg';
import indor from '../assets/services/6.jpg';

const services = [
  {
    id: 0,
    slug: "outdoor-signage",
    title: "Outdoor Signage",
    description: "Weather-resistant outdoor signage solutions that maintain vibrant visibility and professional appeal in all environmental conditions.",
    icon: <Fan className="w-8 h-8" />,
    image: outdoor,
    color: "from-blue-500 to-purple-600",

    shortDescription: "Weather-resistant outdoor signage solutions that maintain vibrant visibility and professional appeal in all environmental conditions.",
    overview: "Dominate the outdoor landscape with our premium outdoor signage solutions engineered to withstand the harshest weather conditions while delivering maximum visual impact. We understand that outdoor signage faces unique challenges from UV rays, rain, wind, and temperature fluctuations, which is why our team specializes in creating robust, fade-resistant displays that maintain their brilliance year after year. From highway billboards to storefront displays, our outdoor solutions are designed to capture attention from great distances while building lasting brand recognition in high-traffic areas and competitive outdoor environments.",
    services: [
      { title: "Billboard Advertising", description: "Large-format displays for maximum roadway visibility and brand impact", features: ["Digital integration","High-resolution graphics","Strategic positioning","Traffic analytics"] },
      { title: "Pole Mounted Signs", description: "Elevated signage solutions for enhanced visibility and brand presence", features: ["Wind-resistant design","Foundation engineering","Height optimization","Multi-directional viewing"] },
      { title: "Storefront Displays", description: "Eye-catching outdoor displays that draw customers to your business", features: ["Weather protection","Brand consistency","Illumination options","Pedestrian appeal"] },
      { title: "Highway Signage", description: "High-speed visibility solutions for automotive traffic and travelers", features: ["Reflective materials","Large text sizing","Distance optimization","Safety compliance"] }
    ],
    process: [
      { step: 1, title: "Location Assessment", description: "We analyze traffic patterns and environmental factors for optimal placement" },
      { step: 2, title: "Weather Engineering", description: "Design signs with materials that resist UV, moisture, and wind damage" },
      { step: 3, title: "Structural Fabrication", description: "Build robust mounting systems and weather-sealed components" },
      { step: 4, title: "Installation & Monitoring", description: "Professional installation with ongoing weather performance monitoring" }
    ],
    benefits: [
      "Maximum weather resistance and longevity",
      "High-impact visibility from great distances",
      "24/7 brand exposure in high-traffic areas",
      "Cost-effective outdoor advertising solution",
      "Professional engineering for safety compliance",
      "Custom solutions for unique outdoor challenges"
    ]
  },
  {
    id: 1,
    slug: "indoor-signage",
    title: "Indoor Signage",
    description: "Sophisticated indoor signage solutions that enhance interior aesthetics while providing clear communication and brand reinforcement.",
    icon: <Building className="w-8 h-8" />,
    image: indor,
    color: "from-green-500 to-teal-600",

    shortDescription: "Sophisticated indoor signage solutions that enhance interior aesthetics while providing clear communication and brand reinforcement.",
    overview: "Transform your interior spaces into powerful brand experiences with our elegant indoor signage solutions that seamlessly blend form and function. Understanding that indoor environments require a delicate balance of aesthetics and practicality, our designs complement your interior architecture while delivering clear, impactful messaging. From corporate lobbies and retail spaces to healthcare facilities and educational institutions, our indoor signage enhances the visitor experience by providing intuitive navigation, reinforcing brand identity, and creating memorable touchpoints that reflect your organization's professionalism and attention to detail.",
    services: [
      { title: "Reception Area Displays", description: "Premium lobby signage that creates impressive first impressions for visitors", features: ["Luxury materials","Brand integration","Professional lighting","Modular updates"] },
      { title: "Directory Systems", description: "Comprehensive building directories for easy navigation and information access", features: ["Digital integration","Updateable content","ADA compliance","Multi-language support"] },
      { title: "Conference Room Signs", description: "Professional meeting room identification and scheduling displays", features: ["Room scheduling","Digital integration","Professional aesthetics","Easy updates"] },
      { title: "Retail Point-of-Sale", description: "Strategic indoor displays that enhance shopping experience and drive sales", features: ["Product highlighting","Promotional flexibility","Brand consistency","Customer guidance"] }
    ],
    process: [
      { step: 1, title: "Interior Analysis", description: "Assess lighting, traffic flow, and architectural elements for optimal integration" },
      { step: 2, title: "Design Harmonization", description: "Create designs that complement existing interior aesthetics and branding" },
      { step: 3, title: "Precision Manufacturing", description: "Craft signage with attention to interior quality standards and finishes" },
      { step: 4, title: "Seamless Installation", description: "Install with minimal disruption and perfect alignment to interior spaces" }
    ],
    benefits: [
      "Enhanced interior aesthetics and atmosphere",
      "Improved visitor navigation and experience",
      "Consistent brand messaging throughout facilities",
      "Low-maintenance indoor-optimized materials",
      "Flexible systems for changing requirements",
      "Professional appearance that builds confidence"
    ]
  },
  {
    id: 2,
    slug: "high-rise-signage",
    title: "High Rise Signage",
    description: "Specialized high-altitude signage solutions engineered for skyscrapers and tall buildings with maximum visibility impact.",
    icon: <Monitor className="w-8 h-8" />,
    image: commercial,
    color: "from-yellow-500 to-green-600",

    shortDescription: "Specialized high-altitude signage solutions engineered for skyscrapers and tall buildings with maximum visibility impact.",
    overview: "Reach new heights with our specialized high-rise signage solutions designed specifically for tall buildings and urban skylines. Understanding the unique engineering challenges of high-altitude installations, our team combines advanced structural engineering with cutting-edge design to create signage that's visible from miles away while withstanding extreme wind loads and weather conditions. These commanding displays not only establish your presence in the city skyline but also serve as iconic landmarks that reinforce brand recognition across vast metropolitan areas, making your business a memorable part of the urban landscape.",
    services: [
      { title: "Rooftop Installations", description: "Commanding rooftop displays that dominate city skylines and aerial views", features: ["Wind load engineering","Aircraft compliance","Structural mounting","LED illumination"] },
      { title: "Building Crown Signs", description: "Architectural signage that caps buildings with distinctive brand presence", features: ["Architectural integration","Custom fabrication","Lighting design","Engineering approval"] },
      { title: "Facade Letters", description: "Large-scale lettering systems for building sides and corporate headquarters", features: ["Dimensional construction","High-altitude installation","Weather sealing","Maintenance access"] },
      { title: "Tower Wraps", description: "Complete building wraps and tower graphics for maximum brand coverage", features: ["Vinyl application","Structural analysis","Building protection","Long-term durability"] }
    ],
    process: [
      { step: 1, title: "Engineering Assessment", description: "Structural analysis and wind load calculations for high-altitude installations" },
      { step: 2, title: "Aviation Compliance", description: "Ensure compliance with aviation regulations and building codes" },
      { step: 3, title: "High-Altitude Fabrication", description: "Manufacture components designed for extreme weather and wind conditions" },
      { step: 4, title: "Specialized Installation", description: "Expert high-rise installation using certified rigging and safety equipment" }
    ],
    benefits: [
      "Dominant visibility across entire metropolitan areas",
      "Landmark status for iconic brand recognition",
      "Engineering excellence for safety and durability",
      "Compliance with aviation and building regulations",
      "Professional high-altitude installation expertise",
      "Long-term investment in skyline presence"
    ]
  },
];

export default services;
