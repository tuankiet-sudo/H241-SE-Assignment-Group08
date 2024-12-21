const select =document.getElementById('dropdown-list')
select.addEventListener('change', () => {
    select.blur();
});
const show_History = function (){
    const create_Record = function() {
    const result = document.getElementById('result-table');
    const record = document.createElement('div');
    record.classList.add('record');
    const file_img = document.createElement('img');
    file_img.classList.add('file-img');
    file_img.src = "../images/file.svg";
    const information_wrapper = document.createElement('div');
    const information1 = document.createElement('div');
    const information2 = document.createElement('div');
    information_wrapper.classList.add('record-information-wrapper');
    information1.classList.add('record-information');
    information1.style.marginTop = '10px';
    information2.classList.add('record-information');
    information1.innerHTML += '<h2>test.docx</h2>';
    information1.innerHTML += '<h2>Thời gian:</h2>';
    information2.innerHTML += '<h2>Máy in: 1</h2>';
    information2.innerHTML += '<h2>Số lượng:</h2>';
    information_wrapper.append(information1, information2);
    record.append(file_img, information_wrapper);
    result.append(record);
    }
    const result = document.getElementById('result-table');
    result.replaceChildren();
    for(let i=0; i < 5;++i){
        create_Record();
    }
}
const displayStudentQuery = function(){
    const option_container = document.getElementById('option-container');
    option_container.style.display = 'none';
    const history_section = document.getElementById("history-section");
    history_section.style.display = 'block';
    const input_information = document.getElementById("input-information");
    input_information.style.marginRight = '80px';
    const result = document.getElementById('result');
    result.style.display= 'block';
}
const displayPrinterQuery = function(){
    const option_container = document.getElementById('option-container');
    option_container.style.display = 'none';
    const history_section = document.getElementById("history-section");
    history_section.style.display = 'block';
    const input_mssv_wrapper = document.getElementById('input-mssv-wrapper');
    input_mssv_wrapper.style.display = 'none';
    const select_wrapper = document.getElementById('select-wrapper');
    select_wrapper.style.display= 'block';
    const result = document.getElementById('result');
    result.style.display= 'block';
    
}
const search_btn = document.getElementById("search-btn");
search_btn.addEventListener("click", show_History);
const student_query= document.getElementById('student_query');
student_query.addEventListener("click", displayStudentQuery);
const printer_query= document.getElementById('printer_query');
printer_query.addEventListener("click", displayPrinterQuery);
