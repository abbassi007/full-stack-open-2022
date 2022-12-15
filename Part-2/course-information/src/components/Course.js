
const Course = ({course}) => {
    const Header = ({header}) => {
        return (
            <h2>
                {header}
            </h2>
        )
    }


    const Content = ({parts}) => {
        return(
            <div>
                <>
                {parts.map(part => 
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )}
                </>
            </div>
    
            
        )
    }
    
    
    const Total = ({parts}) => {
        let total= parts.reduce((sum, current) => sum + current.exercises,0)
        return(
            <h4>total of {total} exercises</h4>
        )
    }
    
    return (
        <>
            <Header header = {course.name}/>
            <Content parts = {course.parts}/>
            <Total parts = {course.parts}/>
        </>
    )
}

export default Course