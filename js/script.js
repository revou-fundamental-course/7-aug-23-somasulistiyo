
function hitungLuas() {
    var alas = $('#luas-alas').val();
    var tinggi = $('#luas-tinggi').val();;
    var detailRumus = document.getElementById("detailRumus");

    if(alas === '' || alas === null)
    {
      alert('Nilai alas tidak boleh kosong!')
    }
    else if(tinggi === '' || tinggi === null)
    {
      alert('Nilai tinggi tidak boleh kosong!')
    }
    else {
    const luas = (alas * tinggi)/2;

    const p = document.createElement('p');
    p.innerText += 'L = 1/2 x a x t';
    p.innerText += '\n L = 1/2 x '+alas+' x '+tinggi+'';
    
    const b = document.createElement('b');
    b.innerText += 'L = '+luas+'';
    
    detailRumus.append(p);
    detailRumus.append(b);
    }

  }

  function resetLuas() {
    document.getElementById("luas-alas").value = '';
    document.getElementById("luas-tinggi").value = '';

    $('#detailRumus').empty();

  }

  function hitungKeliling() {
    const a = $('#sisi-a').val();
    const b = $('#sisi-b').val();
    const c = $('#sisi-c').val();

    var detailRumusKeliling = document.getElementById("detailRumusKeliling");

    if(a === '' || a === null)
    {
      alert('Nilai Sisi A tidak boleh kosong!')
    }
    else if(b === '' || b === null)
    {
      alert('Nilai Sisi B tidak boleh kosong!')
    }
    else if(c === '' || c === null)
    {
      alert('Nilai Sisi C tidak boleh kosong!')
    }
    else {
      const keliling = (parseInt(a) + parseInt(b) + parseInt(c));
  
      const p = document.createElement('p');
      p.innerText += 'K = S1 + S2 + S3';
      p.innerText += '\n K = '+a+' + '+b+' + '+c+'';
      
      const bold = document.createElement('b');
      bold.innerText += 'K = '+keliling+'';
    
      detailRumusKeliling.append(p);
      detailRumusKeliling.append(bold);
      
    }
  

  }

  function resetKeliling() {
    document.getElementById("sisi-a").value = '';
    document.getElementById("sisi-b").value = '';
    document.getElementById("sisi-c").value = '';

    $('#detailRumusKeliling').empty();
  }

