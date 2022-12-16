export interface Category {
  id: number;
  title: string;
  section: string;
  body: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  branding: string;
  service: string;
  value: string;
  body: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export interface Office {
  id: number;
  city: string;
  phone: string;
  email: string;
  address: string;
}

export interface Studio {
  id: number;
  city: string;
}

export interface Slide {
  title: string;
  subtitle: string;
  image: string;
}
