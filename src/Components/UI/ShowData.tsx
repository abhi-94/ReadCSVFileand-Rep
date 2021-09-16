import { useSelector } from "react-redux"
import Datatype from "../Datatypes"
import Card from "./Card"
import styles from './ShowData.module.css'

const ShowData = () => {
    const data = useSelector<Datatype.Student[], Datatype.Student[]>(state => state)
    console.log(data)
    return (
        <Card cname={styles.section}>
            <label> Data abstract from File</label>
            <div className={styles.tabl}>
                <div className={styles['record-head']}>
                    <div>
                        Id
                    </div>
                    <div>
                        First Name
                    </div>
                    <div>
                        Last Name
                    </div>
                    <div>
                        Age
                    </div>
                    <div>
                        E-mail
                    </div>
                    <div>
                        Phone Number
                    </div>
                </div>
                {data.map((Stud: Datatype.Student) => (
                    <div className={styles['record-head']}>
                        <div>
                            {Stud.id}
                        </div>
                        <div>
                            {Stud.fname}
                        </div>
                        <div>
                            {Stud.lname}
                        </div>
                        <div>
                            {Stud.age}
                        </div>
                        <div>
                            {Stud.email}
                        </div>
                        <div>
                            {Stud.phno}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
        /*<table>
            <th>
                <td>
                    ID
                </td>
                <td>
                    First Name
                </td>
                <td>
                    Last Name
                </td>
                <td>
                    AGE
                </td>
                <td>
                    E-mail
                </td>
                <td>
                    Phone Number
                </td>
            </th>
            {data.map((Stud)=>{
                {console.log(Stud)}
                <tr>
                    <td>
                        {Stud.id}
                    </td>
                    <td>
                        {Stud.fname}
                    </td>
                    <td>
                        {Stud.lname}
                    </td>
                    <td>
                        {Stud.age}
                    </td>
                    <td>
                        {Stud.email}
                    </td>
                    <td>
                        {Stud.phno}
                    </td>
                </tr>
            })}
        </table>*/
    )
}
export default ShowData