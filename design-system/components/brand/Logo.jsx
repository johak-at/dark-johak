import React from "react";

/**
 * JO.HAK Logo — renders the official lockups from /assets/logos.
 * `basePath` should point to the assets/logos directory relative to the host page.
 */
export function Logo({
  variant = "horizontal",  // horizontal | horizontalClaim | vertical | verticalClaim | signet | white
  basePath = "assets/logos",
  height = 48,
  alt = "JO.HAK Handelsakademie",
  style = {},
  ...rest
}) {
  const files = {
    horizontal: "johak-horizontal.svg",
    horizontalClaim: "johak-horizontal-claim.svg",
    vertical: "johak-vertical.svg",
    verticalClaim: "johak-vertical-claim.svg",
    signet: "johak-signet.svg",
    white: "johak-vertical-white.svg",
  };
  const src = `${basePath}/${files[variant] || files.horizontal}`;

  return (
    <img
      src={src}
      alt={alt}
      style={{ height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
