interface Props {
  color?: string;
  height?: number;
  width?: number;
  rotation?: number;
}

const Arrow = (props: Props) => {
  const { color, height, width, rotation } = props;

  const currentHeight = height || "43";
  const currentWidth = width || "50";
  const currentColor = color || "none";
  const currentRotation = rotation ? `rotate(${rotation})` : "";

  return (
    <div>
      <svg
        width={currentHeight}
        height={currentWidth}
        viewBox={`0 0 ${currentHeight} ${currentWidth}`}
        fill={currentColor}
        transform={currentRotation}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Arrow"
          d="M42 23.268C43.3333 24.0378 43.3333 25.9623 42 26.7321L3 49.2487C1.66666 50.0185 0 49.0563 0 47.5167L0 2.48334C0 0.943735 1.66667 -0.0185121 3 0.751288L42 23.268Z"
        />
      </svg>
    </div>
  );
};

export default Arrow;
