import DOMPurify from "dompurify";

export const emitCurrentPath = (properties) => {
  properties.passCurrentPath(properties.location.pathname);
};

export const convertToCleanHtml = (property) => {
  const clean = DOMPurify.sanitize(property);
  return { __html: clean };
};
