import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import Card from '../UI/Card'
import Datatype from '../Datatypes'
import { CSVReader } from 'react-papaparse'
import { useDispatch } from 'react-redux'
let styles = require('./Form.module.css')
const FormInputdata: React.FC<{onShow: ()=>void}> = (props) => {
  const dispatch = useDispatch()
  let StudentData: Datatype.Student[] = []
  const handleOnDrop =async (data: any) => {
    if(data!==undefined||'re'){
      data.pop()
      let senddata: Datatype.Student[] = []
      for(const key in data){
        console.log('id',data[key].data[0])
        console.log('fname',data[key].data[1])
        console.log('lname',data[key].data[2])
        console.log('age',data[key].data[3])
        console.log('email',data[key].data[4])
        senddata.push({id: data[key].data[0],fname: data[key].data[1],lname:data[key].data[2],age: data[key].data[3], email: data[key].data[4],phno: data[key].data[5]})
      }
      console.log('hello',senddata)
      setTimeout(() => {
        dispatch({ Userdata: senddata, type: "SETITEMS" })
      }, 200)
      props.onShow()
      return
    }
    handleOnDrop('re')
  }
  const handleOnError = (data: any) => {
    console.log(data)
  }
  return (
    <Card cname={styles.section}>
      <label className={styles.headd}>Enter Student Detail</label>
      <Formik
        initialValues={
          Datatype.StudentDefaultData
        }
        validationSchema={Yup.object({
          fname: Yup.string().required("Required").max(15, "Maximum 15").trim("Required"),
          lname: Yup.string().required("Required").max(15, "Maximum 15").trim("Required"),
          phno: Yup.string().required("Required").max(10, "Maximum 10").trim("Required").min(10, "Minimum 10 Digits"),
          email: Yup.string().required("Required").email("enter Valied Mail").trim("Required"),
          age: Yup.string().required("Required")
        })}
        onSubmit={async (values) => {
          StudentData.push({ fname: values.fname, id: Date.now(), lname: values.lname, phno: values.phno, email: values.email, age: values.age })
          console.log(StudentData)
          let csv = ''
          StudentData.forEach(obj => {
            let row = [];
            row.push(obj.id)
            row.push(obj.fname)
            row.push(obj.lname)
            row.push(obj.age)
            row.push(obj.email)
            row.push(obj.phno)
            csv += row.join(',') + "\n";
          })
          let csvData = new Blob([csv], { type: 'text/csv' });
          let csvUrl = URL.createObjectURL(csvData);

          let hiddenElement = document.createElement('a');
          hiddenElement.href = csvUrl;
          console.log(csvUrl)
          hiddenElement.target = '_blank';
          hiddenElement.download = 'student-data.csv';
          hiddenElement.click();
        }}
      >{formik =>
        <Form className={styles.form}>
          <label >First Name:</label>
          <Field name="fname" placeholder="First Name" type="text" />
          {formik.touched.fname && formik.errors.fname ? <div>{formik.errors.fname}</div> : null}
          <br></br>
          <label >Last Name:</label>
          <Field name="lname" placeholder="Last Name" />
          {formik.touched.lname && formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
          <br></br>
          <label >Phone No:</label>
          <Field name="phno" placeholder="enter Strong Password" type="text" />
          {formik.touched.phno && formik.errors.phno ? <div>{formik.errors.phno}</div> : null}
          <br></br>
          <label >Email:</label>
          <Field name="email" placeholder="Email" />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <br></br>
          <label >Age:</label>
          <Field name="age" type="number" max="99" min="12" placeholder="18" />
          {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
          <br></br>
          <br></br>
          <button type="button" onClick={() => {
            let dat = { ...formik.values, id: Date.now() }
            StudentData.push(dat)
            formik.setValues(Datatype.StudentDefaultData)
            formik.setTouched({ age: false, fname: false, lname: false, email: false, phno: false })
          }}>Create Entry</button>
          <button type="submit">Create File and upload</button>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            style={{}}
            noDrag
            config={{}}
          >
            <span>Select File</span>
          </CSVReader>
        </Form>}
      </Formik>
    </Card >
  )
}

export default FormInputdata