import { Bot, Mail, Phone, FileText, Database, Workflow, BrainCircuit, Share2 } from 'lucide-react';

export const IMAGES = {
  LOGO: 'https://imagekit.io/public/share/aiAuto/a7665f3c489e24925571c83dc57245cb19a714c9dfd762dff74ec6659e91ad9c895ae70e6794aa55f1cff2a431aff74f97bd5c8714279306f60538e4f6350ef24e57b0480b735760879f3d57d8327a16',
  IMAGE_1: 'https://imagekit.io/public/share/aiAuto/a7665f3c489e24925571c83dc57245cb19a714c9dfd762dff74ec6659e91ad9c893e6bf383bd763355b707e8e493d5d757e5999bf881419e54b9686a8b3641babbd06f960af33d4d2e6417bc5ff81aa4',
  IMAGE_2: 'https://imagekit.io/public/share/aiAuto/a7665f3c489e24925571c83dc57245cb19a714c9dfd762dff74ec6659e91ad9c326b6f5a1f9db7693a05db11ea5ac4d227334e9650d53e486479705a21d4f6129646e5c751cff6b02b525fee15a64f07',
  // Fallback AI-themed images from Unsplash
  ROBOT_BG: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
  AI_WORKFLOW: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  TECH_PATTERN: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2'
};

export const SERVICES = [
  {
    icon: Bot,
    title: 'AI Voice Agent Solutions',
    description: 'Intelligent receptionists handling appointments, lead qualification, and real estate inquiries 24/7.',
    features: [
      'AI Receptionists for seamless customer interactions',
      'Lead Qualification across multiple sectors',
      'Real Estate Solutions for listings and maintenance'
    ]
  },
  {
    icon: FileText,
    title: 'Custom Text Agents',
    description: 'Smart AI agents that handle your communication needs through a user-friendly ChatGPT-like interface.',
    features: [
      'Automated Email Management',
      'Rapid Document Generation',
      'Airtable Database Integration'
    ]
  },
  {
    icon: Share2,
    title: 'Social Media Agents',
    description: 'AI-powered content creation and social media management that keeps your brand active and engaging.',
    features: [
      'Content Research and Creation',
      'Trend Analysis and Topic Suggestions',
      'Automated Post Scheduling'
    ]
  },
  {
    icon: Workflow,
    title: 'Automation Solutions',
    description: 'Streamline your operations with powerful automation tools that eliminate repetitive tasks.',
    features: [
      'Task and Workflow Automation',
      'Cross-platform Data Synchronization',
      'OCR and Document Processing'
    ]
  }
];

export const TECH_STACK = {
  DATABASE: ['Airtable', 'Supabase'],
  AUTOMATIONS: ['Make', 'n8n'],
  CRM: ['GoHighLevel'],
  CMS: ['Sanity'],
  AI_PHONE: ['Vapi', 'Retell.ai'],
  LLM: ['OpenAI', 'Claude', 'Mistral', 'Ollama', 'GLIF'],
  LIBRARIES: ['Langchain', 'Langraph', 'Langsmith', 'Chainlit']
};

export const CONTACT_INFO = {
  EMAIL: 'ContactUs@aiautomationsunstoppable.com',
  PHONE: '716-260-6436',
  SOCIAL: {
    INSTAGRAM: {
      handle: 'ai_automations_716',
      url: 'https://instagram.com/ai_automations_716'
    },
    TIKTOK: {
      handle: '@automationsunstoppable',
      url: 'https://tiktok.com/@automationsunstoppable'
    },
    FACEBOOK: {
      handle: 'affiliatesanon',
      url: 'https://facebook.com/affiliatesanon'
    },
    YOUTUBE: {
      handle: '@AI_automationsunstoppable',
      url: 'https://youtube.com/@AI_automationsunstoppable'
    }
  }
};
