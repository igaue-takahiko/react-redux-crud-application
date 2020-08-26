import React from 'react';

const App = () => {
    const profiles = [{
        name: "太朗",
        age: 10
    }, {
        name: "花子",
        age: 15
    }]
    return (
        <div > {
            profiles.map((profile,index) => {
                return <User name = {
                    profile.name
                }
                age = {
                    profile.age
                }
                key={
                    index
                }
                />
            })
        }
        </div>
    )
}

const User = (props) => {
    return <div > 私は {
        props.name
    }, で年齢は {
        props.age
    }
    です。 </div>
}
export default App;