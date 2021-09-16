namespace Datatype{
    export interface Student{
        id: number,
        fname: string,
        lname: string,
        email: string,
        phno: string,
        age: string,
    }
    export const StudentDefaultData: Student = {
        id: 0,
        fname: "",
        lname: "",
        email: "",
        phno: "",
        age: '',
    }
}

export default Datatype