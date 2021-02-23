function loadComp(data){
    let content = document.getElementById("data")
    content.innerHTML = `
    <h1 class="display-4">Lista de productos</h1>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
        </tr>
        </thead>
        <tbody id="data-list">
        </tbody>
    </table>`
    let dataList = document.getElementById("data-list")
    data.forEach((prod) => {
        let tr = document.createElement('tr')
        tr.innerHTML =  `<th scope="row">${prod.id}</th>
                <td>${ prod.title }</td>
                <td>$${ prod.price }</td>
                <td><img src="${ prod.thumbnail }" class="img-fluid"/></td>`
        dataList.appendChild(tr)
    })
}

window.onload = () => {
    const socket = io();
    socket.on('data', data => {
        loadComp(data)
        socket.emit('data', 'ok')
    })
};