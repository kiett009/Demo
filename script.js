function tinhVuong() {
  const a = parseFloat(document.getElementById("a_vuong").value);
  const u = document.getElementById("unit_vuong").value;
  if (a > 0) {
    const cv = 4 * a;
    const dt = a * a;
    document.getElementById(
      "kq_vuong"
    ).innerHTML = `Chu vi: ${cv} ${u}<br>Diện tích: ${dt} ${u}²`;
  } else {
    document.getElementById("kq_vuong").innerText =
      "Vui lòng nhập cạnh hợp lệ!";
  }
}

function tinhChuNhat() {
  const d = parseFloat(document.getElementById("dai").value);
  const r = parseFloat(document.getElementById("rong").value);
  const u = document.getElementById("unit_chunhat").value;
  if (d > 0 && r > 0) {
    const cv = 2 * (d + r);
    const dt = d * r;
    document.getElementById(
      "kq_chunhat"
    ).innerHTML = `Chu vi: ${cv} ${u}<br>Diện tích: ${dt} ${u}²`;
  } else {
    document.getElementById("kq_chunhat").innerText =
      "Vui lòng nhập đủ chiều dài và chiều rộng!";
  }
}

function tinhTron() {
  const r = parseFloat(document.getElementById("r").value);
  const u = document.getElementById("unit_tron").value;
  if (r > 0) {
    const cv = 2 * Math.PI * r;
    const dt = Math.PI * r * r;
    document.getElementById("kq_tron").innerHTML = `Chu vi: ${cv.toFixed(
      2
    )} ${u}<br>Diện tích: ${dt.toFixed(2)} ${u}²`;
  } else {
    document.getElementById("kq_tron").innerText =
      "Vui lòng nhập bán kính hợp lệ!";
  }
}

function tinhThang() {
  const a = parseFloat(document.getElementById("daylon").value);
  const b = parseFloat(document.getElementById("daybe").value);
  const h = parseFloat(document.getElementById("cao").value);
  const c1 = parseFloat(document.getElementById("canh1").value);
  const c2 = parseFloat(document.getElementById("canh2").value);
  const u = document.getElementById("unit_thang").value;

  if (a > 0 && b > 0 && h > 0 && c1 > 0 && c2 > 0) {
    const cv = a + b + c1 + c2;
    const dt = ((a + b) * h) / 2;
    document.getElementById(
      "kq_thang"
    ).innerHTML = `Chu vi: ${cv} ${u}<br>Diện tích: ${dt} ${u}²`;
  } else {
    document.getElementById("kq_thang").innerText =
      "Vui lòng nhập đầy đủ dữ liệu!";
  }
}

// Reset functions
function resetVuong() {
  document.getElementById("a_vuong").value = "";
  document.getElementById("kq_vuong").innerHTML = "";
}

function resetChuNhat() {
  document.getElementById("dai").value = "";
  document.getElementById("rong").value = "";
  document.getElementById("kq_chunhat").innerHTML = "";
}

function resetTron() {
  document.getElementById("r").value = "";
  document.getElementById("kq_tron").innerHTML = "";
}

function resetThang() {
  document.getElementById("daylon").value = "";
  document.getElementById("daybe").value = "";
  document.getElementById("cao").value = "";
  document.getElementById("canh1").value = "";
  document.getElementById("canh2").value = "";
  document.getElementById("kq_thang").innerHTML = "";
}

function showForm(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}


