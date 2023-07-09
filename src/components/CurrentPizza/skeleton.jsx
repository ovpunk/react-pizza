import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={465}
    viewBox="0 0 260 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="128" cy="132" r="125" />
    <rect x="215" y="411" rx="0" ry="0" width="0" height="10" />
    <rect x="5" y="264" rx="0" ry="0" width="0" height="4" />
    <rect x="36" y="289" rx="0" ry="0" width="50" height="0" />
    <rect x="62" y="303" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="278" rx="10" ry="10" width="260" height="20" />
    <rect x="-1" y="317" rx="10" ry="10" width="260" height="88" />
    <rect x="1" y="421" rx="10" ry="10" width="95" height="30" />
    <rect x="116" y="416" rx="20" ry="20" width="140" height="39" />
  </ContentLoader>
);

//export default Skeleton;
