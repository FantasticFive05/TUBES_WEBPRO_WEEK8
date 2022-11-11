var selectedRow = null;

// Alert
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Mengosongkan inputan
function clearFields(){
    document.querySelector("#nama").value = "";
    document.querySelector("#tempat").value = "";
    document.querySelector("#kota").value = "";
}

// Tambah data
document.querySelector("#customer-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Ambil value
    const nama = document.querySelector("#nama").value;
    const tempat = document.querySelector("#tempat").value;
    const kota = document.querySelector("#kota").value;

    // Validasi
    if(nama == "" || tempat == "" || kota == ""){
        showAlert("Silahkan isi semua informasi di bawah", "danger");
    }else if(!(nama.match(/^[a-zA-Z ]*$/)) || !(tempat.match(/^[a-zA-Z ]*$/)) || !(kota.match(/^[a-zA-Z ]*$/))){
        showAlert("Silahkan masukkan informasi yang benar", "danger");
    }else{
        if(selectedRow == null){
            const list = document.querySelector("#customer-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${nama}</td>
                <td>${tempat}</td>
                <td>${kota}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Informasi ditambahkan", "success");
        }else{
            selectedRow.children[0].textContent = nama;
            selectedRow.children[1].textContent = tempat;
            selectedRow.children[2].textContent = kota;
            selectedRow = null;
            showAlert("Informasi berhasil di edit", "info")
        }

        clearFields();
    }
});

// Edit data
document.querySelector("#customer-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#nama").value = selectedRow.children[0].textContent;
        document.querySelector("#tempat").value = selectedRow.children[1].textContent;
        document.querySelector("#kota").value = selectedRow.children[2].textContent;
    }
});

// Hapus data
document.querySelector("#customer-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Data dihapus", "danger");
    }
});