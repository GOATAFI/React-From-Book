import Farm from "./Farm";

export default function Farms() {
  return (
    <div>
      <Farm farmer="Nahid" animal={["cow", "goat"]} />
      <Farm farmer="Mafi" animal={["sheep", "camel"]} />
    </div>
  );
}
