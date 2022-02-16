import React from "react";

export default function App() {
    const [array, setArray] = React.useState(null);

    React.useEffect(() => {
      const fetchData = async () => {
        const body = await fetch('/home');
        const json = await body.json();
        console.log(json);
        setArray(json);
      };
      fetchData()
    }, []);

    return (
        <div className="App">
            {<div>
                {
                    array
                        ? array.map(item => Object.entries(item).map(([key, value]) => (
                            <p key={key}>{key}, {value}</p>
                        )))
                        : "Loading..."
                }
            </div>}
        </div>
    );
}