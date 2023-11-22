import { ImagePlaceholderIcon } from "Res/icons";

const SkeletonImg = ({
  width = "100%",
  animation,
  height = "100%",
  color = "#e5e7eb",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`relative r-2 flex center middle ${className} ${
        animation === false
          ? ""
          : animation === "pulse"
          ? "animate-pulse"
          : "animate-wave"
      }`}
      style={{ width, height, background: color, ...style }}
    >
      <ImagePlaceholderIcon
        style={{ width: "20%", height: "20%", opacity: 0.5 }}
      />
    </div>
  );
};
export default SkeletonImg;
