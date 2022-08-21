import {homeStyle} from "./style/HomeStyle";
import {useStyles} from "../factory/StyleFactory";


function Home() {
    const classes = useStyles(homeStyle);

    return (
        <div id="wrapper">
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col bg-danger text-center'}>
                        s
                    </div>
                    <div className={'col bg-primary text-center'}>
                        s
                    </div>
                </div>
                <h1>Home</h1>
                <h3 className={`${classes.someStyleFont}`}>This is red</h3>
            </div>
        </div>
    )
}
export default Home;