export interface info {
	
    firstName: string,
    lastName: string,
    phoneNumber: number,
    bio: string,
    email: string,
    linkedin: string,
    linkedinImg: string,
    github: string,
    university: string,
    degree: string,
    fieldOfStudy: string,
    fromDate: Date,
    toDate: Date,
    experiences: string [
        imageURL: string,
        organizationName: string,
        companyURL: string,
        fromDate: string,
        toDate: string
    ],
	[skills: string]: {
        name: string,
        skill: number
    }
}