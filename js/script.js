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

  function hitungKeliling() {
    const a = document.getElementById("sisi-a").value;
    const b = document.getElementById("sisi-b").value;
    const c = document.getElementById("sisi-c").value;

    var detailRumusKeliling = document.getElementById("detailRumusKeliling");
    
    var detail = '';

    const keliling = (parseInt(a) + parseInt(b) + parseInt(c));

    detail += '<p>L = S1 x S2 x S3</p>';
    detail += '<p>L = '+a+' + '+b+' + '+c+'</p>';
    detail += '<p>L = '+keliling+'</p>';
    
    detailRumusKeliling.append(detail);
  

  }

  function resetKeliling() {
    document.getElementById("sisi-a").value = '';
    document.getElementById("sisi-b").value = '';
    document.getElementById("sisi-c").value = '';

    var detailRumus = document.getElementById("detailRumusKeliling");
    detailRumus.reset();

  }