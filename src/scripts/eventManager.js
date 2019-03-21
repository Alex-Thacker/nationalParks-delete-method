const handleDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];

  deletePark(parkId)
  .then(() => listNationalParks())
};


const monumentDelete = () => {
  let monumentId = event.target.id.slice(7)
  console.log(event.target.id.slice(7))

  deleteMonument(monumentId)
  .then(() => listMonuments())

}