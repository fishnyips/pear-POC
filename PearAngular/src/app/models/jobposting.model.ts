
class Jobposting {
    _id:string;
    project: string;
    charity: string;
    post_date: Date;
    num_applicants: Number;
    num_pears: Number;
    num_positions: Number;

    constructor(
    ){
        this.project = ""
        this.charity = ""
        this.post_date = new Date()
        this.num_applicants = 0
        this.num_pears = 0
        this.num_positions = 0
    }
}

export default Jobposting;