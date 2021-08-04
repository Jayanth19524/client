import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgb(64,64,64)',
      },
      image: {
        marginLeft: '15px',
      },
}));