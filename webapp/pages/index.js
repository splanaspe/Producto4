const PANEL_CONTAINER = 'panel-container'

window.getAllPanels().then((res) => res.json()).then(({ data }) => {
    console.log(data.allPaneles);

    data.allPaneles.forEach((panelData) => {
        const panelElement = document.createElement('div');
        panelElement.classList.add('col-sm-3');

        panelElement.innerHTML = `
        <div class=" ">
            <div class="card">
            <img src="./../assets/img/2356194.jpg" class="card-img-top" alt="...">
            <div class="card-body">

                <h5 class="card-title"><b>${panelData.titulo}</b></h5>
                <p class="card-text">${panelData.descripcion}</p>
                <a class="btn btn-primary" href="/pages/Interfaz3.html?id=${panelData._id}" >Entrar al panel </a>

                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                Eliminar</button>

                <!-- Modal -->
                <!-- modifiqué el id en el segundo modal... staticBackDrop2, en el caso contrario, iba al modal 1 y es error-->
                <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                        <p>Si no desea más este panel pulse "Eliminar" <br> en caso contrario "Cerrar"</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick="(function(){
                                window.ioAPI.deletePanel('${panelData._id}');

                                location.reload();
                            })();"
                        >
                            Eliminar
                        </button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
        `

        document.getElementById(PANEL_CONTAINER).append(panelElement)
    })
})
