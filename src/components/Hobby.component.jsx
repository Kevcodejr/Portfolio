import HeaderTitle from "./HeaderTitle.component";
import Entry from "./Entry.component";


function Hobby(props) {
    const lang = props.lang.hobbies;
    const entryCompArray = [];
    let titleReader = "";
    let descReader = "";
    let isDesc = false;

    for (const key in lang) {
        if (isDesc == false) {
            titleReader = lang[key];
            isDesc = true;
        }
        else {
            descReader = lang[key];
            entryCompArray.push(<Entry key={entryCompArray.length} title={titleReader} desc={descReader}></Entry>);
            isDesc = false;
            titleReader = "";
            descReader = "";
        }

    }

    return (
        <div className="homeSiding categoryMarginLeft rightAlign" style={{marginTop: "60px"}}>
            <HeaderTitle className="sectionTitle" text={props.lang.categories.hobbies}></HeaderTitle>
            {entryCompArray}
        </div>
    )
}

export default Hobby;