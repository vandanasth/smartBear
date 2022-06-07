import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../context";


const Utility = ({ classes }) => {
    const [isOpen, setOpen] = useState(false)
    const [parameters, setParameters] = useState([])
    const [responses, setResponses] = useState([])
    const { data } = useContext(MyContext) // fetching data from context
    const { pathname } = useLocation()

    // on Click of summary seting data in local state
    const handleClick = (e, val) => {
        setOpen(true)
        setParameters(val.parameters)
        setResponses(val.responses)

    }

    return (
        <>
            <div className={classes.clickMe}>Please Click me!!</div>
            {/* display summary data for each path */}
            {<div className={classes.container}>
                {Object.entries(data?.paths[pathname]).map(([key, val]) =>
                    <div className={classes.content} key={key + 1}
                        onClick={(e) => { handleClick(e, val) }}><h4>Summary</h4>{val.summary}</div>
                )}
            </div>}
            {/* below code will display Parameter and Response Section */}
            {isOpen && <>
                {parameters.map((parameter, i) =>
                    <div key={i + 1}>
                        <h4 className={classes.heading}>Parameter Data</h4>
                        <div className={classes.description}>{parameter.description}</div>
                    </div>)}
                <h4 className={classes.heading}>Responses Data</h4>
                {Object.entries(responses).map(([key, val]) =>
                    <div className={classes.description} key={key + 1}>{val.description}</div>)}
            </>}
        </>
    )
}

Utility.propTypes = {
    classes: PropTypes.object.isRequired
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        display: "flex",
        flexDirection: 'column',
        color: "#173647",
        boxShadow: "0 0 15px -2px rgb(23 54 71 / 30%)",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        minHeight: "30vh",
        width: "20vw",
        margin: "40px",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '19px',
        fontFamily: 'sans-serif',
        padding: '15px'
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '7px'
    },
    description: {
        display: 'flex',
        justifyContent: 'center',
    },
    clickMe: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
}


export default withStyles(styles)(Utility);
