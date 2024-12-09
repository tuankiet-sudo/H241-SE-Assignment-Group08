from flask import *
import io
import datetime
from flask_cors import CORS

app = Flask(__name__, 
            static_folder="static",
            template_folder="templates"
            )

CORS(app)

@app.route('/', methods=['GET', 'POST'])
def main_page():
    return render_template('mainpage/homepage.html')

@app.route('/studentLogin', methods=['GET', 'POST'])
def student_login():
    return render_template('mainpage/studentLogin.html')

@app.route('/spsoLogin', methods=['GET', 'POST'])
def spso_login():
    return render_template('mainpage/spsoLogin.html')

@app.route('/spsoOption', methods=['GET', 'POST'])
def spso_option():
    return render_template('mainpage/spsoOption.html')

@app.route('/studentOption', methods=['GET', 'POST'])
def student_option():
    return render_template('mainpage/studentOption.html')

@app.route('/printRequest', methods=['GET', 'POST'])
def print_request():
    return render_template('printRequest/printRequest.html')

@app.route('/printRequestComplete', methods=['GET', 'POST'])
def print_requestComplete():
    return render_template('printRequest/printRequestComplete.html')

@app.route('/printDocument', methods=['GET', 'POST'])
def print_document():
    return render_template('printDocument/printDocument.html')

@app.route('/printDocument1', methods=['GET', 'POST'])
def print_document1():
    return render_template('printDocument/printDocument1.html')

@app.route('/studentHistoryResult', methods=['GET', 'POST'])
def student_historyResult():
    return render_template('showHistory/studentHistoryResult.html')

@app.route('/studentHistoryResult1', methods=['GET', 'POST'])
def student_historyResult1():
    return render_template('showHistory/studentHistoryResult1.html')

@app.route('/studentHistory', methods=['GET', 'POST'])
def student_history():
    return render_template('showHistory/studentHistory.html')

@app.route('/showHistorySPSO', methods=['GET', 'POST'])
def spso_history():
    return render_template('showHistory/spsoHistory.html')

@app.route('/showHistoryStudent', methods=['GET', 'POST'])
def spso_history_student():
    return render_template('showHistory/spsoHistoryStudent.html')

@app.route('/showHistoryStudentResult', methods=['GET', 'POST'])
def spso_history_student_result():
    return render_template('showHistory/spsoHistoryStudentResult.html')

@app.route('/showHistoryPrinter', methods=['GET', 'POST'])
def spso_history_printer():
    return render_template('showHistory/spsoHistoryPrinter.html')

@app.route('/showHistoryPrinterResult', methods=['GET', 'POST'])
def spso_history_printer_result():
    return render_template('showHistory/spsoHistoryPrinterResult.html')

@app.route('/showRequestQueue', methods=['GET', 'POST'])
def show_request_queue():
    return render_template('showRequestQueue/studentRequestQueue.html')

@app.route('/showRequestQueueSPSO', methods=['GET', 'POST'])
def show_request_queue_spso():
    return render_template('showRequestQueue/spsoRequestQueue.html')

@app.route('/showRequestQueue1', methods=['GET', 'POST'])
def show_request_queue1():
    return render_template('showRequestQueue/studentRequestQueue1.html')

@app.route('/showRequestQueueStudent', methods=['GET', 'POST'])
def show_request_queue_student():
    return render_template('showRequestQueue/spsoRequestQueueStudent.html')

@app.route('/showRequestQueueStudentResult', methods=['GET', 'POST'])
def show_request_queue_student_result():
    return render_template('showRequestQueue/spsoRequestQueueStudentResult.html')

@app.route('/showRequestQueuePrinter', methods=['GET', 'POST'])
def show_request_queue_printer():
    return render_template('showRequestQueue/spsoRequestQueuePrinter.html')

@app.route('/showRequestQueuePrinterResult', methods=['GET', 'POST'])
def show_request_queue_printer_result():
    return render_template('showRequestQueue/spsoRequestQueuePrinterResult.html')

@app.route('/showRequestQueuePrinterResult1', methods=['GET', 'POST'])
def show_request_queue_printer_result1():
    return render_template('showRequestQueue/spsoRequestQueuePrinterResult1.html')

if __name__ == '__main__':
    app.secret_key = 'super secret key'
    
    app.run(debug=True)