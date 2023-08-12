import { Link, useNavigate, useParams } from "react-router-dom"
import courses from "../data/courses"
import NotFound from "./NotFound"
import { useEffect } from "react"

function Singlecourse() {
const params = useParams ()
const navigate = useNavigate ()


const course = courses.find((course)=> 
course.slug === params.coursesSlug)
useEffect (()=> {
    if (!course) {
        navigate('..', {relative: 'path'})
    
    }
    
}, [course, navigate])


//if (!course) {
//    return    <NotFound />
//}

return (<>
  
    <h1>{course?.title}</h1>
    <h2>{course?.slug}</h2>
    <h2>{course?.id}</h2>
    <Link to=".."/*на ссылку выше */ 
    relative="path"/*свойство Link "относительно этого пути"*/>
    All Courses</Link>

  </>
  )
}

export default Singlecourse