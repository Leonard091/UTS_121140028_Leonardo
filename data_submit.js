document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const pendaftaranTableBody = document.getElementById('pendaftaranTable').getElementsByTagName('tbody')[0];
  
    if (params.has('nama')) {
      const nama = params.get('nama');
      const nim = params.get('nim');
      const prodi = params.get('prodi');
      const email = params.get('email');
      const gender = params.get('gender');
      const tanggalLahir = params.get('tanggalLahir');
      const alamat = params.get('alamat');
  
      const newRow = pendaftaranTableBody.insertRow();
      newRow.insertCell().textContent = nama;
      newRow.insertCell().textContent = nim;
      newRow.insertCell().textContent = prodi;
      newRow.insertCell().textContent = email;
      newRow.insertCell().textContent = gender;
      newRow.insertCell().textContent = tanggalLahir;
      newRow.insertCell().textContent = alamat;
    }
  });
  