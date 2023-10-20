import DOMPurify from "dompurify";

export const emitCurrentPath = (properties) => {
  properties.passCurrentPath(properties.currentPath);
};

export const convertToCleanHtml = (property) => {
  const clean = DOMPurify.sanitize(property, { ADD_ATTR: ['target'] });
  return { __html: clean };
};
