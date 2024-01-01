

export default function LogList({socket}) {
    const [timeStamps, setTimeStamps] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        new Promise((resolve, reject) => {
            socket.once("logListSent", (data) => {
                console.log("Recieved Log List: ", data);
                resolve(data);
            });
            socket.emit("requestLogList");
        }).then(result => {
            setTimeStamps(result);
            setLoading(false)
        });
    }, [socket]);

    if (isLoading) {
        return (
            <h1>Loading</h1>
        );
    }

    return (
        <ul>
            {timeStamps.map(timeStamp => (
                <li
                    key={timeStamp.timestamp}
                >
                    {timeStamp.timestamp}
                </li>
            ))}
        </ul>
    );
}

