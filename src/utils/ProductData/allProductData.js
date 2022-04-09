import chassis from "./chassisData";
import memory from "./memoryData";
import motherBoard from "./motherBoardData";
import processor from "./processorData.js";
import videoCard from "./videoCardData";

const allProducts = [
    ...chassis,
    ...memory,
    ...motherBoard,
    ...processor,
    ...videoCard
]

export default allProducts