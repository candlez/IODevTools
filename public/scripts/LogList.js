var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

export default function LogList(_ref) {
    var socket = _ref.socket;

    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        timeStamps = _React$useState2[0],
        setTimeStamps = _React$useState2[1];

    var _React$useState3 = React.useState(true),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isLoading = _React$useState4[0],
        setLoading = _React$useState4[1];

    React.useEffect(function () {
        new Promise(function (resolve, reject) {
            socket.once("logListSent", function (data) {
                console.log("Recieved Log List: ", data);
                resolve(data);
            });
            socket.emit("requestLogList");
        }).then(function (result) {
            setTimeStamps(result);
            setLoading(false);
        });
    }, [socket]);

    if (isLoading) {
        return React.createElement(
            "h1",
            null,
            "Loading"
        );
    }

    return React.createElement(
        "ul",
        null,
        timeStamps.map(function (timeStamp) {
            return React.createElement(
                "li",
                {
                    key: timeStamp.timestamp
                },
                timeStamp.timestamp
            );
        })
    );
}