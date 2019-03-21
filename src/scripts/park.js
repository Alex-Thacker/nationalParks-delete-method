const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article");
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  let deleteParkButton = buildElement("button", `delete-park--${parkObject.id}`, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};




const buildMonuments = monumentObject => {

    const monumentArticle = buildElement("article")
    monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

    let deleteMonumentButton = buildElement("button", `delete-${monumentObject.id}`, "Delete Monument")
    monumentArticle.appendChild(deleteMonumentButton)
    deleteMonumentButton.addEventListener("click", monumentDelete)
    return monumentArticle
}