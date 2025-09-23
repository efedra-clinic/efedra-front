interface ContraindicationItemProps {
  item: string;
  variant: "beige" | "blue";
}

export default function ContraindicationItem({
  item,
  variant,
}: ContraindicationItemProps) {
  return (
    <li
      className={`flex gap-4 items-center h-full py-4.5 px-6 border rounded-full ${variant === "blue" ? "border-blue" : "border-beige"}`}
    >
      <div
        className={`size-2.5 rounded-full shrink-0 ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
      ></div>
      <p>{item}</p>
    </li>
  );
}
