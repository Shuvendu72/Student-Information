import React, {Component} from 'react';


class Arts extends Component {
    render() {
        const { data } = this.props
        console.log(this.props)

        return (
            <div className="Details">
                {data.map((value) => {
                    return (
                        <article className="Detail">
                        <div className="DetailWrapper" >
                        <img src={value.image} />
                        <h1>{value.name}</h1>
                        <h1>{value.department}</h1>
                        <h1>Hindi:-{value.scorecard.Hindi}</h1>
                        <h1>English:-{value.scorecard.Hindi}</h1>
                        <h1>History:-{value.scorecard.History}</h1>
                        <h1>Geography:-{value.scorecard.Geography}</h1>
                        <h1>Civics:-{value.scorecard.Civics}</h1>
                    </div>
                    </article>
                    )
                })}
            {/* </article> */}
            </div>
        )
    }
}

export default Arts;