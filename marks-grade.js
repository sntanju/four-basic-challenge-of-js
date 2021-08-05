
    function gradeOfNumber(number){
    if( number >= 80 && number <=100){
        const firstGrade = 'A+';
        return firstGrade;
    }
    else if( number >= 70 && number < 80){
        const secondGrade = 'A';
        return secondGrade;
    }
    else if( number >= 60 && number < 70){
        const thirdGrade = 'A-';
        return thirdGrade;
    }
    else if( number >= 50 && number < 60){
        const fourthGrade = 'B';
        return fourthGrade;
    }
    else if( number >= 40 && number < 50){
        const fifthGrade = 'C';
        return fifthGrade;
    }
    else{
        const lastGrade = 'F';
        return lastGrade;
    }
}   
    const number2 = gradeOfNumber(26);

    console.log('The Grade of number is ',number2);