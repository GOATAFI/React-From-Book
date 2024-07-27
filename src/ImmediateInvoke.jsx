export default function ImmediateInvoke() {
  return (
    <div>
      {(() => (
        <h1>The header</h1>
      ))()}
    </div>
  );
}
