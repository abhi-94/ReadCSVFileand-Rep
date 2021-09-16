import Datatype from '../Datatypes'

const LoadedDataReducer = (state: Datatype.Student[] = [], action: {Userdata: Datatype.Student[],type: string}): Datatype.Student[] => {
    if(action.type === "SETITEMS"){
        console.log("SETDATA OPERATION DONE",action.Userdata)
        return action.Userdata
    }
    console.log('out of if')
    return [];
};


export default LoadedDataReducer