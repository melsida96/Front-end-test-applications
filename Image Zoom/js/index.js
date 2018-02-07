function showImage() {
    if (this.files && this.files[0]) {
        var obj = new FileReader();
        obj.onload = function (data) {
            var img = document.getElementById("image");
            img.src = data.target.result;
            img.style.display = "block";
        }
        obj.readAsDataURL(this.files[0]);
    }
}

function bodyLoad() {
    document.getElementById("image").onclick = function () {
        document.getElementById('image').width = 500;
    }
}
  function upload() {
    document.getElementById("hidbtn").click();

  }


