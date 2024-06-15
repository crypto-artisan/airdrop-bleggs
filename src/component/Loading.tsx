import "./Loading.css"
const Loading = () => {
    return (
        <div className="loadingspinner">
            <div id="square1" style={{ backgroundImage: "url('image/candle (1).jpg')", backgroundSize: "cover" }}></div>
            <div id="square2" style={{ backgroundImage: "url('image/candle (2).jpgg')", backgroundSize: "cover" }}></div>
            <div id="square3" style={{ backgroundImage: "url('image/candle (3).jpg')", backgroundSize: "cover" }}></div>
            <div id="square4" style={{ backgroundImage: "url('image/candle (4).jpg')", backgroundSize: "cover" }}></div>
            <div id="square5" style={{ backgroundImage: "url('image/candle (5).jpg')", backgroundSize: "cover" }}></div>
        </div>
    );
};

export default Loading