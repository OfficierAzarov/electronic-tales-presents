import DOMPurify from "dompurify";

export const emitCurrentPath = (properties) => {
  properties.passCurrentPath(properties.location.pathname);
};

export const convertToHtml = (property) => {
  const clean = DOMPurify.sanitize(property);
  return { __html: clean };
};
