function schoolGrades(arr) {
    let students = new Map();
    for (let line of arr) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map(Number);


        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);

            students.set(name, allGrades)
        } else {
            students.set(name, grades);
        }


        let studentEntries = Array.from(students.entries());
        let sortedStudents = studentEntries.sort((a, b) => {

            let studentGradesA = a[1];
            let studentGradesB = b[1];

            let averageGradeA = getAverageGrade(studentGradesA)
            let averageGradeB = getAverageGrade(studentGradesB);

            return averageGradeA - averageGradeB;
        });

        console.log(sortedStudents)

        function getAverageGrade(students) {
            let gradesSum = 0;

            for (const grade of grades) {
                gradesSum += grade;
            }

            return gradesSum / grades.length;
        }

    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])