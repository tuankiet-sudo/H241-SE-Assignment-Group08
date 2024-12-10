const buttonPrintList =document.querySelectorAll(".button-print");
buttonPrintList.forEach(buttonPrint => {
    buttonPrint.addEventListener("click",() => {
        Swal.fire({
            title: "Bạn chắc chắn muốn in chứ",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "In",
            cancelButtonText: "Không"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Đã đưa vào danh sách chờ.",
                text: "Tài liệu của bạn đang được in.",
                icon: "success"
              });
            }
          });
    })
})
