function hitungLuas() {
    const alas = document.getElementById("luas-alas").value;
    const tinggi = document.getElementById("luas-tinggi").value;
    var detailRumus = document.getElementById("detailRumus");
    
    var detail = '';

    const luas = (alas * tinggi)/2;

    detail += '<p>L = 1/2 x a x t</p>';
    detail += '<p>L = 1/2 x '+alas+' x '+tinggi+'</p>';
    detail += '<p>L = '+luas+'</p>';
    
    detailRumus.append(detail);
    console.log(alas);
    console.log(tinggi);

  }

  function resetLuas() {
    document.getElementById("luas-alas").value = '';
    document.getElementById("luas-tinggi").value = '';

    var detailRumus = document.getElementById("detailRumus");
    detailRumus.append('');



  }