interface CardPropsIface {
  icon: string;
  category: string;
  score: number;
  color: string;
  bgCol: string;
}

export default function Card({
  icon,
  category,
  score,
  color,
  bgCol,
}: CardPropsIface) {
  return (
    <div
      className="flex justify-between items-center p-4 rounded-lg"
      style={{ backgroundColor: bgCol, color }}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt="" />
        <p
          style={{
            color,
          }}
        >
          {category}
        </p>
      </div>

      <p>
        <span> {score}</span>/100
      </p>
    </div>
  );
}
