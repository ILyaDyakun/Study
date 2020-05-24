function Student(nameArg, emailArg) {
    const name = nameArg;
    const email = emailArg;
    const homeworkResults = [];

    this.getName = () => {
        return name;
    }

    this.getEmail = () => {
        return email;
    }

    this.getHomeworkResults = () => {
        return homeworkResults;
    }

    this.addHomeworkResult = (topic, success) => {
        const result = {
            topic: topic,
            success: success
        };
        homeworkResults.push(result);
    }
}

function FrontendLab(students, failedLimit) {
    const failedHomeworksLimit = failedLimit;
    const studentsList = students.map((student) => {
        return new Student(student.name , student.email);
    });

    this.printStudentsList = () => {
        studentsList.forEach((student) => {
            const name = student.getName();
            const email = student.getEmail();
            const homeworkResults = student.getHomeworkResults();
            console.log(`name: ${name}, email: ${email}`);
            console.log(homeworkResults);
        });
    }

    this.addHomeworkResults = (homeworkResults) => {
        homeworkResults.results.forEach((result) => {
            const currentStudent = studentsList.find((student) => {
                return student.getEmail() === result.email;
            });

            if (currentStudent) {
                currentStudent.addHomeworkResult(homeworkResults.topic, result.success);
            } 
        });
    }

    this.printStudentsEligibleForTest = () => {
        const eligibleStudents = studentsList.filter((student) => {
            const homeworkResults = student.getHomeworkResults();
            const failedHomeworks = homeworkResults.filter((homeworkResult) => {
                return !homeworkResult.success;
            });
            return failedHomeworks.length <= failedHomeworksLimit;
        });
        eligibleStudents.forEach((student) => {
            const name = student.getName();
            const email = student.getEmail();
            console.log(`name: ${name}, email: ${email}`);
        });
    }

}






