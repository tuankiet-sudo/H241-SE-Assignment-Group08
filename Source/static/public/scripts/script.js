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
              }).then(() => {
                // Redirect to another page after the success message
                window.location.href = '/printDocument1'; // Replace '/new-address' with the actual URL you want to redirect to
            });
            }
          });
    })
})

const buttonPrintLis =document.querySelectorAll(".button-cancel");
buttonPrintLis.forEach(buttonPrint => {
    buttonPrint.addEventListener("click",() => {
        Swal.fire({
            title: "Bạn chắc chắn muốn hủy yêu cầu in chứ",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Hủy yêu cầu",
            cancelButtonText: "Không"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Đã hủy yêu cầu in.",
                text: "Yêu cầu in của bạn đã được hủy.",
                icon: "success"
              }).then(() => {
                // Redirect to another page after the success message
                window.location.href = '/showRequestQueue1'; // Replace '/new-address' with the actual URL you want to redirect to
            });
            }
          });
    })
})
