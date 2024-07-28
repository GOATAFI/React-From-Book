export default function Farm({ farmer, animal }) {
  let farmErPoshu = [];
  if (animal) {
    farmErPoshu = animal.map((poshu, index) => {
      return <p key={index}> {poshu}</p>;
    });
  }
  return (
    <div>
      <h2>{farmer} has a Farm</h2>
      {farmErPoshu}
    </div>
  );
}
