const panelId = /id=(.*)/.exec(window.location.search)[1]

const COLUMN_CLASS = 'columna'

const modalEdicionTarjeta = new bootstrap.Modal('#modal-edicion-tarjeta')
const modalEdicionTarjetaForm = document.getElementById('edicion-tarjeta-form')

const modalEdicionTarjetaTitleElement = document.getElementById('modal-edicion-tarjeta-title')
const modalEdicionTarjetaDescriptionElement = document.getElementById('modal-edicion-tarjeta-description')
const modalEdicionTarjetaModificarElement = document.getElementById('modal-edicion-tarjeta-modificar')


/**
 * Metodos de DRAG AND DROP
 * 
 *  */
function allowDrop(event) {
  event.preventDefault();
}

function handleDrag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function handleDrop(event) {
  if (!event.target.className?.includes(COLUMN_CLASS)) {
    return
  }

  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

/** Metodo crear targeta/carta */
const createCard = (title, description, previousId,columna) => {
  const id = previousId || new Date().getTime();

  if (!previousId) {
    console.log('./panelId', panelId)
    window.ioAPI.addTarea(id, {title, description, panelId,columna})
  }

  const card = document.createElement("div");
  const titleEl = document.createElement("h3");
  const descriptionEl = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const modifyBtn = document.createElement("button");

  titleEl.textContent = title;
  descriptionEl.textContent = description;

  //Boton Eliminar
  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn btn-danger btn_eliminar";
  deleteBtn.style = "";

  //Boton Modificar
  modifyBtn.textContent = "Modificar"
  modifyBtn.className = "btn btn-warning m-2"

  card.appendChild(titleEl);
  card.appendChild(descriptionEl);
  card.appendChild(deleteBtn);
  card.appendChild(modifyBtn);

  card.className += "container-fluid cardbody";
  card.id += id
  card.draggable += "true";
  card.ondragstart = (event) => handleDrag(event)

  deleteBtn.addEventListener("click", () => {
    if (!confirm("Quieres eliminar la tarjeta?")) {
      return
    }

    console.log('./window.ioAPI', window.ioAPI)
    window.ioAPI.deleteTarea(id)

    card.remove()
  });

  modifyBtn.addEventListener("click", () => {
    modalEdicionTarjetaTitleElement.value = title
    modalEdicionTarjetaDescriptionElement.value = description

    modalEdicionTarjetaModificarElement.onclick = () => {
      const formData = new FormData(modalEdicionTarjetaForm)
      console.log('./formData', formData, formData.get('file'))

      const titleInputValue = formData.get('title')
      const descriptionInputValue = formData.get('description')
      const fileInputValue = formData.get('file')

      titleEl.textContent = titleInputValue
      descriptionEl.textContent = descriptionInputValue

      window.ioAPI.modifyTarea(id, {
        title: titleInputValue,
        description: descriptionInputValue,
        fileName: fileInputValue.name,
      })

      window.ioAPI.uploadTareaFile(fileInputValue, fileInputValue.name)

      modalEdicionTarjeta.hide()
    }
    modalEdicionTarjeta.show()
  })

  return card;
}


/**
 * ? BTN- TODO
 */
{
const addBtnTODO = document.getElementById("btnAddCard1");

const addPanelModalTitleTODO = document.getElementById("recipient-title1");
const addPanelDescriptionTODO = document.getElementById("recipient-descrip1");
const cardContainerTODO = document.getElementById("card-container1");

addBtnTODO.addEventListener("click", (e) => {
  e.preventDefault();

  const title = addPanelModalTitleTODO.value;
  const description = addPanelDescriptionTODO.value;
  const columna = "TODO";

  if (title === "" || description === "") {
    return
  }

  const card = createCard(title, description,columna);
  cardContainerTODO.appendChild(card);
});
}

/**
 * ? BTN- DOING
 */
{
const addBtnDOING = document.getElementById("btnAddCard2");

const addPanelModalTitleDOING = document.getElementById("recipient-title2");
const addPanelDescriptionDOING = document.getElementById("recipient-descrip2");
const cardContainerDOING = document.getElementById("card-container2");

addBtnDOING.addEventListener("click", (e) => {
  e.preventDefault();

  const title = addPanelModalTitleDOING.value;
  const description = addPanelDescriptionDOING.value;
  const columna = "DOING";

  if (title === "" || description === "") {
    return
  }

  const card = createCard(title, description);
  cardContainerDOING.appendChild(card);
});
}

//CreacionSubelementosBox3
/**
 * ? BTN- DONE
 */
{
const addBtnDONE = document.getElementById("btnAddCard3");

const addPanelModalTitleDONE = document.getElementById("recipient-title3");
const addPanelDescriptionDONE = document.getElementById("recipient-descrip3");
const cardContainerDONE = document.getElementById("card-container3");


addBtnDONE.addEventListener("click", (e) => {
  e.preventDefault();

  const title = addPanelModalTitleDONE.value;
  const description = addPanelDescriptionDONE.value;
  const columna = "DONE";

  if (title === "" || description === "") {
    return
  }

  const card = createCard(title, description, columna);
  cardContainerDONE.appendChild(card);
});
}


/* ESTE ES EL ORIGINAL
const BOX1_CONTAINER = 'box1'
const BOX2_CONTAINER = 'box2'
const BOX3_CONTAINER = 'box3'

window.getAllTareas().then((res) => res.json()).then(({ data }) => {
  console.log('data.allTareas', data.allTareas);
  const cardContainerTODO = document.getElementById("card-container1");
  const cardContainerDOING = document.getElementById("card-container2");
  const cardContainerDONE = document.getElementById("card-container3");

  data.allTareas.filter(({ panelId: tareaPanelId }) => tareaPanelId === panelId).forEach((tareaData) => {
    console.log('./panel', tareaData)
    const tareaElement = createCard(tareaData.titulo, tareaData.descripcion, tareaData._id,tareaData.estado)

    if (tareaData.estado == 'DOING') {
      document.getElementById(BOX2_CONTAINER).append(tareaElement)
    } else if (tareaData.estado == 'DONE') {
      document.getElementById(BOX3_CONTAINER).append(tareaElement)
    } else {
      document.getElementById(BOX1_CONTAINER).append(tareaElement)
    }
  })
})
*/


// Este es el de prueba
window.getAllTareas().then((res) => res.json()).then(({ data }) => {
  console.log('data.allTareas', data.allTareas);
  const cardContainerTODO = document.getElementById("card-container1");
  const cardContainerDOING = document.getElementById("card-container2");
  const cardContainerDONE = document.getElementById("card-container3");

  data.allTareas.filter(({ panelId: tareaPanelId }) => tareaPanelId === panelId).forEach((tareaData) => {
    console.log('./panel', tareaData)
    const tareaElement = createCard(tareaData.titulo, tareaData.descripcion, tareaData._id,tareaData.columna)

    if (tareaData.columna == "DOING") {
      cardContainerDOING.appendChild(tareaElement)
    } else if (tareaData.columna == "DONE") {
      cardContainerDONE.appendChild(tareaElement)
    } else {
      cardContainerTODO.appendChild(tareaElement)
    }
  })
})

