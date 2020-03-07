import React, {Component} from 'react';


class Commerce extends Component {
    render() {
        const { data } = this.props
        // console.log(this.props)

        return (
            <div className="Details">
                {data.map((value) => {
                    return (
                        <article className="Detail">
                        <div className="DetailWrapper" >
                        <img src={value.image} />
                        <h1>{value.name}</h1>
                        <h1>{value.department}</h1>
                        <h1>Hindi:- {value.scorecard.Hindi}</h1>
                        <h1>English:-{value.scorecard.English}</h1>
                        <h1>Account:-{value.scorecard.Account}</h1>
                        <h1>Economics:-{value.scorecard.Economics}</h1>
                        <h1>Finance:-{value.scorecard.Finance}</h1>
                    </div>
                    </article>
                    )
                })}
            {/* </article> */}
            </div>
        )
    }
}

export default Commerce;