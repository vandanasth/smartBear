import { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import PetLink from './PetLink'
import { MyContext } from "../context";

const Info = ({ classes }) => {
    const { data } = useContext(MyContext)
    return (
        <>
            {/* display swagger store info */}
            <div className={classes.title}>{data?.info?.title}</div>
            <div className={classes.description}>{data?.info?.description}</div>

            <PetLink></PetLink>

            <div className={classes.details}>
                <div className={classes.container}>
                    <div className={classes.contact}>Contact Us: </div>
                    <div className={classes.email}>{data?.info?.contact?.email}</div>
                </div>
                <div className={classes.container}>
                    <div className={classes.contact}>Terms of Service </div>
                    <div className={classes.termsOfService}>{data?.info?.termsOfService}</div>
                </div>
                <div className={classes.container}>
                    <div className={classes.contact}>License: </div>
                    <div className={classes.url}>{data?.info?.license?.url}</div>
                    <div className={classes.name}>{data?.info?.license?.name}</div>
                </div>
            </div>
            <div className={classes.version}>version: {data?.info?.version}</div>


        </>
    );

}
Info.propTypes = {
    classes: PropTypes.object.isRequired
}

const styles = {
    details: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh'
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        color: "#173647",
        boxShadow: "0 0 15px -2px rgb(23 54 71 / 30%)",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        minHeight: "30vh",
        width: "20vw",
        margin: "40px"
    },
    title: {
        color: 'black',
        fontWeight: 800,
        margin: '40px 0px 10px 40px',
        display: 'flex'
    },
    contact: {
        padding: '30px',
        fontSize: '20px',
        fontWeight: '800'
    },
    email: {
        padding: '0 10px 10px 30px',
        fontSize: '17px',
        fontWeight: 400,
        fontFamily: 'serif'
    },
    description: {
        display: 'flex',
        fontSize: '15px',
        fontWeight: 300,
        margin: '0px auto auto 40px',
        fontFamily: 'serif'
    },
    name: {
        fontSize: '15px',
        fontWeight: 600,
        padding: '0px 10px 10px 30px',
        fontFamily: 'serif'
    },
    url: {
        fontSize: '13px',
        fontWeight: 400,
        margin: '0px 10px 10px 30px',
        fontFamily: 'serif'
    },
    termsOfService: {
        fontSize: '17px',
        fontWeight: 400,
        padding: '0px 10px 10px 30px',
        fontFamily: 'serif'
    },
    version: {
        fontSize: '17px',
        fontWeight: 400,
        padding: '0px 10px 10px 30px',
        fontFamily: 'serif',
        display: 'flex',
        justifyContent: 'center'
    },
    accord: {
        boxShadow: "0 0 15px -2px rgb(23 54 71 / 30%)",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        width: "95vw",
        minHeight: "5vh",
        padding: "15px"
    },
    collpase: {
        margin: '20px'
    },
    link: {
        display: 'flex',
        flexDirection: 'column'
    }
}

export default withStyles(styles)(Info);