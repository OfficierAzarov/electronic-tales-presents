import DOMPurify from "dompurify";

export const emitCurrentPath = (properties) => {
  properties.passCurrentPath(properties.location.pathname);
};

export const convertToCleanHtml = (property) => {
  const clean = DOMPurify.sanitize(property);
  return { __html: clean };
};

// export const goUp = (callback) => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   setTimeout(callback, 500);
// };

// export const adaptDisplay = () => {
//   if (document.body.scrollTop === 0) {
//     if (window.innerHeight < 800) {
//       window.addEventListener("scroll", this.pop);
//     } else {
//       this.setState({ isShown: true });
//     }
//   }
// };

// export const bip = () => {
//   console.log("biiiip");
// };
