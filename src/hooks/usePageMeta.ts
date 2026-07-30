import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

const ensureMetaTag = (name: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  return element;
};

export const usePageMeta = ({ title, description }: PageMetaOptions) => {
  useEffect(() => {
    document.title = title;
    ensureMetaTag("description").content = description;
  }, [description, title]);
};
