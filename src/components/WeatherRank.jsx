export default function WeatherRank({rankKind, other}) {
    return(
        <div className="border border-gray-300 shadow-md p-6">
            <h2 className="font-bold text-2xl">{rankKind}</h2>
            <p>{other}</p>
        </div>
    )
}