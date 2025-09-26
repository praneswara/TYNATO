// src/data/servicesData.js
const servicesData = {
  web: {
    title: "Website Development",
    sections: [
      {
        title: "Responsive UI/UX Design",
        content:
          "We build fully responsive websites that work seamlessly on all devices, ensuring smooth navigation, modern UI components, and optimized performance for an engaging user experience.",
        image: "/images/responsive.png",
      },
      {
        title: "Content Management & SEO",
        content:
          "Our CMS solutions make it easy to update and manage content without technical skills. With integrated SEO strategies, your site will rank higher and reach the right audience.",
        image: "/images/SEO.jpg",
      },
      {
        title: "Custom Solutions & Integrations",
        content:
          "From startups to enterprises, we provide custom website solutions with integration of modern tech stacks, e-commerce platforms, and third-party APIs for scalability and growth.",
        image: "/images/custom.jpg",
      },
    ],
    bannerImage: "/images/WB.jpg", // main top image
  },

  mobile: {
    title: "Mobile Application Development",
    sections: [
      {
        title: "Cross-Platform Apps",
        content:
          "We deliver apps for both iOS and Android using modern frameworks. Our apps are optimized for performance, scalability, and engaging user experiences.",
        image: "/images/mobile1.png",
      },
      {
        title: "User Authentication & Security",
        content:
          "Security is our priority. We implement secure login, push notifications, and real-time updates while ensuring smooth performance.",
        image: "/images/mobile2.png",
      },
      {
        title: "Deployment & Maintenance",
        content:
          "We don’t stop at launch. From publishing apps on stores to ongoing maintenance, updates, and optimization, we support your app lifecycle.",
        image: "/images/mobile3.png",
      },
    ],
    bannerImage: "/images/MBD.png",
  },

  ai: {
    title: "AI Solutions",
    sections: [
      {
        title: "Predictive Analytics",
        content:
          "Harness AI to analyze trends and predict future outcomes. We help businesses make smarter, data-driven decisions with predictive modeling.",
        image: "/images/ai1.png",
      },
      {
        title: "Natural Language Processing",
        content:
          "From chatbots to sentiment analysis, our NLP models allow businesses to automate communication and understand customer intent better.",
        image: "/images/ai2.png",
      },
      {
        title: "AI-driven Insights",
        content:
          "We turn raw data into actionable insights through dashboards, ML algorithms, and automation, enabling businesses to save time and increase efficiency.",
        image: "/images/ai3.png",
      },
    ],
    bannerImage: "/images/AI.png",
  },

  digital: {
    title: "Digital Marketing",
    sections: [
      {
        title: "Search & Social Campaigns",
        content:
          "Boost your online presence with SEO, SEM, and targeted social media campaigns that drive traffic and engagement.",
        image: "/images/digital1.jpg",
      },
      {
        title: "Email Automation & Analytics",
        content:
          "We craft personalized campaigns and measure performance with real-time analytics to ensure better ROI.",
        image: "/images/digital2.jpg",
      },
      {
        title: "Content Strategy",
        content:
          "Our team builds tailored content strategies with blogs, graphics, and ads that connect with your audience.",
        image: "/images/digital3.jpg",
      },
    ],
    bannerImage: "/images/dim.jpg",
  },

  cybersecurity: {
    title: "Cybersecurity Solutions",
    sections: [
      {
        title: "Threat Detection",
        content:
          "Stay protected with 24/7 monitoring and detection systems designed to identify and neutralize threats quickly.",
        image: "/images/cyber1.png",
      },
      {
        title: "Penetration Testing",
        content:
          "We perform deep security assessments to identify vulnerabilities in your applications and infrastructure.",
        image: "/images/cyber2.png",
      },
      {
        title: "Compliance & Risk Management",
        content:
          "Ensure your organization complies with industry standards while minimizing security risks.",
        image: "/images/cyber3.png",
      },
    ],
    bannerImage: "/images/CS.png",
  },

  cloud: {
    title: "Cloud Computing Solutions",
    sections: [
      {
        title: "Cloud Migration",
        content:
          "Migrate existing workloads to AWS, Azure, or GCP with zero downtime, ensuring scalability and performance.",
        image: "/images/cloud1.png",
      },
      {
        title: "Serverless Architecture",
        content:
          "Cut costs with serverless solutions and Infrastructure as Code (IaC) for efficient deployments.",
        image: "/images/cloud2.png",
      },
      {
        title: "Scalable Cloud Apps",
        content:
          "We design cloud-native apps that grow with your business, offering reliability and flexibility.",
        image: "/images/cloud3.png",
      },
    ],
    bannerImage: "/images/CC.jpg",
  },

  // … repeat the same structure for ecommerce, iot, blockchain, software, uiux, devops
};

export default servicesData;
