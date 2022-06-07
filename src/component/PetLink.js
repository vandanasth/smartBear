import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

const PetLink = ({ classes }) => {
    const { data } = useContext(MyContext)
    const keys = (data && data.paths) && Object.keys(data.paths)

    return (
        <>
            {/* display all the paths group by different cateogry  */}
            <div className={classes.collpase}>
                {data?.tags?.map((tag) => {
                    return <Collapsible key={tag.name} tabIndex={0}
                        className={classes.accord}
                        style={{ 'border': '1px solid black' }}
                        trigger={tag.description}>
                        {keys?.map((key) => {
                            if (key.includes(tag.name)) {
                                return <Link className={classes.link} key={key} to={key}>{key}</Link>
                            }
                        })}
                    </Collapsible>
                })}
            </div>
        </>
    );

}
PetLink.propTypes = {
    classes: PropTypes.object.isRequired
}

const styles = {
    accord: {
        boxShadow: "0 0 15px -2px rgb(23 54 71 / 30%)",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        width: "95vw",
        minHeight: "5vh",
        padding: "15px",
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10px',
        '&::after': {
            content: '"\u2304"'
        },
        '& .is-closed': {
            width: '100vw'
        },

    },
    accordIsOpen: {
        boxShadow: "0 0 15px -2px rgb(23 54 71 / 30%)",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        width: "95vw",
        minHeight: "5vh",
        padding: "15px",
        display: 'flex',
        justifyContent: 'space-between',
    },
    collpase: {
        margin: '20px'
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        fontSize: '15px',
    },

}

export default withStyles(styles)(PetLink);