import React, {Component} from 'react';


class Medical extends Component {
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
                        <h1>Biology:-{value.scorecard.Biology}</h1>
                        <h1>Hindi:-{value.scorecard.Hindi}</h1>
                        <h1>English:-{value.scorecard.English}</h1>
                        <h1>Physics:-{value.scorecard.Physics}</h1>
                        <h1>Chemistry:-{value.scorecard.Chemistry}</h1>
                       </div>
                    </article>
                    )
                })}
            </div>
            
        )
    }
}

export default Medical;