function calculatePass() {
    const subjects = [
      parseInt(document.getElementById('subject1').value),
      parseInt(document.getElementById('subject2').value),
      parseInt(document.getElementById('subject3').value),
      parseInt(document.getElementById('subject4').value),
      parseInt(document.getElementById('subject5').value),
      parseInt(document.getElementById('subject6').value),
      parseInt(document.getElementById('subject7').value),
      parseInt(document.getElementById('subject8').value),
    ];
  
    // Check for invalid marks
    if (subjects.some((mark) => isNaN(mark) || mark < 0 || mark > 100)) {
      document.getElementById('error').innerHTML = "Error: Please enter valid percentages between 0 and 100.";
      return;
    }
     // Calculate APS
  const aps = subjects.reduce((acc, mark) => {
    let points = 0;
    if (mark >= 90) points = 7;
    else if (mark >= 80) points = 7;
    else if (mark >= 70) points = 6;
    else if (mark >= 60) points = 5;
    else if (mark >= 50) points = 4;
    else if (mark >= 40) points = 3;
    else if (mark >= 30) points = 2;
    else points = 1;
    return acc + points;
  }, 0);

  document.getElementById('aps').innerHTML = `APS: ${aps}`;


    // Pass requirements
    let passResultText;
    if (subjects[0] >= 40 && subjects.filter((mark, index) => index !== 3 && mark >= 50).length >= 4 && subjects.filter((mark) => mark >= 30).length >= 6) {
      passResultText = "You have passed with a Bachelor's Degree Pass!";
    } else if (subjects[0] >= 40 && subjects.filter((mark, index) => index !== 3 && mark >= 40).length >= 3 && subjects.filter((mark) => mark >= 30).length >= 6) {
      passResultText = "You have passed with a Diploma Pass!";
    } else if (subjects[0] >= 30 && subjects.filter((mark, index) => index !== 3 && mark >= 30).length >= 2 && subjects.filter((mark) => mark >= 30).length >= 6) {
      passResultText = "You have passed with a Higher Certificate Pass!";
    } else {
      passResultText = "You did not meet the minimum pass requirements.";
    }
  
    document.getElementById('result').innerHTML = passResultText;
    document.getElementById('pdfButton').style.display = 'block';
  }
  //=======pdf start=====--=======
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Add the title
    doc.setFontSize(18);
    doc.text(20, 20, 'NSC Pass Result');
  
    // Add subject details
    doc.setFontSize(12);
    let yPosition = 30;
    doc.text(20, yPosition, `HOME LANGUAGE: ${document.getElementById('subject1').value}%`);
    yPosition += 10;
    doc.text(20, yPosition, `FIRST ADDITIONAL LANGUAGE: ${document.getElementById('subject2').value}%`);
    yPosition += 10;
    doc.text(20, yPosition, `MATHEMATICS / MATHEMATICAL LITERACY: ${document.getElementById('subject3').value}%`);
    yPosition += 10;
    doc.text(20, yPosition, `LIFE ORIENTATION: ${document.getElementById('subject4').value}%`);
  
    // Add selected subjects and marks only if selected
    const selectedSubjects = [
      { selectId: 'subject5Select', inputId: 'subject5' },
      { selectId: 'subject6Select', inputId: 'subject6' },
      { selectId: 'subject7Select', inputId: 'subject7' },
      { selectId: 'subject8Select', inputId: 'subject8' },
    ];
  
    selectedSubjects.forEach(({ selectId, inputId }) => {
      const selectElement = document.getElementById(selectId);
      const inputElement = document.getElementById(inputId);
      if (selectElement && inputElement) {
        const selectedSubject = selectElement.value;
        const subjectMark = inputElement.value;
        if (selectedSubject && subjectMark) {
          yPosition += 10;
          doc.text(20, yPosition, `${selectedSubject.toUpperCase()} - ${subjectMark}%`);
        }
      }
    });
  
    // Add level descriptions
    yPosition += 20;
    doc.setFontSize(12);
    doc.text(20, yPosition, 'Level Descriptions:');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 7: 80 - 100% (Outstanding achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 6: 70 - 79% (Meritorious achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 5: 60 - 69% (Substantial achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 4: 50 - 59% (Moderate achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 3: 40 - 49% (Adequate achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 2: 30 - 39% (Elementary achievement)');
    yPosition += 10;
    doc.text(20, yPosition, 'Level 1: 0 - 29% (Not achieved – Fail)');
  
    // Add APS
    yPosition += 20;
    doc.setFontSize(14);
    doc.text(20, yPosition, `APS: ${document.getElementById('aps').textContent}`);
  
    // Add the final result
    yPosition += 10;
    doc.text(20, yPosition, `Result: ${document.getElementById('result').textContent}`);
  
    // Save the PDF
    doc.save('NSC_Pass_Result.pdf');
  }
  
  
  
  // Populate the dropdowns
  const subjects = [
    "Accounting",
    "Agricultural Management Practices",
    "Agricultural Sciences",
    "Agricultural Technology",
    "Business Studies",
    "Civil Technology",
    "Computer Applications Technology",
    "Consumer Studies",
    "Dance Studies",
    "Design",
    "Dramatic Arts",
    "Economics",
    "Electrical Technology",
    "Engineering Graphics & Design",
    "Geography",
    "History",
    "Hospitality Studies",
    "Information Technology",
    "Life Sciences",
    "Mechanical Technology",
    "Music",
    "Physical Science",
    "Religion Studies",
    "Second Additional Language",
    "Third Additional Language",
    "Tourism",
    "Visual Arts",
  ];
  
  // Populate the subject dropdowns
 const subjectDropdowns = ['subject5Select', 'subject6Select', 'subject7Select', 'subject8Select'];





 