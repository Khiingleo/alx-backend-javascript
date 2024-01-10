interface MajorCredits {
    brand: 'MajorCreds';
    credits: number;
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCreds';
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    return { credits: subject1.credits + subject2.credits, brand: 'MajorCreds' };
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return { credits: subject1.credits + subject2.credits, brand: 'MinorCreds' };
};